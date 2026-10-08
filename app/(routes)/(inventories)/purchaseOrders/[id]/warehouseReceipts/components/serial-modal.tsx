"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductSku } from "@prisma/client";
import { FC } from "react";
import { SerialForm } from "./serial-form";

interface SerialModalProps {
  isOpen: boolean;
  onClose: () => void;
  purchaseOrderId: number;
  warehouseReceipt: {
    id: number;
    receiptNumber: string;
  };
  data: ProductSku[];
}

const SerialModal: FC<SerialModalProps> = ({
  isOpen,
  onClose,
  purchaseOrderId,
  warehouseReceipt,
  data,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Warehouse Receipt</DialogTitle>
          <DialogDescription>
            You are currently processing{" "}
            <strong>Warehouse Receipt #{warehouseReceipt.receiptNumber}</strong>
            {". Please verify the details before proceeding."}
          </DialogDescription>
        </DialogHeader>

        <SerialForm
          onClose={onClose}
          purchaseOrderId={purchaseOrderId}
          skus={data}
          warehouseReceiptId={warehouseReceipt.id}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SerialModal;
