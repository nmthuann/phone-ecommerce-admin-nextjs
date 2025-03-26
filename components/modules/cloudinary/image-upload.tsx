'use client'

import { CldUploadWidget } from 'next-cloudinary'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import { ImagePlus, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export type ImageOptions = {
  maxFileSize: number // Kích thước file tối đa 300 KB
  maxImageFileSize: number // Kích thước hình ảnh tối đa 300 KB
  maxImageWidth: number // Chiều rộng tối đa 300 pixels
  maxImageHeight: number // Chiều cao tối đa 300 pixels
  multiple: boolean
}
interface ImageUploadProps {
  disabled?: boolean
  onChange: (value: string) => void
  onRemove: (value: string) => void
  value: string[]
  imageOptions: ImageOptions
}

const ImageUpload: React.FC<ImageUploadProps> = ({ disabled, onChange, onRemove, value, imageOptions }) => {
  const [isMounted, setIsMounted] = useState(false)
  const defaultUrl = 'https://res.cloudinary.com/ddyreawwf/image/upload/v1732779960/no-image_ur9qsg.jpg'
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSuccess = async (results: unknown) => {
    const result = results as { info: { secure_url: string } }
    console.log(result.info.secure_url)
    onChange(result.info.secure_url)
  }

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <div className='mb-4 flex items-center gap-4'>
        {value.map(imageUrl => (
          <div key={imageUrl} className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
            {imageUrl !== defaultUrl ? (
              <div className='z-10 absolute top-2 right-2'>
                <Button type='button' onClick={() => onRemove(imageUrl)} variant='destructive' size='sm'>
                  <Trash className='h-4 w-4' />
                </Button>
              </div>
            ) : (
              <div className='z-10 absolute top-2 right-2'>
                <Badge>Default for Product Thumb</Badge>
              </div>
            )}
            <Image fill className='object-cover' alt='Image' src={imageUrl} />
          </div>
        ))}
      </div>

      <CldUploadWidget
        options={{
          cropping: true,
          croppingAspectRatio: 1,
          maxFileSize: imageOptions.maxFileSize, // Sử dụng enum
          maxImageFileSize: imageOptions.maxImageFileSize, // Sử dụng enum
          maxImageWidth: imageOptions.maxImageWidth, // Sử dụng enum
          maxImageHeight: imageOptions.maxImageHeight, // Sử dụng enum
          multiple: imageOptions.multiple,
          maxFiles: imageOptions.multiple ? 10 : 1,
          resourceType: 'image',
          clientAllowedFormats: ['image']
        }}
        uploadPreset='grocery_finder'
        signatureEndpoint='/api/sign-cloudinary-params'
        onSuccess={handleSuccess}
        onQueuesEnd={(result, { widget }) => {
          widget.close()
        }}
      >
        {({ open }) => {
          const onClick = () => {
            open()
          }

          return (
            <Button type='button' disabled={disabled} variant='secondary' onClick={onClick}>
              <ImagePlus className='h-4 w-4 mr-2' />
              Upload an Image
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default ImageUpload
