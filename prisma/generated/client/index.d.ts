
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductSku
 * 
 */
export type ProductSku = $Result.DefaultSelection<Prisma.$ProductSkuPayload>
/**
 * Model SpuSkuMapping
 * 
 */
export type SpuSkuMapping = $Result.DefaultSelection<Prisma.$SpuSkuMappingPayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model PurchaseOrder
 * 
 */
export type PurchaseOrder = $Result.DefaultSelection<Prisma.$PurchaseOrderPayload>
/**
 * Model PurchaseOrderDetail
 * 
 */
export type PurchaseOrderDetail = $Result.DefaultSelection<Prisma.$PurchaseOrderDetailPayload>
/**
 * Model WarehouseReceipt
 * 
 */
export type WarehouseReceipt = $Result.DefaultSelection<Prisma.$WarehouseReceiptPayload>
/**
 * Model ProductSerial
 * 
 */
export type ProductSerial = $Result.DefaultSelection<Prisma.$ProductSerialPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderDetail
 * 
 */
export type OrderDetail = $Result.DefaultSelection<Prisma.$OrderDetailPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brand.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brand.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSku`: Exposes CRUD operations for the **ProductSku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSkus
    * const productSkus = await prisma.productSku.findMany()
    * ```
    */
  get productSku(): Prisma.ProductSkuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spuSkuMapping`: Exposes CRUD operations for the **SpuSkuMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpuSkuMappings
    * const spuSkuMappings = await prisma.spuSkuMapping.findMany()
    * ```
    */
  get spuSkuMapping(): Prisma.SpuSkuMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrder`: Exposes CRUD operations for the **PurchaseOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrders
    * const purchaseOrders = await prisma.purchaseOrder.findMany()
    * ```
    */
  get purchaseOrder(): Prisma.PurchaseOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseOrderDetail`: Exposes CRUD operations for the **PurchaseOrderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseOrderDetails
    * const purchaseOrderDetails = await prisma.purchaseOrderDetail.findMany()
    * ```
    */
  get purchaseOrderDetail(): Prisma.PurchaseOrderDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouseReceipt`: Exposes CRUD operations for the **WarehouseReceipt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarehouseReceipts
    * const warehouseReceipts = await prisma.warehouseReceipt.findMany()
    * ```
    */
  get warehouseReceipt(): Prisma.WarehouseReceiptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSerial`: Exposes CRUD operations for the **ProductSerial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSerials
    * const productSerials = await prisma.productSerial.findMany()
    * ```
    */
  get productSerial(): Prisma.ProductSerialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDetail`: Exposes CRUD operations for the **OrderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetail.findMany()
    * ```
    */
  get orderDetail(): Prisma.OrderDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Brand: 'Brand',
    Product: 'Product',
    ProductSku: 'ProductSku',
    SpuSkuMapping: 'SpuSkuMapping',
    Price: 'Price',
    Supplier: 'Supplier',
    PurchaseOrder: 'PurchaseOrder',
    PurchaseOrderDetail: 'PurchaseOrderDetail',
    WarehouseReceipt: 'WarehouseReceipt',
    ProductSerial: 'ProductSerial',
    Order: 'Order',
    OrderDetail: 'OrderDetail',
    Invoice: 'Invoice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "brand" | "product" | "productSku" | "spuSkuMapping" | "price" | "supplier" | "purchaseOrder" | "purchaseOrderDetail" | "warehouseReceipt" | "productSerial" | "order" | "orderDetail" | "invoice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductSku: {
        payload: Prisma.$ProductSkuPayload<ExtArgs>
        fields: Prisma.ProductSkuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSkuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSkuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          findFirst: {
            args: Prisma.ProductSkuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSkuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          findMany: {
            args: Prisma.ProductSkuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>[]
          }
          create: {
            args: Prisma.ProductSkuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          createMany: {
            args: Prisma.ProductSkuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSkuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>[]
          }
          delete: {
            args: Prisma.ProductSkuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          update: {
            args: Prisma.ProductSkuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          deleteMany: {
            args: Prisma.ProductSkuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSkuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSkuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>[]
          }
          upsert: {
            args: Prisma.ProductSkuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSkuPayload>
          }
          aggregate: {
            args: Prisma.ProductSkuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSku>
          }
          groupBy: {
            args: Prisma.ProductSkuGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSkuGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSkuCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSkuCountAggregateOutputType> | number
          }
        }
      }
      SpuSkuMapping: {
        payload: Prisma.$SpuSkuMappingPayload<ExtArgs>
        fields: Prisma.SpuSkuMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpuSkuMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpuSkuMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>
          }
          findFirst: {
            args: Prisma.SpuSkuMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpuSkuMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>
          }
          findMany: {
            args: Prisma.SpuSkuMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>[]
          }
          create: {
            args: Prisma.SpuSkuMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>
          }
          createMany: {
            args: Prisma.SpuSkuMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpuSkuMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>[]
          }
          delete: {
            args: Prisma.SpuSkuMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>
          }
          update: {
            args: Prisma.SpuSkuMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>
          }
          deleteMany: {
            args: Prisma.SpuSkuMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpuSkuMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpuSkuMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>[]
          }
          upsert: {
            args: Prisma.SpuSkuMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpuSkuMappingPayload>
          }
          aggregate: {
            args: Prisma.SpuSkuMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpuSkuMapping>
          }
          groupBy: {
            args: Prisma.SpuSkuMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpuSkuMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpuSkuMappingCountArgs<ExtArgs>
            result: $Utils.Optional<SpuSkuMappingCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrder: {
        payload: Prisma.$PurchaseOrderPayload<ExtArgs>
        fields: Prisma.PurchaseOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          update: {
            args: Prisma.PurchaseOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrder>
          }
          groupBy: {
            args: Prisma.PurchaseOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderCountAggregateOutputType> | number
          }
        }
      }
      PurchaseOrderDetail: {
        payload: Prisma.$PurchaseOrderDetailPayload<ExtArgs>
        fields: Prisma.PurchaseOrderDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseOrderDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseOrderDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>
          }
          findFirst: {
            args: Prisma.PurchaseOrderDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseOrderDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>
          }
          findMany: {
            args: Prisma.PurchaseOrderDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>[]
          }
          create: {
            args: Prisma.PurchaseOrderDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>
          }
          createMany: {
            args: Prisma.PurchaseOrderDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseOrderDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>[]
          }
          delete: {
            args: Prisma.PurchaseOrderDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>
          }
          update: {
            args: Prisma.PurchaseOrderDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseOrderDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseOrderDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseOrderDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseOrderDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseOrderDetailPayload>
          }
          aggregate: {
            args: Prisma.PurchaseOrderDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseOrderDetail>
          }
          groupBy: {
            args: Prisma.PurchaseOrderDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseOrderDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseOrderDetailCountAggregateOutputType> | number
          }
        }
      }
      WarehouseReceipt: {
        payload: Prisma.$WarehouseReceiptPayload<ExtArgs>
        fields: Prisma.WarehouseReceiptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseReceiptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseReceiptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>
          }
          findFirst: {
            args: Prisma.WarehouseReceiptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseReceiptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>
          }
          findMany: {
            args: Prisma.WarehouseReceiptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>[]
          }
          create: {
            args: Prisma.WarehouseReceiptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>
          }
          createMany: {
            args: Prisma.WarehouseReceiptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseReceiptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>[]
          }
          delete: {
            args: Prisma.WarehouseReceiptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>
          }
          update: {
            args: Prisma.WarehouseReceiptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>
          }
          deleteMany: {
            args: Prisma.WarehouseReceiptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseReceiptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseReceiptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>[]
          }
          upsert: {
            args: Prisma.WarehouseReceiptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseReceiptPayload>
          }
          aggregate: {
            args: Prisma.WarehouseReceiptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouseReceipt>
          }
          groupBy: {
            args: Prisma.WarehouseReceiptGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseReceiptGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseReceiptCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseReceiptCountAggregateOutputType> | number
          }
        }
      }
      ProductSerial: {
        payload: Prisma.$ProductSerialPayload<ExtArgs>
        fields: Prisma.ProductSerialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSerialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSerialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>
          }
          findFirst: {
            args: Prisma.ProductSerialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSerialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>
          }
          findMany: {
            args: Prisma.ProductSerialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>[]
          }
          create: {
            args: Prisma.ProductSerialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>
          }
          createMany: {
            args: Prisma.ProductSerialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSerialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>[]
          }
          delete: {
            args: Prisma.ProductSerialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>
          }
          update: {
            args: Prisma.ProductSerialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>
          }
          deleteMany: {
            args: Prisma.ProductSerialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSerialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSerialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>[]
          }
          upsert: {
            args: Prisma.ProductSerialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSerialPayload>
          }
          aggregate: {
            args: Prisma.ProductSerialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSerial>
          }
          groupBy: {
            args: Prisma.ProductSerialGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSerialGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSerialCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSerialCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderDetail: {
        payload: Prisma.$OrderDetailPayload<ExtArgs>
        fields: Prisma.OrderDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          findMany: {
            args: Prisma.OrderDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          create: {
            args: Prisma.OrderDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          createMany: {
            args: Prisma.OrderDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          delete: {
            args: Prisma.OrderDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          update: {
            args: Prisma.OrderDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>[]
          }
          upsert: {
            args: Prisma.OrderDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDetailPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDetail>
          }
          groupBy: {
            args: Prisma.OrderDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDetailCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    brand?: BrandOmit
    product?: ProductOmit
    productSku?: ProductSkuOmit
    spuSkuMapping?: SpuSkuMappingOmit
    price?: PriceOmit
    supplier?: SupplierOmit
    purchaseOrder?: PurchaseOrderOmit
    purchaseOrderDetail?: PurchaseOrderDetailOmit
    warehouseReceipt?: WarehouseReceiptOmit
    productSerial?: ProductSerialOmit
    order?: OrderOmit
    orderDetail?: OrderDetailOmit
    invoice?: InvoiceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    product: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | BrandCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    spuSkuMapping: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spuSkuMapping?: boolean | ProductCountOutputTypeCountSpuSkuMappingArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSpuSkuMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpuSkuMappingWhereInput
  }


  /**
   * Count Type ProductSkuCountOutputType
   */

  export type ProductSkuCountOutputType = {
    spuSkuMapping: number
    price: number
    purchaseOrderDetail: number
    productSerial: number
  }

  export type ProductSkuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spuSkuMapping?: boolean | ProductSkuCountOutputTypeCountSpuSkuMappingArgs
    price?: boolean | ProductSkuCountOutputTypeCountPriceArgs
    purchaseOrderDetail?: boolean | ProductSkuCountOutputTypeCountPurchaseOrderDetailArgs
    productSerial?: boolean | ProductSkuCountOutputTypeCountProductSerialArgs
  }

  // Custom InputTypes
  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSkuCountOutputType
     */
    select?: ProductSkuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeCountSpuSkuMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpuSkuMappingWhereInput
  }

  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }

  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeCountPurchaseOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderDetailWhereInput
  }

  /**
   * ProductSkuCountOutputType without action
   */
  export type ProductSkuCountOutputTypeCountProductSerialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSerialWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    purchaseOrder: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | SupplierCountOutputTypeCountPurchaseOrderArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountPurchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
  }


  /**
   * Count Type PurchaseOrderCountOutputType
   */

  export type PurchaseOrderCountOutputType = {
    purchaseOrderDetail: number
  }

  export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrderDetail?: boolean | PurchaseOrderCountOutputTypeCountPurchaseOrderDetailArgs
  }

  // Custom InputTypes
  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderCountOutputType
     */
    select?: PurchaseOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseOrderCountOutputType without action
   */
  export type PurchaseOrderCountOutputTypeCountPurchaseOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderDetailWhereInput
  }


  /**
   * Count Type WarehouseReceiptCountOutputType
   */

  export type WarehouseReceiptCountOutputType = {
    productSerial: number
  }

  export type WarehouseReceiptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSerial?: boolean | WarehouseReceiptCountOutputTypeCountProductSerialArgs
  }

  // Custom InputTypes
  /**
   * WarehouseReceiptCountOutputType without action
   */
  export type WarehouseReceiptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceiptCountOutputType
     */
    select?: WarehouseReceiptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseReceiptCountOutputType without action
   */
  export type WarehouseReceiptCountOutputTypeCountProductSerialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSerialWhereInput
  }


  /**
   * Count Type ProductSerialCountOutputType
   */

  export type ProductSerialCountOutputType = {
    orderDetail: number
  }

  export type ProductSerialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetail?: boolean | ProductSerialCountOutputTypeCountOrderDetailArgs
  }

  // Custom InputTypes
  /**
   * ProductSerialCountOutputType without action
   */
  export type ProductSerialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerialCountOutputType
     */
    select?: ProductSerialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductSerialCountOutputType without action
   */
  export type ProductSerialCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderDetail: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetail?: boolean | OrderCountOutputTypeCountOrderDetailArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandAvgAggregateOutputType = {
    id: number | null
  }

  export type BrandSumAggregateOutputType = {
    id: number | null
  }

  export type BrandMinAggregateOutputType = {
    id: number | null
    brandName: string | null
    brandUrl: string | null
    description: string | null
    brandAbbreviation: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: number | null
    brandName: string | null
    brandUrl: string | null
    description: string | null
    brandAbbreviation: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    brandName: number
    brandUrl: number
    description: number
    brandAbbreviation: number
    _all: number
  }


  export type BrandAvgAggregateInputType = {
    id?: true
  }

  export type BrandSumAggregateInputType = {
    id?: true
  }

  export type BrandMinAggregateInputType = {
    id?: true
    brandName?: true
    brandUrl?: true
    description?: true
    brandAbbreviation?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    brandName?: true
    brandUrl?: true
    description?: true
    brandAbbreviation?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    brandName?: true
    brandUrl?: true
    description?: true
    brandAbbreviation?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _avg?: BrandAvgAggregateInputType
    _sum?: BrandSumAggregateInputType
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: number
    brandName: string
    brandUrl: string
    description: string
    brandAbbreviation: string
    _count: BrandCountAggregateOutputType | null
    _avg: BrandAvgAggregateOutputType | null
    _sum: BrandSumAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    brandUrl?: boolean
    description?: boolean
    brandAbbreviation?: boolean
    product?: boolean | Brand$productArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    brandUrl?: boolean
    description?: boolean
    brandAbbreviation?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandName?: boolean
    brandUrl?: boolean
    description?: boolean
    brandAbbreviation?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    brandName?: boolean
    brandUrl?: boolean
    description?: boolean
    brandAbbreviation?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brandName" | "brandUrl" | "description" | "brandAbbreviation", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Brand$productArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandName: string
      brandUrl: string
      description: string
      brandAbbreviation: string
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Brand$productArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'Int'>
    readonly brandName: FieldRef<"Brand", 'String'>
    readonly brandUrl: FieldRef<"Brand", 'String'>
    readonly description: FieldRef<"Brand", 'String'>
    readonly brandAbbreviation: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.product
   */
  export type Brand$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    productName: string | null
    slug: string | null
    productLine: string | null
    description: string | null
    status: boolean | null
    brandId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    productName: string | null
    slug: string | null
    productLine: string | null
    description: string | null
    status: boolean | null
    brandId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productName: number
    slug: number
    productLine: number
    description: number
    status: number
    productSpecs: number
    brandId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productName?: true
    slug?: true
    productLine?: true
    description?: true
    status?: true
    brandId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productName?: true
    slug?: true
    productLine?: true
    description?: true
    status?: true
    brandId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productName?: true
    slug?: true
    productLine?: true
    description?: true
    status?: true
    productSpecs?: true
    brandId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonValue
    brandId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    slug?: boolean
    productLine?: boolean
    description?: boolean
    status?: boolean
    productSpecs?: boolean
    brandId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    spuSkuMapping?: boolean | Product$spuSkuMappingArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    slug?: boolean
    productLine?: boolean
    description?: boolean
    status?: boolean
    productSpecs?: boolean
    brandId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    slug?: boolean
    productLine?: boolean
    description?: boolean
    status?: boolean
    productSpecs?: boolean
    brandId?: boolean
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productName?: boolean
    slug?: boolean
    productLine?: boolean
    description?: boolean
    status?: boolean
    productSpecs?: boolean
    brandId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productName" | "slug" | "productLine" | "description" | "status" | "productSpecs" | "brandId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
    spuSkuMapping?: boolean | Product$spuSkuMappingArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs>
      spuSkuMapping: Prisma.$SpuSkuMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productName: string
      slug: string
      productLine: string
      description: string
      status: boolean
      productSpecs: Prisma.JsonValue
      brandId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends BrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandDefaultArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    spuSkuMapping<T extends Product$spuSkuMappingArgs<ExtArgs> = {}>(args?: Subset<T, Product$spuSkuMappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly productLine: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'Boolean'>
    readonly productSpecs: FieldRef<"Product", 'Json'>
    readonly brandId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.spuSkuMapping
   */
  export type Product$spuSkuMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    where?: SpuSkuMappingWhereInput
    orderBy?: SpuSkuMappingOrderByWithRelationInput | SpuSkuMappingOrderByWithRelationInput[]
    cursor?: SpuSkuMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpuSkuMappingScalarFieldEnum | SpuSkuMappingScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductSku
   */

  export type AggregateProductSku = {
    _count: ProductSkuCountAggregateOutputType | null
    _avg: ProductSkuAvgAggregateOutputType | null
    _sum: ProductSkuSumAggregateOutputType | null
    _min: ProductSkuMinAggregateOutputType | null
    _max: ProductSkuMaxAggregateOutputType | null
  }

  export type ProductSkuAvgAggregateOutputType = {
    id: number | null
  }

  export type ProductSkuSumAggregateOutputType = {
    id: number | null
  }

  export type ProductSkuMinAggregateOutputType = {
    id: number | null
    skuNo: string | null
    barcode: string | null
    skuName: string | null
    image: string | null
    status: boolean | null
    slug: string | null
  }

  export type ProductSkuMaxAggregateOutputType = {
    id: number | null
    skuNo: string | null
    barcode: string | null
    skuName: string | null
    image: string | null
    status: boolean | null
    slug: string | null
  }

  export type ProductSkuCountAggregateOutputType = {
    id: number
    skuNo: number
    barcode: number
    skuName: number
    image: number
    status: number
    skuAttributes: number
    slug: number
    _all: number
  }


  export type ProductSkuAvgAggregateInputType = {
    id?: true
  }

  export type ProductSkuSumAggregateInputType = {
    id?: true
  }

  export type ProductSkuMinAggregateInputType = {
    id?: true
    skuNo?: true
    barcode?: true
    skuName?: true
    image?: true
    status?: true
    slug?: true
  }

  export type ProductSkuMaxAggregateInputType = {
    id?: true
    skuNo?: true
    barcode?: true
    skuName?: true
    image?: true
    status?: true
    slug?: true
  }

  export type ProductSkuCountAggregateInputType = {
    id?: true
    skuNo?: true
    barcode?: true
    skuName?: true
    image?: true
    status?: true
    skuAttributes?: true
    slug?: true
    _all?: true
  }

  export type ProductSkuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSku to aggregate.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSkus
    **/
    _count?: true | ProductSkuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSkuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSkuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSkuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSkuMaxAggregateInputType
  }

  export type GetProductSkuAggregateType<T extends ProductSkuAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSku[P]>
      : GetScalarType<T[P], AggregateProductSku[P]>
  }




  export type ProductSkuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSkuWhereInput
    orderBy?: ProductSkuOrderByWithAggregationInput | ProductSkuOrderByWithAggregationInput[]
    by: ProductSkuScalarFieldEnum[] | ProductSkuScalarFieldEnum
    having?: ProductSkuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSkuCountAggregateInputType | true
    _avg?: ProductSkuAvgAggregateInputType
    _sum?: ProductSkuSumAggregateInputType
    _min?: ProductSkuMinAggregateInputType
    _max?: ProductSkuMaxAggregateInputType
  }

  export type ProductSkuGroupByOutputType = {
    id: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status: boolean
    skuAttributes: JsonValue
    slug: string
    _count: ProductSkuCountAggregateOutputType | null
    _avg: ProductSkuAvgAggregateOutputType | null
    _sum: ProductSkuSumAggregateOutputType | null
    _min: ProductSkuMinAggregateOutputType | null
    _max: ProductSkuMaxAggregateOutputType | null
  }

  type GetProductSkuGroupByPayload<T extends ProductSkuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSkuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSkuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSkuGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSkuGroupByOutputType[P]>
        }
      >
    >


  export type ProductSkuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skuNo?: boolean
    barcode?: boolean
    skuName?: boolean
    image?: boolean
    status?: boolean
    skuAttributes?: boolean
    slug?: boolean
    spuSkuMapping?: boolean | ProductSku$spuSkuMappingArgs<ExtArgs>
    price?: boolean | ProductSku$priceArgs<ExtArgs>
    purchaseOrderDetail?: boolean | ProductSku$purchaseOrderDetailArgs<ExtArgs>
    productSerial?: boolean | ProductSku$productSerialArgs<ExtArgs>
    _count?: boolean | ProductSkuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSku"]>

  export type ProductSkuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skuNo?: boolean
    barcode?: boolean
    skuName?: boolean
    image?: boolean
    status?: boolean
    skuAttributes?: boolean
    slug?: boolean
  }, ExtArgs["result"]["productSku"]>

  export type ProductSkuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skuNo?: boolean
    barcode?: boolean
    skuName?: boolean
    image?: boolean
    status?: boolean
    skuAttributes?: boolean
    slug?: boolean
  }, ExtArgs["result"]["productSku"]>

  export type ProductSkuSelectScalar = {
    id?: boolean
    skuNo?: boolean
    barcode?: boolean
    skuName?: boolean
    image?: boolean
    status?: boolean
    skuAttributes?: boolean
    slug?: boolean
  }

  export type ProductSkuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skuNo" | "barcode" | "skuName" | "image" | "status" | "skuAttributes" | "slug", ExtArgs["result"]["productSku"]>
  export type ProductSkuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spuSkuMapping?: boolean | ProductSku$spuSkuMappingArgs<ExtArgs>
    price?: boolean | ProductSku$priceArgs<ExtArgs>
    purchaseOrderDetail?: boolean | ProductSku$purchaseOrderDetailArgs<ExtArgs>
    productSerial?: boolean | ProductSku$productSerialArgs<ExtArgs>
    _count?: boolean | ProductSkuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductSkuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductSkuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductSkuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSku"
    objects: {
      spuSkuMapping: Prisma.$SpuSkuMappingPayload<ExtArgs>[]
      price: Prisma.$PricePayload<ExtArgs>[]
      purchaseOrderDetail: Prisma.$PurchaseOrderDetailPayload<ExtArgs>[]
      productSerial: Prisma.$ProductSerialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skuNo: string
      barcode: string
      skuName: string
      image: string
      status: boolean
      skuAttributes: Prisma.JsonValue
      slug: string
    }, ExtArgs["result"]["productSku"]>
    composites: {}
  }

  type ProductSkuGetPayload<S extends boolean | null | undefined | ProductSkuDefaultArgs> = $Result.GetResult<Prisma.$ProductSkuPayload, S>

  type ProductSkuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSkuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSkuCountAggregateInputType | true
    }

  export interface ProductSkuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSku'], meta: { name: 'ProductSku' } }
    /**
     * Find zero or one ProductSku that matches the filter.
     * @param {ProductSkuFindUniqueArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSkuFindUniqueArgs>(args: SelectSubset<T, ProductSkuFindUniqueArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSkuFindUniqueOrThrowArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSkuFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSkuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuFindFirstArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSkuFindFirstArgs>(args?: SelectSubset<T, ProductSkuFindFirstArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuFindFirstOrThrowArgs} args - Arguments to find a ProductSku
     * @example
     * // Get one ProductSku
     * const productSku = await prisma.productSku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSkuFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSkuFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSkus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSkus
     * const productSkus = await prisma.productSku.findMany()
     * 
     * // Get first 10 ProductSkus
     * const productSkus = await prisma.productSku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSkuWithIdOnly = await prisma.productSku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSkuFindManyArgs>(args?: SelectSubset<T, ProductSkuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSku.
     * @param {ProductSkuCreateArgs} args - Arguments to create a ProductSku.
     * @example
     * // Create one ProductSku
     * const ProductSku = await prisma.productSku.create({
     *   data: {
     *     // ... data to create a ProductSku
     *   }
     * })
     * 
     */
    create<T extends ProductSkuCreateArgs>(args: SelectSubset<T, ProductSkuCreateArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSkus.
     * @param {ProductSkuCreateManyArgs} args - Arguments to create many ProductSkus.
     * @example
     * // Create many ProductSkus
     * const productSku = await prisma.productSku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSkuCreateManyArgs>(args?: SelectSubset<T, ProductSkuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSkus and returns the data saved in the database.
     * @param {ProductSkuCreateManyAndReturnArgs} args - Arguments to create many ProductSkus.
     * @example
     * // Create many ProductSkus
     * const productSku = await prisma.productSku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSkus and only return the `id`
     * const productSkuWithIdOnly = await prisma.productSku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSkuCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSkuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSku.
     * @param {ProductSkuDeleteArgs} args - Arguments to delete one ProductSku.
     * @example
     * // Delete one ProductSku
     * const ProductSku = await prisma.productSku.delete({
     *   where: {
     *     // ... filter to delete one ProductSku
     *   }
     * })
     * 
     */
    delete<T extends ProductSkuDeleteArgs>(args: SelectSubset<T, ProductSkuDeleteArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSku.
     * @param {ProductSkuUpdateArgs} args - Arguments to update one ProductSku.
     * @example
     * // Update one ProductSku
     * const productSku = await prisma.productSku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSkuUpdateArgs>(args: SelectSubset<T, ProductSkuUpdateArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSkus.
     * @param {ProductSkuDeleteManyArgs} args - Arguments to filter ProductSkus to delete.
     * @example
     * // Delete a few ProductSkus
     * const { count } = await prisma.productSku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSkuDeleteManyArgs>(args?: SelectSubset<T, ProductSkuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSkus
     * const productSku = await prisma.productSku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSkuUpdateManyArgs>(args: SelectSubset<T, ProductSkuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSkus and returns the data updated in the database.
     * @param {ProductSkuUpdateManyAndReturnArgs} args - Arguments to update many ProductSkus.
     * @example
     * // Update many ProductSkus
     * const productSku = await prisma.productSku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSkus and only return the `id`
     * const productSkuWithIdOnly = await prisma.productSku.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductSkuUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSkuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSku.
     * @param {ProductSkuUpsertArgs} args - Arguments to update or create a ProductSku.
     * @example
     * // Update or create a ProductSku
     * const productSku = await prisma.productSku.upsert({
     *   create: {
     *     // ... data to create a ProductSku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSku we want to update
     *   }
     * })
     */
    upsert<T extends ProductSkuUpsertArgs>(args: SelectSubset<T, ProductSkuUpsertArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSkus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuCountArgs} args - Arguments to filter ProductSkus to count.
     * @example
     * // Count the number of ProductSkus
     * const count = await prisma.productSku.count({
     *   where: {
     *     // ... the filter for the ProductSkus we want to count
     *   }
     * })
    **/
    count<T extends ProductSkuCountArgs>(
      args?: Subset<T, ProductSkuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSkuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductSkuAggregateArgs>(args: Subset<T, ProductSkuAggregateArgs>): Prisma.PrismaPromise<GetProductSkuAggregateType<T>>

    /**
     * Group by ProductSku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSkuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductSkuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSkuGroupByArgs['orderBy'] }
        : { orderBy?: ProductSkuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductSkuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSkuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSku model
   */
  readonly fields: ProductSkuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSkuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spuSkuMapping<T extends ProductSku$spuSkuMappingArgs<ExtArgs> = {}>(args?: Subset<T, ProductSku$spuSkuMappingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    price<T extends ProductSku$priceArgs<ExtArgs> = {}>(args?: Subset<T, ProductSku$priceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchaseOrderDetail<T extends ProductSku$purchaseOrderDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProductSku$purchaseOrderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productSerial<T extends ProductSku$productSerialArgs<ExtArgs> = {}>(args?: Subset<T, ProductSku$productSerialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductSku model
   */
  interface ProductSkuFieldRefs {
    readonly id: FieldRef<"ProductSku", 'Int'>
    readonly skuNo: FieldRef<"ProductSku", 'String'>
    readonly barcode: FieldRef<"ProductSku", 'String'>
    readonly skuName: FieldRef<"ProductSku", 'String'>
    readonly image: FieldRef<"ProductSku", 'String'>
    readonly status: FieldRef<"ProductSku", 'Boolean'>
    readonly skuAttributes: FieldRef<"ProductSku", 'Json'>
    readonly slug: FieldRef<"ProductSku", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductSku findUnique
   */
  export type ProductSkuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku findUniqueOrThrow
   */
  export type ProductSkuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku findFirst
   */
  export type ProductSkuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSkus.
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSkus.
     */
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * ProductSku findFirstOrThrow
   */
  export type ProductSkuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSku to fetch.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSkus.
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSkus.
     */
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * ProductSku findMany
   */
  export type ProductSkuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter, which ProductSkus to fetch.
     */
    where?: ProductSkuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSkus to fetch.
     */
    orderBy?: ProductSkuOrderByWithRelationInput | ProductSkuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSkus.
     */
    cursor?: ProductSkuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSkus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSkus.
     */
    skip?: number
    distinct?: ProductSkuScalarFieldEnum | ProductSkuScalarFieldEnum[]
  }

  /**
   * ProductSku create
   */
  export type ProductSkuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSku.
     */
    data: XOR<ProductSkuCreateInput, ProductSkuUncheckedCreateInput>
  }

  /**
   * ProductSku createMany
   */
  export type ProductSkuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSkus.
     */
    data: ProductSkuCreateManyInput | ProductSkuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSku createManyAndReturn
   */
  export type ProductSkuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSkus.
     */
    data: ProductSkuCreateManyInput | ProductSkuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSku update
   */
  export type ProductSkuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSku.
     */
    data: XOR<ProductSkuUpdateInput, ProductSkuUncheckedUpdateInput>
    /**
     * Choose, which ProductSku to update.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku updateMany
   */
  export type ProductSkuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSkus.
     */
    data: XOR<ProductSkuUpdateManyMutationInput, ProductSkuUncheckedUpdateManyInput>
    /**
     * Filter which ProductSkus to update
     */
    where?: ProductSkuWhereInput
    /**
     * Limit how many ProductSkus to update.
     */
    limit?: number
  }

  /**
   * ProductSku updateManyAndReturn
   */
  export type ProductSkuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * The data used to update ProductSkus.
     */
    data: XOR<ProductSkuUpdateManyMutationInput, ProductSkuUncheckedUpdateManyInput>
    /**
     * Filter which ProductSkus to update
     */
    where?: ProductSkuWhereInput
    /**
     * Limit how many ProductSkus to update.
     */
    limit?: number
  }

  /**
   * ProductSku upsert
   */
  export type ProductSkuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSku to update in case it exists.
     */
    where: ProductSkuWhereUniqueInput
    /**
     * In case the ProductSku found by the `where` argument doesn't exist, create a new ProductSku with this data.
     */
    create: XOR<ProductSkuCreateInput, ProductSkuUncheckedCreateInput>
    /**
     * In case the ProductSku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSkuUpdateInput, ProductSkuUncheckedUpdateInput>
  }

  /**
   * ProductSku delete
   */
  export type ProductSkuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
    /**
     * Filter which ProductSku to delete.
     */
    where: ProductSkuWhereUniqueInput
  }

  /**
   * ProductSku deleteMany
   */
  export type ProductSkuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSkus to delete
     */
    where?: ProductSkuWhereInput
    /**
     * Limit how many ProductSkus to delete.
     */
    limit?: number
  }

  /**
   * ProductSku.spuSkuMapping
   */
  export type ProductSku$spuSkuMappingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    where?: SpuSkuMappingWhereInput
    orderBy?: SpuSkuMappingOrderByWithRelationInput | SpuSkuMappingOrderByWithRelationInput[]
    cursor?: SpuSkuMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpuSkuMappingScalarFieldEnum | SpuSkuMappingScalarFieldEnum[]
  }

  /**
   * ProductSku.price
   */
  export type ProductSku$priceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * ProductSku.purchaseOrderDetail
   */
  export type ProductSku$purchaseOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    where?: PurchaseOrderDetailWhereInput
    orderBy?: PurchaseOrderDetailOrderByWithRelationInput | PurchaseOrderDetailOrderByWithRelationInput[]
    cursor?: PurchaseOrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderDetailScalarFieldEnum | PurchaseOrderDetailScalarFieldEnum[]
  }

  /**
   * ProductSku.productSerial
   */
  export type ProductSku$productSerialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    where?: ProductSerialWhereInput
    orderBy?: ProductSerialOrderByWithRelationInput | ProductSerialOrderByWithRelationInput[]
    cursor?: ProductSerialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSerialScalarFieldEnum | ProductSerialScalarFieldEnum[]
  }

  /**
   * ProductSku without action
   */
  export type ProductSkuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSku
     */
    select?: ProductSkuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSku
     */
    omit?: ProductSkuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSkuInclude<ExtArgs> | null
  }


  /**
   * Model SpuSkuMapping
   */

  export type AggregateSpuSkuMapping = {
    _count: SpuSkuMappingCountAggregateOutputType | null
    _avg: SpuSkuMappingAvgAggregateOutputType | null
    _sum: SpuSkuMappingSumAggregateOutputType | null
    _min: SpuSkuMappingMinAggregateOutputType | null
    _max: SpuSkuMappingMaxAggregateOutputType | null
  }

  export type SpuSkuMappingAvgAggregateOutputType = {
    id: number | null
    spuId: number | null
    skuId: number | null
  }

  export type SpuSkuMappingSumAggregateOutputType = {
    id: number | null
    spuId: number | null
    skuId: number | null
  }

  export type SpuSkuMappingMinAggregateOutputType = {
    id: number | null
    spuId: number | null
    skuId: number | null
  }

  export type SpuSkuMappingMaxAggregateOutputType = {
    id: number | null
    spuId: number | null
    skuId: number | null
  }

  export type SpuSkuMappingCountAggregateOutputType = {
    id: number
    spuId: number
    skuId: number
    _all: number
  }


  export type SpuSkuMappingAvgAggregateInputType = {
    id?: true
    spuId?: true
    skuId?: true
  }

  export type SpuSkuMappingSumAggregateInputType = {
    id?: true
    spuId?: true
    skuId?: true
  }

  export type SpuSkuMappingMinAggregateInputType = {
    id?: true
    spuId?: true
    skuId?: true
  }

  export type SpuSkuMappingMaxAggregateInputType = {
    id?: true
    spuId?: true
    skuId?: true
  }

  export type SpuSkuMappingCountAggregateInputType = {
    id?: true
    spuId?: true
    skuId?: true
    _all?: true
  }

  export type SpuSkuMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpuSkuMapping to aggregate.
     */
    where?: SpuSkuMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpuSkuMappings to fetch.
     */
    orderBy?: SpuSkuMappingOrderByWithRelationInput | SpuSkuMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpuSkuMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpuSkuMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpuSkuMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpuSkuMappings
    **/
    _count?: true | SpuSkuMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpuSkuMappingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpuSkuMappingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpuSkuMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpuSkuMappingMaxAggregateInputType
  }

  export type GetSpuSkuMappingAggregateType<T extends SpuSkuMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateSpuSkuMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpuSkuMapping[P]>
      : GetScalarType<T[P], AggregateSpuSkuMapping[P]>
  }




  export type SpuSkuMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpuSkuMappingWhereInput
    orderBy?: SpuSkuMappingOrderByWithAggregationInput | SpuSkuMappingOrderByWithAggregationInput[]
    by: SpuSkuMappingScalarFieldEnum[] | SpuSkuMappingScalarFieldEnum
    having?: SpuSkuMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpuSkuMappingCountAggregateInputType | true
    _avg?: SpuSkuMappingAvgAggregateInputType
    _sum?: SpuSkuMappingSumAggregateInputType
    _min?: SpuSkuMappingMinAggregateInputType
    _max?: SpuSkuMappingMaxAggregateInputType
  }

  export type SpuSkuMappingGroupByOutputType = {
    id: number
    spuId: number
    skuId: number
    _count: SpuSkuMappingCountAggregateOutputType | null
    _avg: SpuSkuMappingAvgAggregateOutputType | null
    _sum: SpuSkuMappingSumAggregateOutputType | null
    _min: SpuSkuMappingMinAggregateOutputType | null
    _max: SpuSkuMappingMaxAggregateOutputType | null
  }

  type GetSpuSkuMappingGroupByPayload<T extends SpuSkuMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpuSkuMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpuSkuMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpuSkuMappingGroupByOutputType[P]>
            : GetScalarType<T[P], SpuSkuMappingGroupByOutputType[P]>
        }
      >
    >


  export type SpuSkuMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spuId?: boolean
    skuId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spuSkuMapping"]>

  export type SpuSkuMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spuId?: boolean
    skuId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spuSkuMapping"]>

  export type SpuSkuMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spuId?: boolean
    skuId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["spuSkuMapping"]>

  export type SpuSkuMappingSelectScalar = {
    id?: boolean
    spuId?: boolean
    skuId?: boolean
  }

  export type SpuSkuMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spuId" | "skuId", ExtArgs["result"]["spuSkuMapping"]>
  export type SpuSkuMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type SpuSkuMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type SpuSkuMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }

  export type $SpuSkuMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpuSkuMapping"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      productSku: Prisma.$ProductSkuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spuId: number
      skuId: number
    }, ExtArgs["result"]["spuSkuMapping"]>
    composites: {}
  }

  type SpuSkuMappingGetPayload<S extends boolean | null | undefined | SpuSkuMappingDefaultArgs> = $Result.GetResult<Prisma.$SpuSkuMappingPayload, S>

  type SpuSkuMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpuSkuMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpuSkuMappingCountAggregateInputType | true
    }

  export interface SpuSkuMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpuSkuMapping'], meta: { name: 'SpuSkuMapping' } }
    /**
     * Find zero or one SpuSkuMapping that matches the filter.
     * @param {SpuSkuMappingFindUniqueArgs} args - Arguments to find a SpuSkuMapping
     * @example
     * // Get one SpuSkuMapping
     * const spuSkuMapping = await prisma.spuSkuMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpuSkuMappingFindUniqueArgs>(args: SelectSubset<T, SpuSkuMappingFindUniqueArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpuSkuMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpuSkuMappingFindUniqueOrThrowArgs} args - Arguments to find a SpuSkuMapping
     * @example
     * // Get one SpuSkuMapping
     * const spuSkuMapping = await prisma.spuSkuMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpuSkuMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, SpuSkuMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpuSkuMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingFindFirstArgs} args - Arguments to find a SpuSkuMapping
     * @example
     * // Get one SpuSkuMapping
     * const spuSkuMapping = await prisma.spuSkuMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpuSkuMappingFindFirstArgs>(args?: SelectSubset<T, SpuSkuMappingFindFirstArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpuSkuMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingFindFirstOrThrowArgs} args - Arguments to find a SpuSkuMapping
     * @example
     * // Get one SpuSkuMapping
     * const spuSkuMapping = await prisma.spuSkuMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpuSkuMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, SpuSkuMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpuSkuMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpuSkuMappings
     * const spuSkuMappings = await prisma.spuSkuMapping.findMany()
     * 
     * // Get first 10 SpuSkuMappings
     * const spuSkuMappings = await prisma.spuSkuMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spuSkuMappingWithIdOnly = await prisma.spuSkuMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpuSkuMappingFindManyArgs>(args?: SelectSubset<T, SpuSkuMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpuSkuMapping.
     * @param {SpuSkuMappingCreateArgs} args - Arguments to create a SpuSkuMapping.
     * @example
     * // Create one SpuSkuMapping
     * const SpuSkuMapping = await prisma.spuSkuMapping.create({
     *   data: {
     *     // ... data to create a SpuSkuMapping
     *   }
     * })
     * 
     */
    create<T extends SpuSkuMappingCreateArgs>(args: SelectSubset<T, SpuSkuMappingCreateArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpuSkuMappings.
     * @param {SpuSkuMappingCreateManyArgs} args - Arguments to create many SpuSkuMappings.
     * @example
     * // Create many SpuSkuMappings
     * const spuSkuMapping = await prisma.spuSkuMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpuSkuMappingCreateManyArgs>(args?: SelectSubset<T, SpuSkuMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpuSkuMappings and returns the data saved in the database.
     * @param {SpuSkuMappingCreateManyAndReturnArgs} args - Arguments to create many SpuSkuMappings.
     * @example
     * // Create many SpuSkuMappings
     * const spuSkuMapping = await prisma.spuSkuMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpuSkuMappings and only return the `id`
     * const spuSkuMappingWithIdOnly = await prisma.spuSkuMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpuSkuMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, SpuSkuMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpuSkuMapping.
     * @param {SpuSkuMappingDeleteArgs} args - Arguments to delete one SpuSkuMapping.
     * @example
     * // Delete one SpuSkuMapping
     * const SpuSkuMapping = await prisma.spuSkuMapping.delete({
     *   where: {
     *     // ... filter to delete one SpuSkuMapping
     *   }
     * })
     * 
     */
    delete<T extends SpuSkuMappingDeleteArgs>(args: SelectSubset<T, SpuSkuMappingDeleteArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpuSkuMapping.
     * @param {SpuSkuMappingUpdateArgs} args - Arguments to update one SpuSkuMapping.
     * @example
     * // Update one SpuSkuMapping
     * const spuSkuMapping = await prisma.spuSkuMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpuSkuMappingUpdateArgs>(args: SelectSubset<T, SpuSkuMappingUpdateArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpuSkuMappings.
     * @param {SpuSkuMappingDeleteManyArgs} args - Arguments to filter SpuSkuMappings to delete.
     * @example
     * // Delete a few SpuSkuMappings
     * const { count } = await prisma.spuSkuMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpuSkuMappingDeleteManyArgs>(args?: SelectSubset<T, SpuSkuMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpuSkuMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpuSkuMappings
     * const spuSkuMapping = await prisma.spuSkuMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpuSkuMappingUpdateManyArgs>(args: SelectSubset<T, SpuSkuMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpuSkuMappings and returns the data updated in the database.
     * @param {SpuSkuMappingUpdateManyAndReturnArgs} args - Arguments to update many SpuSkuMappings.
     * @example
     * // Update many SpuSkuMappings
     * const spuSkuMapping = await prisma.spuSkuMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpuSkuMappings and only return the `id`
     * const spuSkuMappingWithIdOnly = await prisma.spuSkuMapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpuSkuMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, SpuSkuMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpuSkuMapping.
     * @param {SpuSkuMappingUpsertArgs} args - Arguments to update or create a SpuSkuMapping.
     * @example
     * // Update or create a SpuSkuMapping
     * const spuSkuMapping = await prisma.spuSkuMapping.upsert({
     *   create: {
     *     // ... data to create a SpuSkuMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpuSkuMapping we want to update
     *   }
     * })
     */
    upsert<T extends SpuSkuMappingUpsertArgs>(args: SelectSubset<T, SpuSkuMappingUpsertArgs<ExtArgs>>): Prisma__SpuSkuMappingClient<$Result.GetResult<Prisma.$SpuSkuMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpuSkuMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingCountArgs} args - Arguments to filter SpuSkuMappings to count.
     * @example
     * // Count the number of SpuSkuMappings
     * const count = await prisma.spuSkuMapping.count({
     *   where: {
     *     // ... the filter for the SpuSkuMappings we want to count
     *   }
     * })
    **/
    count<T extends SpuSkuMappingCountArgs>(
      args?: Subset<T, SpuSkuMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpuSkuMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpuSkuMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpuSkuMappingAggregateArgs>(args: Subset<T, SpuSkuMappingAggregateArgs>): Prisma.PrismaPromise<GetSpuSkuMappingAggregateType<T>>

    /**
     * Group by SpuSkuMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpuSkuMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpuSkuMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpuSkuMappingGroupByArgs['orderBy'] }
        : { orderBy?: SpuSkuMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpuSkuMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpuSkuMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpuSkuMapping model
   */
  readonly fields: SpuSkuMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpuSkuMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpuSkuMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productSku<T extends ProductSkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductSkuDefaultArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpuSkuMapping model
   */
  interface SpuSkuMappingFieldRefs {
    readonly id: FieldRef<"SpuSkuMapping", 'Int'>
    readonly spuId: FieldRef<"SpuSkuMapping", 'Int'>
    readonly skuId: FieldRef<"SpuSkuMapping", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SpuSkuMapping findUnique
   */
  export type SpuSkuMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * Filter, which SpuSkuMapping to fetch.
     */
    where: SpuSkuMappingWhereUniqueInput
  }

  /**
   * SpuSkuMapping findUniqueOrThrow
   */
  export type SpuSkuMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * Filter, which SpuSkuMapping to fetch.
     */
    where: SpuSkuMappingWhereUniqueInput
  }

  /**
   * SpuSkuMapping findFirst
   */
  export type SpuSkuMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * Filter, which SpuSkuMapping to fetch.
     */
    where?: SpuSkuMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpuSkuMappings to fetch.
     */
    orderBy?: SpuSkuMappingOrderByWithRelationInput | SpuSkuMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpuSkuMappings.
     */
    cursor?: SpuSkuMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpuSkuMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpuSkuMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpuSkuMappings.
     */
    distinct?: SpuSkuMappingScalarFieldEnum | SpuSkuMappingScalarFieldEnum[]
  }

  /**
   * SpuSkuMapping findFirstOrThrow
   */
  export type SpuSkuMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * Filter, which SpuSkuMapping to fetch.
     */
    where?: SpuSkuMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpuSkuMappings to fetch.
     */
    orderBy?: SpuSkuMappingOrderByWithRelationInput | SpuSkuMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpuSkuMappings.
     */
    cursor?: SpuSkuMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpuSkuMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpuSkuMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpuSkuMappings.
     */
    distinct?: SpuSkuMappingScalarFieldEnum | SpuSkuMappingScalarFieldEnum[]
  }

  /**
   * SpuSkuMapping findMany
   */
  export type SpuSkuMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * Filter, which SpuSkuMappings to fetch.
     */
    where?: SpuSkuMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpuSkuMappings to fetch.
     */
    orderBy?: SpuSkuMappingOrderByWithRelationInput | SpuSkuMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpuSkuMappings.
     */
    cursor?: SpuSkuMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpuSkuMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpuSkuMappings.
     */
    skip?: number
    distinct?: SpuSkuMappingScalarFieldEnum | SpuSkuMappingScalarFieldEnum[]
  }

  /**
   * SpuSkuMapping create
   */
  export type SpuSkuMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a SpuSkuMapping.
     */
    data: XOR<SpuSkuMappingCreateInput, SpuSkuMappingUncheckedCreateInput>
  }

  /**
   * SpuSkuMapping createMany
   */
  export type SpuSkuMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpuSkuMappings.
     */
    data: SpuSkuMappingCreateManyInput | SpuSkuMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpuSkuMapping createManyAndReturn
   */
  export type SpuSkuMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * The data used to create many SpuSkuMappings.
     */
    data: SpuSkuMappingCreateManyInput | SpuSkuMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpuSkuMapping update
   */
  export type SpuSkuMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a SpuSkuMapping.
     */
    data: XOR<SpuSkuMappingUpdateInput, SpuSkuMappingUncheckedUpdateInput>
    /**
     * Choose, which SpuSkuMapping to update.
     */
    where: SpuSkuMappingWhereUniqueInput
  }

  /**
   * SpuSkuMapping updateMany
   */
  export type SpuSkuMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpuSkuMappings.
     */
    data: XOR<SpuSkuMappingUpdateManyMutationInput, SpuSkuMappingUncheckedUpdateManyInput>
    /**
     * Filter which SpuSkuMappings to update
     */
    where?: SpuSkuMappingWhereInput
    /**
     * Limit how many SpuSkuMappings to update.
     */
    limit?: number
  }

  /**
   * SpuSkuMapping updateManyAndReturn
   */
  export type SpuSkuMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * The data used to update SpuSkuMappings.
     */
    data: XOR<SpuSkuMappingUpdateManyMutationInput, SpuSkuMappingUncheckedUpdateManyInput>
    /**
     * Filter which SpuSkuMappings to update
     */
    where?: SpuSkuMappingWhereInput
    /**
     * Limit how many SpuSkuMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpuSkuMapping upsert
   */
  export type SpuSkuMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the SpuSkuMapping to update in case it exists.
     */
    where: SpuSkuMappingWhereUniqueInput
    /**
     * In case the SpuSkuMapping found by the `where` argument doesn't exist, create a new SpuSkuMapping with this data.
     */
    create: XOR<SpuSkuMappingCreateInput, SpuSkuMappingUncheckedCreateInput>
    /**
     * In case the SpuSkuMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpuSkuMappingUpdateInput, SpuSkuMappingUncheckedUpdateInput>
  }

  /**
   * SpuSkuMapping delete
   */
  export type SpuSkuMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
    /**
     * Filter which SpuSkuMapping to delete.
     */
    where: SpuSkuMappingWhereUniqueInput
  }

  /**
   * SpuSkuMapping deleteMany
   */
  export type SpuSkuMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpuSkuMappings to delete
     */
    where?: SpuSkuMappingWhereInput
    /**
     * Limit how many SpuSkuMappings to delete.
     */
    limit?: number
  }

  /**
   * SpuSkuMapping without action
   */
  export type SpuSkuMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpuSkuMapping
     */
    select?: SpuSkuMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpuSkuMapping
     */
    omit?: SpuSkuMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpuSkuMappingInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    productSkuId: number | null
    sellingPrice: number | null
    displayPrice: number | null
  }

  export type PriceSumAggregateOutputType = {
    productSkuId: number | null
    sellingPrice: number | null
    displayPrice: number | null
  }

  export type PriceMinAggregateOutputType = {
    productSkuId: number | null
    beginAt: Date | null
    sellingPrice: number | null
    displayPrice: number | null
    createdAt: Date | null
  }

  export type PriceMaxAggregateOutputType = {
    productSkuId: number | null
    beginAt: Date | null
    sellingPrice: number | null
    displayPrice: number | null
    createdAt: Date | null
  }

  export type PriceCountAggregateOutputType = {
    productSkuId: number
    beginAt: number
    sellingPrice: number
    displayPrice: number
    createdAt: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    productSkuId?: true
    sellingPrice?: true
    displayPrice?: true
  }

  export type PriceSumAggregateInputType = {
    productSkuId?: true
    sellingPrice?: true
    displayPrice?: true
  }

  export type PriceMinAggregateInputType = {
    productSkuId?: true
    beginAt?: true
    sellingPrice?: true
    displayPrice?: true
    createdAt?: true
  }

  export type PriceMaxAggregateInputType = {
    productSkuId?: true
    beginAt?: true
    sellingPrice?: true
    displayPrice?: true
    createdAt?: true
  }

  export type PriceCountAggregateInputType = {
    productSkuId?: true
    beginAt?: true
    sellingPrice?: true
    displayPrice?: true
    createdAt?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    productSkuId: number
    beginAt: Date
    sellingPrice: number
    displayPrice: number
    createdAt: Date
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productSkuId?: boolean
    beginAt?: boolean
    sellingPrice?: boolean
    displayPrice?: boolean
    createdAt?: boolean
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productSkuId?: boolean
    beginAt?: boolean
    sellingPrice?: boolean
    displayPrice?: boolean
    createdAt?: boolean
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productSkuId?: boolean
    beginAt?: boolean
    sellingPrice?: boolean
    displayPrice?: boolean
    createdAt?: boolean
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    productSkuId?: boolean
    beginAt?: boolean
    sellingPrice?: boolean
    displayPrice?: boolean
    createdAt?: boolean
  }

  export type PriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productSkuId" | "beginAt" | "sellingPrice" | "displayPrice" | "createdAt", ExtArgs["result"]["price"]>
  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type PriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      productSku: Prisma.$ProductSkuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productSkuId: number
      beginAt: Date
      sellingPrice: number
      displayPrice: number
      createdAt: Date
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `productSkuId`
     * const priceWithProductSkuIdOnly = await prisma.price.findMany({ select: { productSkuId: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `productSkuId`
     * const priceWithProductSkuIdOnly = await prisma.price.createManyAndReturn({
     *   select: { productSkuId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices and returns the data updated in the database.
     * @param {PriceUpdateManyAndReturnArgs} args - Arguments to update many Prices.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prices and only return the `productSkuId`
     * const priceWithProductSkuIdOnly = await prisma.price.updateManyAndReturn({
     *   select: { productSkuId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productSku<T extends ProductSkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductSkuDefaultArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Price model
   */
  interface PriceFieldRefs {
    readonly productSkuId: FieldRef<"Price", 'Int'>
    readonly beginAt: FieldRef<"Price", 'DateTime'>
    readonly sellingPrice: FieldRef<"Price", 'Int'>
    readonly displayPrice: FieldRef<"Price", 'Int'>
    readonly createdAt: FieldRef<"Price", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
  }

  /**
   * Price updateManyAndReturn
   */
  export type PriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to delete.
     */
    limit?: number
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    address: string
    phone: string
    email: string
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    purchaseOrder?: boolean | Supplier$purchaseOrderArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Supplier$purchaseOrderArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      phone: string
      email: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseOrder<T extends Supplier$purchaseOrderArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$purchaseOrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.purchaseOrder
   */
  export type Supplier$purchaseOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    cursor?: PurchaseOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrder
   */

  export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  export type PurchaseOrderAvgAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type PurchaseOrderSumAggregateOutputType = {
    id: number | null
    supplierId: number | null
  }

  export type PurchaseOrderMinAggregateOutputType = {
    id: number | null
    orderNumber: string | null
    supplierId: number | null
    createdAt: Date | null
    orderDate: Date | null
    employeeId: string | null
  }

  export type PurchaseOrderMaxAggregateOutputType = {
    id: number | null
    orderNumber: string | null
    supplierId: number | null
    createdAt: Date | null
    orderDate: Date | null
    employeeId: string | null
  }

  export type PurchaseOrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    supplierId: number
    createdAt: number
    orderDate: number
    employeeId: number
    _all: number
  }


  export type PurchaseOrderAvgAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type PurchaseOrderSumAggregateInputType = {
    id?: true
    supplierId?: true
  }

  export type PurchaseOrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    supplierId?: true
    createdAt?: true
    orderDate?: true
    employeeId?: true
  }

  export type PurchaseOrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    supplierId?: true
    createdAt?: true
    orderDate?: true
    employeeId?: true
  }

  export type PurchaseOrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    supplierId?: true
    createdAt?: true
    orderDate?: true
    employeeId?: true
    _all?: true
  }

  export type PurchaseOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrder to aggregate.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrders
    **/
    _count?: true | PurchaseOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrder[P]>
      : GetScalarType<T[P], AggregatePurchaseOrder[P]>
  }




  export type PurchaseOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderWhereInput
    orderBy?: PurchaseOrderOrderByWithAggregationInput | PurchaseOrderOrderByWithAggregationInput[]
    by: PurchaseOrderScalarFieldEnum[] | PurchaseOrderScalarFieldEnum
    having?: PurchaseOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderCountAggregateInputType | true
    _avg?: PurchaseOrderAvgAggregateInputType
    _sum?: PurchaseOrderSumAggregateInputType
    _min?: PurchaseOrderMinAggregateInputType
    _max?: PurchaseOrderMaxAggregateInputType
  }

  export type PurchaseOrderGroupByOutputType = {
    id: number
    orderNumber: string
    supplierId: number
    createdAt: Date
    orderDate: Date
    employeeId: string
    _count: PurchaseOrderCountAggregateOutputType | null
    _avg: PurchaseOrderAvgAggregateOutputType | null
    _sum: PurchaseOrderSumAggregateOutputType | null
    _min: PurchaseOrderMinAggregateOutputType | null
    _max: PurchaseOrderMaxAggregateOutputType | null
  }

  type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    supplierId?: boolean
    createdAt?: boolean
    orderDate?: boolean
    employeeId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    purchaseOrderDetail?: boolean | PurchaseOrder$purchaseOrderDetailArgs<ExtArgs>
    warehouseReceipt?: boolean | PurchaseOrder$warehouseReceiptArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    supplierId?: boolean
    createdAt?: boolean
    orderDate?: boolean
    employeeId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    supplierId?: boolean
    createdAt?: boolean
    orderDate?: boolean
    employeeId?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrder"]>

  export type PurchaseOrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    supplierId?: boolean
    createdAt?: boolean
    orderDate?: boolean
    employeeId?: boolean
  }

  export type PurchaseOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "supplierId" | "createdAt" | "orderDate" | "employeeId", ExtArgs["result"]["purchaseOrder"]>
  export type PurchaseOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    purchaseOrderDetail?: boolean | PurchaseOrder$purchaseOrderDetailArgs<ExtArgs>
    warehouseReceipt?: boolean | PurchaseOrder$warehouseReceiptArgs<ExtArgs>
    _count?: boolean | PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrder"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      purchaseOrderDetail: Prisma.$PurchaseOrderDetailPayload<ExtArgs>[]
      warehouseReceipt: Prisma.$WarehouseReceiptPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: string
      supplierId: number
      createdAt: Date
      orderDate: Date
      employeeId: string
    }, ExtArgs["result"]["purchaseOrder"]>
    composites: {}
  }

  type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderPayload, S>

  type PurchaseOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderCountAggregateInputType | true
    }

  export interface PurchaseOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'], meta: { name: 'PurchaseOrder' } }
    /**
     * Find zero or one PurchaseOrder that matches the filter.
     * @param {PurchaseOrderFindUniqueArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrder
     * @example
     * // Get one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany()
     * 
     * // Get first 10 PurchaseOrders
     * const purchaseOrders = await prisma.purchaseOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseOrderFindManyArgs>(args?: SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrder.
     * @param {PurchaseOrderCreateArgs} args - Arguments to create a PurchaseOrder.
     * @example
     * // Create one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.create({
     *   data: {
     *     // ... data to create a PurchaseOrder
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderCreateArgs>(args: SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrders.
     * @param {PurchaseOrderCreateManyArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrders and returns the data saved in the database.
     * @param {PurchaseOrderCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrders.
     * @example
     * // Create many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrder.
     * @param {PurchaseOrderDeleteArgs} args - Arguments to delete one PurchaseOrder.
     * @example
     * // Delete one PurchaseOrder
     * const PurchaseOrder = await prisma.purchaseOrder.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrder
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDeleteArgs>(args: SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrder.
     * @param {PurchaseOrderUpdateArgs} args - Arguments to update one PurchaseOrder.
     * @example
     * // Update one PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderUpdateArgs>(args: SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrders.
     * @param {PurchaseOrderDeleteManyArgs} args - Arguments to filter PurchaseOrders to delete.
     * @example
     * // Delete a few PurchaseOrders
     * const { count } = await prisma.purchaseOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrders and returns the data updated in the database.
     * @param {PurchaseOrderUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrders.
     * @example
     * // Update many PurchaseOrders
     * const purchaseOrder = await prisma.purchaseOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrders and only return the `id`
     * const purchaseOrderWithIdOnly = await prisma.purchaseOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrder.
     * @param {PurchaseOrderUpsertArgs} args - Arguments to update or create a PurchaseOrder.
     * @example
     * // Update or create a PurchaseOrder
     * const purchaseOrder = await prisma.purchaseOrder.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrder we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderUpsertArgs>(args: SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderCountArgs} args - Arguments to filter PurchaseOrders to count.
     * @example
     * // Count the number of PurchaseOrders
     * const count = await prisma.purchaseOrder.count({
     *   where: {
     *     // ... the filter for the PurchaseOrders we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderCountArgs>(
      args?: Subset<T, PurchaseOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>

    /**
     * Group by PurchaseOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrder model
   */
  readonly fields: PurchaseOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchaseOrderDetail<T extends PurchaseOrder$purchaseOrderDetailArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$purchaseOrderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouseReceipt<T extends PurchaseOrder$warehouseReceiptArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrder$warehouseReceiptArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrder model
   */
  interface PurchaseOrderFieldRefs {
    readonly id: FieldRef<"PurchaseOrder", 'Int'>
    readonly orderNumber: FieldRef<"PurchaseOrder", 'String'>
    readonly supplierId: FieldRef<"PurchaseOrder", 'Int'>
    readonly createdAt: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly orderDate: FieldRef<"PurchaseOrder", 'DateTime'>
    readonly employeeId: FieldRef<"PurchaseOrder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrder findUnique
   */
  export type PurchaseOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findUniqueOrThrow
   */
  export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder findFirst
   */
  export type PurchaseOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findFirstOrThrow
   */
  export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrder to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrders.
     */
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder findMany
   */
  export type PurchaseOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrders to fetch.
     */
    where?: PurchaseOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrders to fetch.
     */
    orderBy?: PurchaseOrderOrderByWithRelationInput | PurchaseOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrders.
     */
    cursor?: PurchaseOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrders.
     */
    skip?: number
    distinct?: PurchaseOrderScalarFieldEnum | PurchaseOrderScalarFieldEnum[]
  }

  /**
   * PurchaseOrder create
   */
  export type PurchaseOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrder.
     */
    data: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
  }

  /**
   * PurchaseOrder createMany
   */
  export type PurchaseOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrder createManyAndReturn
   */
  export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrders.
     */
    data: PurchaseOrderCreateManyInput | PurchaseOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder update
   */
  export type PurchaseOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrder.
     */
    data: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrder to update.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder updateMany
   */
  export type PurchaseOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrder updateManyAndReturn
   */
  export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrders.
     */
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrders to update
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrder upsert
   */
  export type PurchaseOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrder to update in case it exists.
     */
    where: PurchaseOrderWhereUniqueInput
    /**
     * In case the PurchaseOrder found by the `where` argument doesn't exist, create a new PurchaseOrder with this data.
     */
    create: XOR<PurchaseOrderCreateInput, PurchaseOrderUncheckedCreateInput>
    /**
     * In case the PurchaseOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderUpdateInput, PurchaseOrderUncheckedUpdateInput>
  }

  /**
   * PurchaseOrder delete
   */
  export type PurchaseOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrder to delete.
     */
    where: PurchaseOrderWhereUniqueInput
  }

  /**
   * PurchaseOrder deleteMany
   */
  export type PurchaseOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrders to delete
     */
    where?: PurchaseOrderWhereInput
    /**
     * Limit how many PurchaseOrders to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrder.purchaseOrderDetail
   */
  export type PurchaseOrder$purchaseOrderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    where?: PurchaseOrderDetailWhereInput
    orderBy?: PurchaseOrderDetailOrderByWithRelationInput | PurchaseOrderDetailOrderByWithRelationInput[]
    cursor?: PurchaseOrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseOrderDetailScalarFieldEnum | PurchaseOrderDetailScalarFieldEnum[]
  }

  /**
   * PurchaseOrder.warehouseReceipt
   */
  export type PurchaseOrder$warehouseReceiptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    where?: WarehouseReceiptWhereInput
  }

  /**
   * PurchaseOrder without action
   */
  export type PurchaseOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrder
     */
    select?: PurchaseOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrder
     */
    omit?: PurchaseOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseOrderDetail
   */

  export type AggregatePurchaseOrderDetail = {
    _count: PurchaseOrderDetailCountAggregateOutputType | null
    _avg: PurchaseOrderDetailAvgAggregateOutputType | null
    _sum: PurchaseOrderDetailSumAggregateOutputType | null
    _min: PurchaseOrderDetailMinAggregateOutputType | null
    _max: PurchaseOrderDetailMaxAggregateOutputType | null
  }

  export type PurchaseOrderDetailAvgAggregateOutputType = {
    purchaseOrderId: number | null
    skuId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type PurchaseOrderDetailSumAggregateOutputType = {
    purchaseOrderId: number | null
    skuId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type PurchaseOrderDetailMinAggregateOutputType = {
    purchaseOrderId: number | null
    skuId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type PurchaseOrderDetailMaxAggregateOutputType = {
    purchaseOrderId: number | null
    skuId: number | null
    quantity: number | null
    unitPrice: number | null
  }

  export type PurchaseOrderDetailCountAggregateOutputType = {
    purchaseOrderId: number
    skuId: number
    quantity: number
    unitPrice: number
    _all: number
  }


  export type PurchaseOrderDetailAvgAggregateInputType = {
    purchaseOrderId?: true
    skuId?: true
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseOrderDetailSumAggregateInputType = {
    purchaseOrderId?: true
    skuId?: true
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseOrderDetailMinAggregateInputType = {
    purchaseOrderId?: true
    skuId?: true
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseOrderDetailMaxAggregateInputType = {
    purchaseOrderId?: true
    skuId?: true
    quantity?: true
    unitPrice?: true
  }

  export type PurchaseOrderDetailCountAggregateInputType = {
    purchaseOrderId?: true
    skuId?: true
    quantity?: true
    unitPrice?: true
    _all?: true
  }

  export type PurchaseOrderDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderDetail to aggregate.
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderDetails to fetch.
     */
    orderBy?: PurchaseOrderDetailOrderByWithRelationInput | PurchaseOrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseOrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseOrderDetails
    **/
    _count?: true | PurchaseOrderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseOrderDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseOrderDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseOrderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseOrderDetailMaxAggregateInputType
  }

  export type GetPurchaseOrderDetailAggregateType<T extends PurchaseOrderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseOrderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseOrderDetail[P]>
      : GetScalarType<T[P], AggregatePurchaseOrderDetail[P]>
  }




  export type PurchaseOrderDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseOrderDetailWhereInput
    orderBy?: PurchaseOrderDetailOrderByWithAggregationInput | PurchaseOrderDetailOrderByWithAggregationInput[]
    by: PurchaseOrderDetailScalarFieldEnum[] | PurchaseOrderDetailScalarFieldEnum
    having?: PurchaseOrderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseOrderDetailCountAggregateInputType | true
    _avg?: PurchaseOrderDetailAvgAggregateInputType
    _sum?: PurchaseOrderDetailSumAggregateInputType
    _min?: PurchaseOrderDetailMinAggregateInputType
    _max?: PurchaseOrderDetailMaxAggregateInputType
  }

  export type PurchaseOrderDetailGroupByOutputType = {
    purchaseOrderId: number
    skuId: number
    quantity: number
    unitPrice: number
    _count: PurchaseOrderDetailCountAggregateOutputType | null
    _avg: PurchaseOrderDetailAvgAggregateOutputType | null
    _sum: PurchaseOrderDetailSumAggregateOutputType | null
    _min: PurchaseOrderDetailMinAggregateOutputType | null
    _max: PurchaseOrderDetailMaxAggregateOutputType | null
  }

  type GetPurchaseOrderDetailGroupByPayload<T extends PurchaseOrderDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseOrderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseOrderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseOrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseOrderDetailGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseOrderDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseOrderId?: boolean
    skuId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    sku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderDetail"]>

  export type PurchaseOrderDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseOrderId?: boolean
    skuId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    sku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderDetail"]>

  export type PurchaseOrderDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchaseOrderId?: boolean
    skuId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    sku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseOrderDetail"]>

  export type PurchaseOrderDetailSelectScalar = {
    purchaseOrderId?: boolean
    skuId?: boolean
    quantity?: boolean
    unitPrice?: boolean
  }

  export type PurchaseOrderDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchaseOrderId" | "skuId" | "quantity" | "unitPrice", ExtArgs["result"]["purchaseOrderDetail"]>
  export type PurchaseOrderDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    sku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    sku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }
  export type PurchaseOrderDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    sku?: boolean | ProductSkuDefaultArgs<ExtArgs>
  }

  export type $PurchaseOrderDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseOrderDetail"
    objects: {
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
      sku: Prisma.$ProductSkuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      purchaseOrderId: number
      skuId: number
      quantity: number
      unitPrice: number
    }, ExtArgs["result"]["purchaseOrderDetail"]>
    composites: {}
  }

  type PurchaseOrderDetailGetPayload<S extends boolean | null | undefined | PurchaseOrderDetailDefaultArgs> = $Result.GetResult<Prisma.$PurchaseOrderDetailPayload, S>

  type PurchaseOrderDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseOrderDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseOrderDetailCountAggregateInputType | true
    }

  export interface PurchaseOrderDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderDetail'], meta: { name: 'PurchaseOrderDetail' } }
    /**
     * Find zero or one PurchaseOrderDetail that matches the filter.
     * @param {PurchaseOrderDetailFindUniqueArgs} args - Arguments to find a PurchaseOrderDetail
     * @example
     * // Get one PurchaseOrderDetail
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseOrderDetailFindUniqueArgs>(args: SelectSubset<T, PurchaseOrderDetailFindUniqueArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseOrderDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseOrderDetailFindUniqueOrThrowArgs} args - Arguments to find a PurchaseOrderDetail
     * @example
     * // Get one PurchaseOrderDetail
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseOrderDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseOrderDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailFindFirstArgs} args - Arguments to find a PurchaseOrderDetail
     * @example
     * // Get one PurchaseOrderDetail
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseOrderDetailFindFirstArgs>(args?: SelectSubset<T, PurchaseOrderDetailFindFirstArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseOrderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailFindFirstOrThrowArgs} args - Arguments to find a PurchaseOrderDetail
     * @example
     * // Get one PurchaseOrderDetail
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseOrderDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseOrderDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseOrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseOrderDetails
     * const purchaseOrderDetails = await prisma.purchaseOrderDetail.findMany()
     * 
     * // Get first 10 PurchaseOrderDetails
     * const purchaseOrderDetails = await prisma.purchaseOrderDetail.findMany({ take: 10 })
     * 
     * // Only select the `purchaseOrderId`
     * const purchaseOrderDetailWithPurchaseOrderIdOnly = await prisma.purchaseOrderDetail.findMany({ select: { purchaseOrderId: true } })
     * 
     */
    findMany<T extends PurchaseOrderDetailFindManyArgs>(args?: SelectSubset<T, PurchaseOrderDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseOrderDetail.
     * @param {PurchaseOrderDetailCreateArgs} args - Arguments to create a PurchaseOrderDetail.
     * @example
     * // Create one PurchaseOrderDetail
     * const PurchaseOrderDetail = await prisma.purchaseOrderDetail.create({
     *   data: {
     *     // ... data to create a PurchaseOrderDetail
     *   }
     * })
     * 
     */
    create<T extends PurchaseOrderDetailCreateArgs>(args: SelectSubset<T, PurchaseOrderDetailCreateArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseOrderDetails.
     * @param {PurchaseOrderDetailCreateManyArgs} args - Arguments to create many PurchaseOrderDetails.
     * @example
     * // Create many PurchaseOrderDetails
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseOrderDetailCreateManyArgs>(args?: SelectSubset<T, PurchaseOrderDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseOrderDetails and returns the data saved in the database.
     * @param {PurchaseOrderDetailCreateManyAndReturnArgs} args - Arguments to create many PurchaseOrderDetails.
     * @example
     * // Create many PurchaseOrderDetails
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseOrderDetails and only return the `purchaseOrderId`
     * const purchaseOrderDetailWithPurchaseOrderIdOnly = await prisma.purchaseOrderDetail.createManyAndReturn({
     *   select: { purchaseOrderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseOrderDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseOrderDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseOrderDetail.
     * @param {PurchaseOrderDetailDeleteArgs} args - Arguments to delete one PurchaseOrderDetail.
     * @example
     * // Delete one PurchaseOrderDetail
     * const PurchaseOrderDetail = await prisma.purchaseOrderDetail.delete({
     *   where: {
     *     // ... filter to delete one PurchaseOrderDetail
     *   }
     * })
     * 
     */
    delete<T extends PurchaseOrderDetailDeleteArgs>(args: SelectSubset<T, PurchaseOrderDetailDeleteArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseOrderDetail.
     * @param {PurchaseOrderDetailUpdateArgs} args - Arguments to update one PurchaseOrderDetail.
     * @example
     * // Update one PurchaseOrderDetail
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseOrderDetailUpdateArgs>(args: SelectSubset<T, PurchaseOrderDetailUpdateArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseOrderDetails.
     * @param {PurchaseOrderDetailDeleteManyArgs} args - Arguments to filter PurchaseOrderDetails to delete.
     * @example
     * // Delete a few PurchaseOrderDetails
     * const { count } = await prisma.purchaseOrderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseOrderDetailDeleteManyArgs>(args?: SelectSubset<T, PurchaseOrderDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseOrderDetails
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseOrderDetailUpdateManyArgs>(args: SelectSubset<T, PurchaseOrderDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseOrderDetails and returns the data updated in the database.
     * @param {PurchaseOrderDetailUpdateManyAndReturnArgs} args - Arguments to update many PurchaseOrderDetails.
     * @example
     * // Update many PurchaseOrderDetails
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseOrderDetails and only return the `purchaseOrderId`
     * const purchaseOrderDetailWithPurchaseOrderIdOnly = await prisma.purchaseOrderDetail.updateManyAndReturn({
     *   select: { purchaseOrderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseOrderDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseOrderDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseOrderDetail.
     * @param {PurchaseOrderDetailUpsertArgs} args - Arguments to update or create a PurchaseOrderDetail.
     * @example
     * // Update or create a PurchaseOrderDetail
     * const purchaseOrderDetail = await prisma.purchaseOrderDetail.upsert({
     *   create: {
     *     // ... data to create a PurchaseOrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseOrderDetail we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseOrderDetailUpsertArgs>(args: SelectSubset<T, PurchaseOrderDetailUpsertArgs<ExtArgs>>): Prisma__PurchaseOrderDetailClient<$Result.GetResult<Prisma.$PurchaseOrderDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseOrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailCountArgs} args - Arguments to filter PurchaseOrderDetails to count.
     * @example
     * // Count the number of PurchaseOrderDetails
     * const count = await prisma.purchaseOrderDetail.count({
     *   where: {
     *     // ... the filter for the PurchaseOrderDetails we want to count
     *   }
     * })
    **/
    count<T extends PurchaseOrderDetailCountArgs>(
      args?: Subset<T, PurchaseOrderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseOrderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseOrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseOrderDetailAggregateArgs>(args: Subset<T, PurchaseOrderDetailAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderDetailAggregateType<T>>

    /**
     * Group by PurchaseOrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseOrderDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseOrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseOrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseOrderDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseOrderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseOrderDetail model
   */
  readonly fields: PurchaseOrderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseOrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseOrderDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sku<T extends ProductSkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductSkuDefaultArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseOrderDetail model
   */
  interface PurchaseOrderDetailFieldRefs {
    readonly purchaseOrderId: FieldRef<"PurchaseOrderDetail", 'Int'>
    readonly skuId: FieldRef<"PurchaseOrderDetail", 'Int'>
    readonly quantity: FieldRef<"PurchaseOrderDetail", 'Int'>
    readonly unitPrice: FieldRef<"PurchaseOrderDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseOrderDetail findUnique
   */
  export type PurchaseOrderDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderDetail to fetch.
     */
    where: PurchaseOrderDetailWhereUniqueInput
  }

  /**
   * PurchaseOrderDetail findUniqueOrThrow
   */
  export type PurchaseOrderDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderDetail to fetch.
     */
    where: PurchaseOrderDetailWhereUniqueInput
  }

  /**
   * PurchaseOrderDetail findFirst
   */
  export type PurchaseOrderDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderDetail to fetch.
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderDetails to fetch.
     */
    orderBy?: PurchaseOrderDetailOrderByWithRelationInput | PurchaseOrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderDetails.
     */
    cursor?: PurchaseOrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderDetails.
     */
    distinct?: PurchaseOrderDetailScalarFieldEnum | PurchaseOrderDetailScalarFieldEnum[]
  }

  /**
   * PurchaseOrderDetail findFirstOrThrow
   */
  export type PurchaseOrderDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderDetail to fetch.
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderDetails to fetch.
     */
    orderBy?: PurchaseOrderDetailOrderByWithRelationInput | PurchaseOrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseOrderDetails.
     */
    cursor?: PurchaseOrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseOrderDetails.
     */
    distinct?: PurchaseOrderDetailScalarFieldEnum | PurchaseOrderDetailScalarFieldEnum[]
  }

  /**
   * PurchaseOrderDetail findMany
   */
  export type PurchaseOrderDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseOrderDetails to fetch.
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseOrderDetails to fetch.
     */
    orderBy?: PurchaseOrderDetailOrderByWithRelationInput | PurchaseOrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseOrderDetails.
     */
    cursor?: PurchaseOrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseOrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseOrderDetails.
     */
    skip?: number
    distinct?: PurchaseOrderDetailScalarFieldEnum | PurchaseOrderDetailScalarFieldEnum[]
  }

  /**
   * PurchaseOrderDetail create
   */
  export type PurchaseOrderDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseOrderDetail.
     */
    data: XOR<PurchaseOrderDetailCreateInput, PurchaseOrderDetailUncheckedCreateInput>
  }

  /**
   * PurchaseOrderDetail createMany
   */
  export type PurchaseOrderDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseOrderDetails.
     */
    data: PurchaseOrderDetailCreateManyInput | PurchaseOrderDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseOrderDetail createManyAndReturn
   */
  export type PurchaseOrderDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseOrderDetails.
     */
    data: PurchaseOrderDetailCreateManyInput | PurchaseOrderDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderDetail update
   */
  export type PurchaseOrderDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseOrderDetail.
     */
    data: XOR<PurchaseOrderDetailUpdateInput, PurchaseOrderDetailUncheckedUpdateInput>
    /**
     * Choose, which PurchaseOrderDetail to update.
     */
    where: PurchaseOrderDetailWhereUniqueInput
  }

  /**
   * PurchaseOrderDetail updateMany
   */
  export type PurchaseOrderDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseOrderDetails.
     */
    data: XOR<PurchaseOrderDetailUpdateManyMutationInput, PurchaseOrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderDetails to update
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * Limit how many PurchaseOrderDetails to update.
     */
    limit?: number
  }

  /**
   * PurchaseOrderDetail updateManyAndReturn
   */
  export type PurchaseOrderDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseOrderDetails.
     */
    data: XOR<PurchaseOrderDetailUpdateManyMutationInput, PurchaseOrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseOrderDetails to update
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * Limit how many PurchaseOrderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchaseOrderDetail upsert
   */
  export type PurchaseOrderDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseOrderDetail to update in case it exists.
     */
    where: PurchaseOrderDetailWhereUniqueInput
    /**
     * In case the PurchaseOrderDetail found by the `where` argument doesn't exist, create a new PurchaseOrderDetail with this data.
     */
    create: XOR<PurchaseOrderDetailCreateInput, PurchaseOrderDetailUncheckedCreateInput>
    /**
     * In case the PurchaseOrderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseOrderDetailUpdateInput, PurchaseOrderDetailUncheckedUpdateInput>
  }

  /**
   * PurchaseOrderDetail delete
   */
  export type PurchaseOrderDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
    /**
     * Filter which PurchaseOrderDetail to delete.
     */
    where: PurchaseOrderDetailWhereUniqueInput
  }

  /**
   * PurchaseOrderDetail deleteMany
   */
  export type PurchaseOrderDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseOrderDetails to delete
     */
    where?: PurchaseOrderDetailWhereInput
    /**
     * Limit how many PurchaseOrderDetails to delete.
     */
    limit?: number
  }

  /**
   * PurchaseOrderDetail without action
   */
  export type PurchaseOrderDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseOrderDetail
     */
    select?: PurchaseOrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseOrderDetail
     */
    omit?: PurchaseOrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseOrderDetailInclude<ExtArgs> | null
  }


  /**
   * Model WarehouseReceipt
   */

  export type AggregateWarehouseReceipt = {
    _count: WarehouseReceiptCountAggregateOutputType | null
    _avg: WarehouseReceiptAvgAggregateOutputType | null
    _sum: WarehouseReceiptSumAggregateOutputType | null
    _min: WarehouseReceiptMinAggregateOutputType | null
    _max: WarehouseReceiptMaxAggregateOutputType | null
  }

  export type WarehouseReceiptAvgAggregateOutputType = {
    id: number | null
    purchaseOrderId: number | null
  }

  export type WarehouseReceiptSumAggregateOutputType = {
    id: number | null
    purchaseOrderId: number | null
  }

  export type WarehouseReceiptMinAggregateOutputType = {
    id: number | null
    receiptNumber: string | null
    purchaseOrderId: number | null
    createdAt: Date | null
    receiptDate: Date | null
    employeeId: string | null
  }

  export type WarehouseReceiptMaxAggregateOutputType = {
    id: number | null
    receiptNumber: string | null
    purchaseOrderId: number | null
    createdAt: Date | null
    receiptDate: Date | null
    employeeId: string | null
  }

  export type WarehouseReceiptCountAggregateOutputType = {
    id: number
    receiptNumber: number
    purchaseOrderId: number
    createdAt: number
    receiptDate: number
    employeeId: number
    _all: number
  }


  export type WarehouseReceiptAvgAggregateInputType = {
    id?: true
    purchaseOrderId?: true
  }

  export type WarehouseReceiptSumAggregateInputType = {
    id?: true
    purchaseOrderId?: true
  }

  export type WarehouseReceiptMinAggregateInputType = {
    id?: true
    receiptNumber?: true
    purchaseOrderId?: true
    createdAt?: true
    receiptDate?: true
    employeeId?: true
  }

  export type WarehouseReceiptMaxAggregateInputType = {
    id?: true
    receiptNumber?: true
    purchaseOrderId?: true
    createdAt?: true
    receiptDate?: true
    employeeId?: true
  }

  export type WarehouseReceiptCountAggregateInputType = {
    id?: true
    receiptNumber?: true
    purchaseOrderId?: true
    createdAt?: true
    receiptDate?: true
    employeeId?: true
    _all?: true
  }

  export type WarehouseReceiptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseReceipt to aggregate.
     */
    where?: WarehouseReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseReceipts to fetch.
     */
    orderBy?: WarehouseReceiptOrderByWithRelationInput | WarehouseReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarehouseReceipts
    **/
    _count?: true | WarehouseReceiptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseReceiptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseReceiptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseReceiptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseReceiptMaxAggregateInputType
  }

  export type GetWarehouseReceiptAggregateType<T extends WarehouseReceiptAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouseReceipt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouseReceipt[P]>
      : GetScalarType<T[P], AggregateWarehouseReceipt[P]>
  }




  export type WarehouseReceiptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseReceiptWhereInput
    orderBy?: WarehouseReceiptOrderByWithAggregationInput | WarehouseReceiptOrderByWithAggregationInput[]
    by: WarehouseReceiptScalarFieldEnum[] | WarehouseReceiptScalarFieldEnum
    having?: WarehouseReceiptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseReceiptCountAggregateInputType | true
    _avg?: WarehouseReceiptAvgAggregateInputType
    _sum?: WarehouseReceiptSumAggregateInputType
    _min?: WarehouseReceiptMinAggregateInputType
    _max?: WarehouseReceiptMaxAggregateInputType
  }

  export type WarehouseReceiptGroupByOutputType = {
    id: number
    receiptNumber: string
    purchaseOrderId: number
    createdAt: Date | null
    receiptDate: Date | null
    employeeId: string
    _count: WarehouseReceiptCountAggregateOutputType | null
    _avg: WarehouseReceiptAvgAggregateOutputType | null
    _sum: WarehouseReceiptSumAggregateOutputType | null
    _min: WarehouseReceiptMinAggregateOutputType | null
    _max: WarehouseReceiptMaxAggregateOutputType | null
  }

  type GetWarehouseReceiptGroupByPayload<T extends WarehouseReceiptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseReceiptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseReceiptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseReceiptGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseReceiptGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseReceiptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    purchaseOrderId?: boolean
    createdAt?: boolean
    receiptDate?: boolean
    employeeId?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    productSerial?: boolean | WarehouseReceipt$productSerialArgs<ExtArgs>
    _count?: boolean | WarehouseReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseReceipt"]>

  export type WarehouseReceiptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    purchaseOrderId?: boolean
    createdAt?: boolean
    receiptDate?: boolean
    employeeId?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseReceipt"]>

  export type WarehouseReceiptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiptNumber?: boolean
    purchaseOrderId?: boolean
    createdAt?: boolean
    receiptDate?: boolean
    employeeId?: boolean
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseReceipt"]>

  export type WarehouseReceiptSelectScalar = {
    id?: boolean
    receiptNumber?: boolean
    purchaseOrderId?: boolean
    createdAt?: boolean
    receiptDate?: boolean
    employeeId?: boolean
  }

  export type WarehouseReceiptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiptNumber" | "purchaseOrderId" | "createdAt" | "receiptDate" | "employeeId", ExtArgs["result"]["warehouseReceipt"]>
  export type WarehouseReceiptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
    productSerial?: boolean | WarehouseReceipt$productSerialArgs<ExtArgs>
    _count?: boolean | WarehouseReceiptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseReceiptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }
  export type WarehouseReceiptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | PurchaseOrderDefaultArgs<ExtArgs>
  }

  export type $WarehouseReceiptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarehouseReceipt"
    objects: {
      purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>
      productSerial: Prisma.$ProductSerialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      receiptNumber: string
      purchaseOrderId: number
      createdAt: Date | null
      receiptDate: Date | null
      employeeId: string
    }, ExtArgs["result"]["warehouseReceipt"]>
    composites: {}
  }

  type WarehouseReceiptGetPayload<S extends boolean | null | undefined | WarehouseReceiptDefaultArgs> = $Result.GetResult<Prisma.$WarehouseReceiptPayload, S>

  type WarehouseReceiptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseReceiptCountAggregateInputType | true
    }

  export interface WarehouseReceiptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarehouseReceipt'], meta: { name: 'WarehouseReceipt' } }
    /**
     * Find zero or one WarehouseReceipt that matches the filter.
     * @param {WarehouseReceiptFindUniqueArgs} args - Arguments to find a WarehouseReceipt
     * @example
     * // Get one WarehouseReceipt
     * const warehouseReceipt = await prisma.warehouseReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseReceiptFindUniqueArgs>(args: SelectSubset<T, WarehouseReceiptFindUniqueArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WarehouseReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseReceiptFindUniqueOrThrowArgs} args - Arguments to find a WarehouseReceipt
     * @example
     * // Get one WarehouseReceipt
     * const warehouseReceipt = await prisma.warehouseReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseReceiptFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptFindFirstArgs} args - Arguments to find a WarehouseReceipt
     * @example
     * // Get one WarehouseReceipt
     * const warehouseReceipt = await prisma.warehouseReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseReceiptFindFirstArgs>(args?: SelectSubset<T, WarehouseReceiptFindFirstArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptFindFirstOrThrowArgs} args - Arguments to find a WarehouseReceipt
     * @example
     * // Get one WarehouseReceipt
     * const warehouseReceipt = await prisma.warehouseReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseReceiptFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WarehouseReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarehouseReceipts
     * const warehouseReceipts = await prisma.warehouseReceipt.findMany()
     * 
     * // Get first 10 WarehouseReceipts
     * const warehouseReceipts = await prisma.warehouseReceipt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseReceiptWithIdOnly = await prisma.warehouseReceipt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseReceiptFindManyArgs>(args?: SelectSubset<T, WarehouseReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WarehouseReceipt.
     * @param {WarehouseReceiptCreateArgs} args - Arguments to create a WarehouseReceipt.
     * @example
     * // Create one WarehouseReceipt
     * const WarehouseReceipt = await prisma.warehouseReceipt.create({
     *   data: {
     *     // ... data to create a WarehouseReceipt
     *   }
     * })
     * 
     */
    create<T extends WarehouseReceiptCreateArgs>(args: SelectSubset<T, WarehouseReceiptCreateArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WarehouseReceipts.
     * @param {WarehouseReceiptCreateManyArgs} args - Arguments to create many WarehouseReceipts.
     * @example
     * // Create many WarehouseReceipts
     * const warehouseReceipt = await prisma.warehouseReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseReceiptCreateManyArgs>(args?: SelectSubset<T, WarehouseReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarehouseReceipts and returns the data saved in the database.
     * @param {WarehouseReceiptCreateManyAndReturnArgs} args - Arguments to create many WarehouseReceipts.
     * @example
     * // Create many WarehouseReceipts
     * const warehouseReceipt = await prisma.warehouseReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarehouseReceipts and only return the `id`
     * const warehouseReceiptWithIdOnly = await prisma.warehouseReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseReceiptCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WarehouseReceipt.
     * @param {WarehouseReceiptDeleteArgs} args - Arguments to delete one WarehouseReceipt.
     * @example
     * // Delete one WarehouseReceipt
     * const WarehouseReceipt = await prisma.warehouseReceipt.delete({
     *   where: {
     *     // ... filter to delete one WarehouseReceipt
     *   }
     * })
     * 
     */
    delete<T extends WarehouseReceiptDeleteArgs>(args: SelectSubset<T, WarehouseReceiptDeleteArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WarehouseReceipt.
     * @param {WarehouseReceiptUpdateArgs} args - Arguments to update one WarehouseReceipt.
     * @example
     * // Update one WarehouseReceipt
     * const warehouseReceipt = await prisma.warehouseReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseReceiptUpdateArgs>(args: SelectSubset<T, WarehouseReceiptUpdateArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WarehouseReceipts.
     * @param {WarehouseReceiptDeleteManyArgs} args - Arguments to filter WarehouseReceipts to delete.
     * @example
     * // Delete a few WarehouseReceipts
     * const { count } = await prisma.warehouseReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseReceiptDeleteManyArgs>(args?: SelectSubset<T, WarehouseReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarehouseReceipts
     * const warehouseReceipt = await prisma.warehouseReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseReceiptUpdateManyArgs>(args: SelectSubset<T, WarehouseReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseReceipts and returns the data updated in the database.
     * @param {WarehouseReceiptUpdateManyAndReturnArgs} args - Arguments to update many WarehouseReceipts.
     * @example
     * // Update many WarehouseReceipts
     * const warehouseReceipt = await prisma.warehouseReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WarehouseReceipts and only return the `id`
     * const warehouseReceiptWithIdOnly = await prisma.warehouseReceipt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseReceiptUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WarehouseReceipt.
     * @param {WarehouseReceiptUpsertArgs} args - Arguments to update or create a WarehouseReceipt.
     * @example
     * // Update or create a WarehouseReceipt
     * const warehouseReceipt = await prisma.warehouseReceipt.upsert({
     *   create: {
     *     // ... data to create a WarehouseReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarehouseReceipt we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseReceiptUpsertArgs>(args: SelectSubset<T, WarehouseReceiptUpsertArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WarehouseReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptCountArgs} args - Arguments to filter WarehouseReceipts to count.
     * @example
     * // Count the number of WarehouseReceipts
     * const count = await prisma.warehouseReceipt.count({
     *   where: {
     *     // ... the filter for the WarehouseReceipts we want to count
     *   }
     * })
    **/
    count<T extends WarehouseReceiptCountArgs>(
      args?: Subset<T, WarehouseReceiptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseReceiptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarehouseReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseReceiptAggregateArgs>(args: Subset<T, WarehouseReceiptAggregateArgs>): Prisma.PrismaPromise<GetWarehouseReceiptAggregateType<T>>

    /**
     * Group by WarehouseReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseReceiptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseReceiptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseReceiptGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseReceiptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarehouseReceipt model
   */
  readonly fields: WarehouseReceiptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarehouseReceipt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseReceiptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchaseOrder<T extends PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseOrderDefaultArgs<ExtArgs>>): Prisma__PurchaseOrderClient<$Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productSerial<T extends WarehouseReceipt$productSerialArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseReceipt$productSerialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WarehouseReceipt model
   */
  interface WarehouseReceiptFieldRefs {
    readonly id: FieldRef<"WarehouseReceipt", 'Int'>
    readonly receiptNumber: FieldRef<"WarehouseReceipt", 'String'>
    readonly purchaseOrderId: FieldRef<"WarehouseReceipt", 'Int'>
    readonly createdAt: FieldRef<"WarehouseReceipt", 'DateTime'>
    readonly receiptDate: FieldRef<"WarehouseReceipt", 'DateTime'>
    readonly employeeId: FieldRef<"WarehouseReceipt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WarehouseReceipt findUnique
   */
  export type WarehouseReceiptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseReceipt to fetch.
     */
    where: WarehouseReceiptWhereUniqueInput
  }

  /**
   * WarehouseReceipt findUniqueOrThrow
   */
  export type WarehouseReceiptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseReceipt to fetch.
     */
    where: WarehouseReceiptWhereUniqueInput
  }

  /**
   * WarehouseReceipt findFirst
   */
  export type WarehouseReceiptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseReceipt to fetch.
     */
    where?: WarehouseReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseReceipts to fetch.
     */
    orderBy?: WarehouseReceiptOrderByWithRelationInput | WarehouseReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseReceipts.
     */
    cursor?: WarehouseReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseReceipts.
     */
    distinct?: WarehouseReceiptScalarFieldEnum | WarehouseReceiptScalarFieldEnum[]
  }

  /**
   * WarehouseReceipt findFirstOrThrow
   */
  export type WarehouseReceiptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseReceipt to fetch.
     */
    where?: WarehouseReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseReceipts to fetch.
     */
    orderBy?: WarehouseReceiptOrderByWithRelationInput | WarehouseReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseReceipts.
     */
    cursor?: WarehouseReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseReceipts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseReceipts.
     */
    distinct?: WarehouseReceiptScalarFieldEnum | WarehouseReceiptScalarFieldEnum[]
  }

  /**
   * WarehouseReceipt findMany
   */
  export type WarehouseReceiptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseReceipts to fetch.
     */
    where?: WarehouseReceiptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseReceipts to fetch.
     */
    orderBy?: WarehouseReceiptOrderByWithRelationInput | WarehouseReceiptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarehouseReceipts.
     */
    cursor?: WarehouseReceiptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseReceipts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseReceipts.
     */
    skip?: number
    distinct?: WarehouseReceiptScalarFieldEnum | WarehouseReceiptScalarFieldEnum[]
  }

  /**
   * WarehouseReceipt create
   */
  export type WarehouseReceiptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * The data needed to create a WarehouseReceipt.
     */
    data: XOR<WarehouseReceiptCreateInput, WarehouseReceiptUncheckedCreateInput>
  }

  /**
   * WarehouseReceipt createMany
   */
  export type WarehouseReceiptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarehouseReceipts.
     */
    data: WarehouseReceiptCreateManyInput | WarehouseReceiptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarehouseReceipt createManyAndReturn
   */
  export type WarehouseReceiptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * The data used to create many WarehouseReceipts.
     */
    data: WarehouseReceiptCreateManyInput | WarehouseReceiptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseReceipt update
   */
  export type WarehouseReceiptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * The data needed to update a WarehouseReceipt.
     */
    data: XOR<WarehouseReceiptUpdateInput, WarehouseReceiptUncheckedUpdateInput>
    /**
     * Choose, which WarehouseReceipt to update.
     */
    where: WarehouseReceiptWhereUniqueInput
  }

  /**
   * WarehouseReceipt updateMany
   */
  export type WarehouseReceiptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarehouseReceipts.
     */
    data: XOR<WarehouseReceiptUpdateManyMutationInput, WarehouseReceiptUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseReceipts to update
     */
    where?: WarehouseReceiptWhereInput
    /**
     * Limit how many WarehouseReceipts to update.
     */
    limit?: number
  }

  /**
   * WarehouseReceipt updateManyAndReturn
   */
  export type WarehouseReceiptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * The data used to update WarehouseReceipts.
     */
    data: XOR<WarehouseReceiptUpdateManyMutationInput, WarehouseReceiptUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseReceipts to update
     */
    where?: WarehouseReceiptWhereInput
    /**
     * Limit how many WarehouseReceipts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseReceipt upsert
   */
  export type WarehouseReceiptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * The filter to search for the WarehouseReceipt to update in case it exists.
     */
    where: WarehouseReceiptWhereUniqueInput
    /**
     * In case the WarehouseReceipt found by the `where` argument doesn't exist, create a new WarehouseReceipt with this data.
     */
    create: XOR<WarehouseReceiptCreateInput, WarehouseReceiptUncheckedCreateInput>
    /**
     * In case the WarehouseReceipt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseReceiptUpdateInput, WarehouseReceiptUncheckedUpdateInput>
  }

  /**
   * WarehouseReceipt delete
   */
  export type WarehouseReceiptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
    /**
     * Filter which WarehouseReceipt to delete.
     */
    where: WarehouseReceiptWhereUniqueInput
  }

  /**
   * WarehouseReceipt deleteMany
   */
  export type WarehouseReceiptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseReceipts to delete
     */
    where?: WarehouseReceiptWhereInput
    /**
     * Limit how many WarehouseReceipts to delete.
     */
    limit?: number
  }

  /**
   * WarehouseReceipt.productSerial
   */
  export type WarehouseReceipt$productSerialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    where?: ProductSerialWhereInput
    orderBy?: ProductSerialOrderByWithRelationInput | ProductSerialOrderByWithRelationInput[]
    cursor?: ProductSerialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSerialScalarFieldEnum | ProductSerialScalarFieldEnum[]
  }

  /**
   * WarehouseReceipt without action
   */
  export type WarehouseReceiptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseReceipt
     */
    select?: WarehouseReceiptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseReceipt
     */
    omit?: WarehouseReceiptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseReceiptInclude<ExtArgs> | null
  }


  /**
   * Model ProductSerial
   */

  export type AggregateProductSerial = {
    _count: ProductSerialCountAggregateOutputType | null
    _avg: ProductSerialAvgAggregateOutputType | null
    _sum: ProductSerialSumAggregateOutputType | null
    _min: ProductSerialMinAggregateOutputType | null
    _max: ProductSerialMaxAggregateOutputType | null
  }

  export type ProductSerialAvgAggregateOutputType = {
    productSkuId: number | null
    warehouseReceiptId: number | null
  }

  export type ProductSerialSumAggregateOutputType = {
    productSkuId: number | null
    warehouseReceiptId: number | null
  }

  export type ProductSerialMinAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    dateManufactured: Date | null
    productSkuId: number | null
    warehouseReceiptId: number | null
    status: boolean | null
  }

  export type ProductSerialMaxAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    dateManufactured: Date | null
    productSkuId: number | null
    warehouseReceiptId: number | null
    status: boolean | null
  }

  export type ProductSerialCountAggregateOutputType = {
    id: number
    serialNumber: number
    dateManufactured: number
    productSkuId: number
    warehouseReceiptId: number
    status: number
    _all: number
  }


  export type ProductSerialAvgAggregateInputType = {
    productSkuId?: true
    warehouseReceiptId?: true
  }

  export type ProductSerialSumAggregateInputType = {
    productSkuId?: true
    warehouseReceiptId?: true
  }

  export type ProductSerialMinAggregateInputType = {
    id?: true
    serialNumber?: true
    dateManufactured?: true
    productSkuId?: true
    warehouseReceiptId?: true
    status?: true
  }

  export type ProductSerialMaxAggregateInputType = {
    id?: true
    serialNumber?: true
    dateManufactured?: true
    productSkuId?: true
    warehouseReceiptId?: true
    status?: true
  }

  export type ProductSerialCountAggregateInputType = {
    id?: true
    serialNumber?: true
    dateManufactured?: true
    productSkuId?: true
    warehouseReceiptId?: true
    status?: true
    _all?: true
  }

  export type ProductSerialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSerial to aggregate.
     */
    where?: ProductSerialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSerials to fetch.
     */
    orderBy?: ProductSerialOrderByWithRelationInput | ProductSerialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSerialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSerials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSerials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSerials
    **/
    _count?: true | ProductSerialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSerialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSerialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSerialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSerialMaxAggregateInputType
  }

  export type GetProductSerialAggregateType<T extends ProductSerialAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSerial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSerial[P]>
      : GetScalarType<T[P], AggregateProductSerial[P]>
  }




  export type ProductSerialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSerialWhereInput
    orderBy?: ProductSerialOrderByWithAggregationInput | ProductSerialOrderByWithAggregationInput[]
    by: ProductSerialScalarFieldEnum[] | ProductSerialScalarFieldEnum
    having?: ProductSerialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSerialCountAggregateInputType | true
    _avg?: ProductSerialAvgAggregateInputType
    _sum?: ProductSerialSumAggregateInputType
    _min?: ProductSerialMinAggregateInputType
    _max?: ProductSerialMaxAggregateInputType
  }

  export type ProductSerialGroupByOutputType = {
    id: string
    serialNumber: string
    dateManufactured: Date
    productSkuId: number
    warehouseReceiptId: number
    status: boolean
    _count: ProductSerialCountAggregateOutputType | null
    _avg: ProductSerialAvgAggregateOutputType | null
    _sum: ProductSerialSumAggregateOutputType | null
    _min: ProductSerialMinAggregateOutputType | null
    _max: ProductSerialMaxAggregateOutputType | null
  }

  type GetProductSerialGroupByPayload<T extends ProductSerialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSerialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSerialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSerialGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSerialGroupByOutputType[P]>
        }
      >
    >


  export type ProductSerialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    dateManufactured?: boolean
    productSkuId?: boolean
    warehouseReceiptId?: boolean
    status?: boolean
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
    warehouseReceipt?: boolean | WarehouseReceiptDefaultArgs<ExtArgs>
    orderDetail?: boolean | ProductSerial$orderDetailArgs<ExtArgs>
    _count?: boolean | ProductSerialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSerial"]>

  export type ProductSerialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    dateManufactured?: boolean
    productSkuId?: boolean
    warehouseReceiptId?: boolean
    status?: boolean
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
    warehouseReceipt?: boolean | WarehouseReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSerial"]>

  export type ProductSerialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    dateManufactured?: boolean
    productSkuId?: boolean
    warehouseReceiptId?: boolean
    status?: boolean
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
    warehouseReceipt?: boolean | WarehouseReceiptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSerial"]>

  export type ProductSerialSelectScalar = {
    id?: boolean
    serialNumber?: boolean
    dateManufactured?: boolean
    productSkuId?: boolean
    warehouseReceiptId?: boolean
    status?: boolean
  }

  export type ProductSerialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serialNumber" | "dateManufactured" | "productSkuId" | "warehouseReceiptId" | "status", ExtArgs["result"]["productSerial"]>
  export type ProductSerialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
    warehouseReceipt?: boolean | WarehouseReceiptDefaultArgs<ExtArgs>
    orderDetail?: boolean | ProductSerial$orderDetailArgs<ExtArgs>
    _count?: boolean | ProductSerialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductSerialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
    warehouseReceipt?: boolean | WarehouseReceiptDefaultArgs<ExtArgs>
  }
  export type ProductSerialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productSku?: boolean | ProductSkuDefaultArgs<ExtArgs>
    warehouseReceipt?: boolean | WarehouseReceiptDefaultArgs<ExtArgs>
  }

  export type $ProductSerialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSerial"
    objects: {
      productSku: Prisma.$ProductSkuPayload<ExtArgs>
      warehouseReceipt: Prisma.$WarehouseReceiptPayload<ExtArgs>
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serialNumber: string
      dateManufactured: Date
      productSkuId: number
      warehouseReceiptId: number
      status: boolean
    }, ExtArgs["result"]["productSerial"]>
    composites: {}
  }

  type ProductSerialGetPayload<S extends boolean | null | undefined | ProductSerialDefaultArgs> = $Result.GetResult<Prisma.$ProductSerialPayload, S>

  type ProductSerialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSerialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSerialCountAggregateInputType | true
    }

  export interface ProductSerialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSerial'], meta: { name: 'ProductSerial' } }
    /**
     * Find zero or one ProductSerial that matches the filter.
     * @param {ProductSerialFindUniqueArgs} args - Arguments to find a ProductSerial
     * @example
     * // Get one ProductSerial
     * const productSerial = await prisma.productSerial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSerialFindUniqueArgs>(args: SelectSubset<T, ProductSerialFindUniqueArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSerial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSerialFindUniqueOrThrowArgs} args - Arguments to find a ProductSerial
     * @example
     * // Get one ProductSerial
     * const productSerial = await prisma.productSerial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSerialFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSerialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSerial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialFindFirstArgs} args - Arguments to find a ProductSerial
     * @example
     * // Get one ProductSerial
     * const productSerial = await prisma.productSerial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSerialFindFirstArgs>(args?: SelectSubset<T, ProductSerialFindFirstArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSerial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialFindFirstOrThrowArgs} args - Arguments to find a ProductSerial
     * @example
     * // Get one ProductSerial
     * const productSerial = await prisma.productSerial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSerialFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSerialFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSerials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSerials
     * const productSerials = await prisma.productSerial.findMany()
     * 
     * // Get first 10 ProductSerials
     * const productSerials = await prisma.productSerial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSerialWithIdOnly = await prisma.productSerial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSerialFindManyArgs>(args?: SelectSubset<T, ProductSerialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSerial.
     * @param {ProductSerialCreateArgs} args - Arguments to create a ProductSerial.
     * @example
     * // Create one ProductSerial
     * const ProductSerial = await prisma.productSerial.create({
     *   data: {
     *     // ... data to create a ProductSerial
     *   }
     * })
     * 
     */
    create<T extends ProductSerialCreateArgs>(args: SelectSubset<T, ProductSerialCreateArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSerials.
     * @param {ProductSerialCreateManyArgs} args - Arguments to create many ProductSerials.
     * @example
     * // Create many ProductSerials
     * const productSerial = await prisma.productSerial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSerialCreateManyArgs>(args?: SelectSubset<T, ProductSerialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSerials and returns the data saved in the database.
     * @param {ProductSerialCreateManyAndReturnArgs} args - Arguments to create many ProductSerials.
     * @example
     * // Create many ProductSerials
     * const productSerial = await prisma.productSerial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSerials and only return the `id`
     * const productSerialWithIdOnly = await prisma.productSerial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSerialCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSerialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSerial.
     * @param {ProductSerialDeleteArgs} args - Arguments to delete one ProductSerial.
     * @example
     * // Delete one ProductSerial
     * const ProductSerial = await prisma.productSerial.delete({
     *   where: {
     *     // ... filter to delete one ProductSerial
     *   }
     * })
     * 
     */
    delete<T extends ProductSerialDeleteArgs>(args: SelectSubset<T, ProductSerialDeleteArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSerial.
     * @param {ProductSerialUpdateArgs} args - Arguments to update one ProductSerial.
     * @example
     * // Update one ProductSerial
     * const productSerial = await prisma.productSerial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSerialUpdateArgs>(args: SelectSubset<T, ProductSerialUpdateArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSerials.
     * @param {ProductSerialDeleteManyArgs} args - Arguments to filter ProductSerials to delete.
     * @example
     * // Delete a few ProductSerials
     * const { count } = await prisma.productSerial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSerialDeleteManyArgs>(args?: SelectSubset<T, ProductSerialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSerials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSerials
     * const productSerial = await prisma.productSerial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSerialUpdateManyArgs>(args: SelectSubset<T, ProductSerialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSerials and returns the data updated in the database.
     * @param {ProductSerialUpdateManyAndReturnArgs} args - Arguments to update many ProductSerials.
     * @example
     * // Update many ProductSerials
     * const productSerial = await prisma.productSerial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSerials and only return the `id`
     * const productSerialWithIdOnly = await prisma.productSerial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductSerialUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSerialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSerial.
     * @param {ProductSerialUpsertArgs} args - Arguments to update or create a ProductSerial.
     * @example
     * // Update or create a ProductSerial
     * const productSerial = await prisma.productSerial.upsert({
     *   create: {
     *     // ... data to create a ProductSerial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSerial we want to update
     *   }
     * })
     */
    upsert<T extends ProductSerialUpsertArgs>(args: SelectSubset<T, ProductSerialUpsertArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSerials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialCountArgs} args - Arguments to filter ProductSerials to count.
     * @example
     * // Count the number of ProductSerials
     * const count = await prisma.productSerial.count({
     *   where: {
     *     // ... the filter for the ProductSerials we want to count
     *   }
     * })
    **/
    count<T extends ProductSerialCountArgs>(
      args?: Subset<T, ProductSerialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSerialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSerial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductSerialAggregateArgs>(args: Subset<T, ProductSerialAggregateArgs>): Prisma.PrismaPromise<GetProductSerialAggregateType<T>>

    /**
     * Group by ProductSerial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSerialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductSerialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSerialGroupByArgs['orderBy'] }
        : { orderBy?: ProductSerialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductSerialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSerialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSerial model
   */
  readonly fields: ProductSerialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSerial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSerialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productSku<T extends ProductSkuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductSkuDefaultArgs<ExtArgs>>): Prisma__ProductSkuClient<$Result.GetResult<Prisma.$ProductSkuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouseReceipt<T extends WarehouseReceiptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseReceiptDefaultArgs<ExtArgs>>): Prisma__WarehouseReceiptClient<$Result.GetResult<Prisma.$WarehouseReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderDetail<T extends ProductSerial$orderDetailArgs<ExtArgs> = {}>(args?: Subset<T, ProductSerial$orderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductSerial model
   */
  interface ProductSerialFieldRefs {
    readonly id: FieldRef<"ProductSerial", 'String'>
    readonly serialNumber: FieldRef<"ProductSerial", 'String'>
    readonly dateManufactured: FieldRef<"ProductSerial", 'DateTime'>
    readonly productSkuId: FieldRef<"ProductSerial", 'Int'>
    readonly warehouseReceiptId: FieldRef<"ProductSerial", 'Int'>
    readonly status: FieldRef<"ProductSerial", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductSerial findUnique
   */
  export type ProductSerialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * Filter, which ProductSerial to fetch.
     */
    where: ProductSerialWhereUniqueInput
  }

  /**
   * ProductSerial findUniqueOrThrow
   */
  export type ProductSerialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * Filter, which ProductSerial to fetch.
     */
    where: ProductSerialWhereUniqueInput
  }

  /**
   * ProductSerial findFirst
   */
  export type ProductSerialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * Filter, which ProductSerial to fetch.
     */
    where?: ProductSerialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSerials to fetch.
     */
    orderBy?: ProductSerialOrderByWithRelationInput | ProductSerialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSerials.
     */
    cursor?: ProductSerialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSerials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSerials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSerials.
     */
    distinct?: ProductSerialScalarFieldEnum | ProductSerialScalarFieldEnum[]
  }

  /**
   * ProductSerial findFirstOrThrow
   */
  export type ProductSerialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * Filter, which ProductSerial to fetch.
     */
    where?: ProductSerialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSerials to fetch.
     */
    orderBy?: ProductSerialOrderByWithRelationInput | ProductSerialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSerials.
     */
    cursor?: ProductSerialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSerials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSerials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSerials.
     */
    distinct?: ProductSerialScalarFieldEnum | ProductSerialScalarFieldEnum[]
  }

  /**
   * ProductSerial findMany
   */
  export type ProductSerialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * Filter, which ProductSerials to fetch.
     */
    where?: ProductSerialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSerials to fetch.
     */
    orderBy?: ProductSerialOrderByWithRelationInput | ProductSerialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSerials.
     */
    cursor?: ProductSerialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSerials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSerials.
     */
    skip?: number
    distinct?: ProductSerialScalarFieldEnum | ProductSerialScalarFieldEnum[]
  }

  /**
   * ProductSerial create
   */
  export type ProductSerialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSerial.
     */
    data: XOR<ProductSerialCreateInput, ProductSerialUncheckedCreateInput>
  }

  /**
   * ProductSerial createMany
   */
  export type ProductSerialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSerials.
     */
    data: ProductSerialCreateManyInput | ProductSerialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSerial createManyAndReturn
   */
  export type ProductSerialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSerials.
     */
    data: ProductSerialCreateManyInput | ProductSerialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSerial update
   */
  export type ProductSerialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSerial.
     */
    data: XOR<ProductSerialUpdateInput, ProductSerialUncheckedUpdateInput>
    /**
     * Choose, which ProductSerial to update.
     */
    where: ProductSerialWhereUniqueInput
  }

  /**
   * ProductSerial updateMany
   */
  export type ProductSerialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSerials.
     */
    data: XOR<ProductSerialUpdateManyMutationInput, ProductSerialUncheckedUpdateManyInput>
    /**
     * Filter which ProductSerials to update
     */
    where?: ProductSerialWhereInput
    /**
     * Limit how many ProductSerials to update.
     */
    limit?: number
  }

  /**
   * ProductSerial updateManyAndReturn
   */
  export type ProductSerialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * The data used to update ProductSerials.
     */
    data: XOR<ProductSerialUpdateManyMutationInput, ProductSerialUncheckedUpdateManyInput>
    /**
     * Filter which ProductSerials to update
     */
    where?: ProductSerialWhereInput
    /**
     * Limit how many ProductSerials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSerial upsert
   */
  export type ProductSerialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSerial to update in case it exists.
     */
    where: ProductSerialWhereUniqueInput
    /**
     * In case the ProductSerial found by the `where` argument doesn't exist, create a new ProductSerial with this data.
     */
    create: XOR<ProductSerialCreateInput, ProductSerialUncheckedCreateInput>
    /**
     * In case the ProductSerial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSerialUpdateInput, ProductSerialUncheckedUpdateInput>
  }

  /**
   * ProductSerial delete
   */
  export type ProductSerialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
    /**
     * Filter which ProductSerial to delete.
     */
    where: ProductSerialWhereUniqueInput
  }

  /**
   * ProductSerial deleteMany
   */
  export type ProductSerialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSerials to delete
     */
    where?: ProductSerialWhereInput
    /**
     * Limit how many ProductSerials to delete.
     */
    limit?: number
  }

  /**
   * ProductSerial.orderDetail
   */
  export type ProductSerial$orderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * ProductSerial without action
   */
  export type ProductSerialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSerial
     */
    select?: ProductSerialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSerial
     */
    omit?: ProductSerialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSerialInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    shippingFee: number | null
    discount: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    shippingFee: number | null
    discount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    employeeId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    contactPhone: string | null
    shippingAddress: string | null
    postcode: string | null
    status: string | null
    orderType: boolean | null
    shippingMethod: string | null
    paymentMethod: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shippingFee: number | null
    discount: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    employeeId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    contactPhone: string | null
    shippingAddress: string | null
    postcode: string | null
    status: string | null
    orderType: boolean | null
    shippingMethod: string | null
    paymentMethod: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shippingFee: number | null
    discount: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    employeeId: number
    firstName: number
    lastName: number
    email: number
    contactPhone: number
    shippingAddress: number
    postcode: number
    status: number
    orderType: number
    shippingMethod: number
    paymentMethod: number
    note: number
    createdAt: number
    updatedAt: number
    shippingFee: number
    discount: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    shippingFee?: true
    discount?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    shippingFee?: true
    discount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    contactPhone?: true
    shippingAddress?: true
    postcode?: true
    status?: true
    orderType?: true
    shippingMethod?: true
    paymentMethod?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    shippingFee?: true
    discount?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    contactPhone?: true
    shippingAddress?: true
    postcode?: true
    status?: true
    orderType?: true
    shippingMethod?: true
    paymentMethod?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    shippingFee?: true
    discount?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    employeeId?: true
    firstName?: true
    lastName?: true
    email?: true
    contactPhone?: true
    shippingAddress?: true
    postcode?: true
    status?: true
    orderType?: true
    shippingMethod?: true
    paymentMethod?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    shippingFee?: true
    discount?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    employeeId: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode: string | null
    status: string
    orderType: boolean
    shippingMethod: string
    paymentMethod: string
    note: string | null
    createdAt: Date
    updatedAt: Date
    shippingFee: number
    discount: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactPhone?: boolean
    shippingAddress?: boolean
    postcode?: boolean
    status?: boolean
    orderType?: boolean
    shippingMethod?: boolean
    paymentMethod?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippingFee?: boolean
    discount?: boolean
    orderDetail?: boolean | Order$orderDetailArgs<ExtArgs>
    invoice?: boolean | Order$invoiceArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactPhone?: boolean
    shippingAddress?: boolean
    postcode?: boolean
    status?: boolean
    orderType?: boolean
    shippingMethod?: boolean
    paymentMethod?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippingFee?: boolean
    discount?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactPhone?: boolean
    shippingAddress?: boolean
    postcode?: boolean
    status?: boolean
    orderType?: boolean
    shippingMethod?: boolean
    paymentMethod?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippingFee?: boolean
    discount?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    employeeId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    contactPhone?: boolean
    shippingAddress?: boolean
    postcode?: boolean
    status?: boolean
    orderType?: boolean
    shippingMethod?: boolean
    paymentMethod?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippingFee?: boolean
    discount?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "firstName" | "lastName" | "email" | "contactPhone" | "shippingAddress" | "postcode" | "status" | "orderType" | "shippingMethod" | "paymentMethod" | "note" | "createdAt" | "updatedAt" | "shippingFee" | "discount", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderDetail?: boolean | Order$orderDetailArgs<ExtArgs>
    invoice?: boolean | Order$invoiceArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      orderDetail: Prisma.$OrderDetailPayload<ExtArgs>[]
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: string | null
      firstName: string
      lastName: string
      email: string
      contactPhone: string
      shippingAddress: string
      postcode: string | null
      status: string
      orderType: boolean
      shippingMethod: string
      paymentMethod: string
      note: string | null
      createdAt: Date
      updatedAt: Date
      shippingFee: number
      discount: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderDetail<T extends Order$orderDetailArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends Order$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Order$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly employeeId: FieldRef<"Order", 'String'>
    readonly firstName: FieldRef<"Order", 'String'>
    readonly lastName: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly contactPhone: FieldRef<"Order", 'String'>
    readonly shippingAddress: FieldRef<"Order", 'String'>
    readonly postcode: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'Boolean'>
    readonly shippingMethod: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly note: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly shippingFee: FieldRef<"Order", 'Int'>
    readonly discount: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderDetail
   */
  export type Order$orderDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * Order.invoice
   */
  export type Order$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderDetail
   */

  export type AggregateOrderDetail = {
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  export type OrderDetailAvgAggregateOutputType = {
    orderId: number | null
    unitPrice: number | null
    tax: number | null
  }

  export type OrderDetailSumAggregateOutputType = {
    orderId: number | null
    unitPrice: number | null
    tax: number | null
  }

  export type OrderDetailMinAggregateOutputType = {
    orderId: number | null
    productSerialId: string | null
    unitPrice: number | null
    tax: number | null
  }

  export type OrderDetailMaxAggregateOutputType = {
    orderId: number | null
    productSerialId: string | null
    unitPrice: number | null
    tax: number | null
  }

  export type OrderDetailCountAggregateOutputType = {
    orderId: number
    productSerialId: number
    unitPrice: number
    tax: number
    _all: number
  }


  export type OrderDetailAvgAggregateInputType = {
    orderId?: true
    unitPrice?: true
    tax?: true
  }

  export type OrderDetailSumAggregateInputType = {
    orderId?: true
    unitPrice?: true
    tax?: true
  }

  export type OrderDetailMinAggregateInputType = {
    orderId?: true
    productSerialId?: true
    unitPrice?: true
    tax?: true
  }

  export type OrderDetailMaxAggregateInputType = {
    orderId?: true
    productSerialId?: true
    unitPrice?: true
    tax?: true
  }

  export type OrderDetailCountAggregateInputType = {
    orderId?: true
    productSerialId?: true
    unitPrice?: true
    tax?: true
    _all?: true
  }

  export type OrderDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetail to aggregate.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailMaxAggregateInputType
  }

  export type GetOrderDetailAggregateType<T extends OrderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetail[P]>
      : GetScalarType<T[P], AggregateOrderDetail[P]>
  }




  export type OrderDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailWhereInput
    orderBy?: OrderDetailOrderByWithAggregationInput | OrderDetailOrderByWithAggregationInput[]
    by: OrderDetailScalarFieldEnum[] | OrderDetailScalarFieldEnum
    having?: OrderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailCountAggregateInputType | true
    _avg?: OrderDetailAvgAggregateInputType
    _sum?: OrderDetailSumAggregateInputType
    _min?: OrderDetailMinAggregateInputType
    _max?: OrderDetailMaxAggregateInputType
  }

  export type OrderDetailGroupByOutputType = {
    orderId: number
    productSerialId: string
    unitPrice: number
    tax: number
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  type GetOrderDetailGroupByPayload<T extends OrderDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    productSerialId?: boolean
    unitPrice?: boolean
    tax?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSerial?: boolean | ProductSerialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    productSerialId?: boolean
    unitPrice?: boolean
    tax?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSerial?: boolean | ProductSerialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    productSerialId?: boolean
    unitPrice?: boolean
    tax?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSerial?: boolean | ProductSerialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetail"]>

  export type OrderDetailSelectScalar = {
    orderId?: boolean
    productSerialId?: boolean
    unitPrice?: boolean
    tax?: boolean
  }

  export type OrderDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "productSerialId" | "unitPrice" | "tax", ExtArgs["result"]["orderDetail"]>
  export type OrderDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSerial?: boolean | ProductSerialDefaultArgs<ExtArgs>
  }
  export type OrderDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSerial?: boolean | ProductSerialDefaultArgs<ExtArgs>
  }
  export type OrderDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productSerial?: boolean | ProductSerialDefaultArgs<ExtArgs>
  }

  export type $OrderDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetail"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      productSerial: Prisma.$ProductSerialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: number
      productSerialId: string
      unitPrice: number
      tax: number
    }, ExtArgs["result"]["orderDetail"]>
    composites: {}
  }

  type OrderDetailGetPayload<S extends boolean | null | undefined | OrderDetailDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailPayload, S>

  type OrderDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDetailCountAggregateInputType | true
    }

  export interface OrderDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetail'], meta: { name: 'OrderDetail' } }
    /**
     * Find zero or one OrderDetail that matches the filter.
     * @param {OrderDetailFindUniqueArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDetailFindUniqueArgs>(args: SelectSubset<T, OrderDetailFindUniqueArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDetailFindUniqueOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDetailFindFirstArgs>(args?: SelectSubset<T, OrderDetailFindFirstArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const orderDetailWithOrderIdOnly = await prisma.orderDetail.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrderDetailFindManyArgs>(args?: SelectSubset<T, OrderDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderDetail.
     * @param {OrderDetailCreateArgs} args - Arguments to create a OrderDetail.
     * @example
     * // Create one OrderDetail
     * const OrderDetail = await prisma.orderDetail.create({
     *   data: {
     *     // ... data to create a OrderDetail
     *   }
     * })
     * 
     */
    create<T extends OrderDetailCreateArgs>(args: SelectSubset<T, OrderDetailCreateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderDetails.
     * @param {OrderDetailCreateManyArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDetailCreateManyArgs>(args?: SelectSubset<T, OrderDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderDetails and returns the data saved in the database.
     * @param {OrderDetailCreateManyAndReturnArgs} args - Arguments to create many OrderDetails.
     * @example
     * // Create many OrderDetails
     * const orderDetail = await prisma.orderDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderDetails and only return the `orderId`
     * const orderDetailWithOrderIdOnly = await prisma.orderDetail.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderDetail.
     * @param {OrderDetailDeleteArgs} args - Arguments to delete one OrderDetail.
     * @example
     * // Delete one OrderDetail
     * const OrderDetail = await prisma.orderDetail.delete({
     *   where: {
     *     // ... filter to delete one OrderDetail
     *   }
     * })
     * 
     */
    delete<T extends OrderDetailDeleteArgs>(args: SelectSubset<T, OrderDetailDeleteArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderDetail.
     * @param {OrderDetailUpdateArgs} args - Arguments to update one OrderDetail.
     * @example
     * // Update one OrderDetail
     * const orderDetail = await prisma.orderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDetailUpdateArgs>(args: SelectSubset<T, OrderDetailUpdateArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDetailDeleteManyArgs>(args?: SelectSubset<T, OrderDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDetailUpdateManyArgs>(args: SelectSubset<T, OrderDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails and returns the data updated in the database.
     * @param {OrderDetailUpdateManyAndReturnArgs} args - Arguments to update many OrderDetails.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderDetails and only return the `orderId`
     * const orderDetailWithOrderIdOnly = await prisma.orderDetail.updateManyAndReturn({
     *   select: { orderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderDetail.
     * @param {OrderDetailUpsertArgs} args - Arguments to update or create a OrderDetail.
     * @example
     * // Update or create a OrderDetail
     * const orderDetail = await prisma.orderDetail.upsert({
     *   create: {
     *     // ... data to create a OrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetail we want to update
     *   }
     * })
     */
    upsert<T extends OrderDetailUpsertArgs>(args: SelectSubset<T, OrderDetailUpsertArgs<ExtArgs>>): Prisma__OrderDetailClient<$Result.GetResult<Prisma.$OrderDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetail.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailCountArgs>(
      args?: Subset<T, OrderDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderDetailAggregateArgs>(args: Subset<T, OrderDetailAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailAggregateType<T>>

    /**
     * Group by OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetail model
   */
  readonly fields: OrderDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productSerial<T extends ProductSerialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductSerialDefaultArgs<ExtArgs>>): Prisma__ProductSerialClient<$Result.GetResult<Prisma.$ProductSerialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderDetail model
   */
  interface OrderDetailFieldRefs {
    readonly orderId: FieldRef<"OrderDetail", 'Int'>
    readonly productSerialId: FieldRef<"OrderDetail", 'String'>
    readonly unitPrice: FieldRef<"OrderDetail", 'Int'>
    readonly tax: FieldRef<"OrderDetail", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderDetail findUnique
   */
  export type OrderDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findUniqueOrThrow
   */
  export type OrderDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findFirst
   */
  export type OrderDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findFirstOrThrow
   */
  export type OrderDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetail to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail findMany
   */
  export type OrderDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailOrderByWithRelationInput | OrderDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailScalarFieldEnum | OrderDetailScalarFieldEnum[]
  }

  /**
   * OrderDetail create
   */
  export type OrderDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetail.
     */
    data: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
  }

  /**
   * OrderDetail createMany
   */
  export type OrderDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDetail createManyAndReturn
   */
  export type OrderDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailCreateManyInput | OrderDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetail update
   */
  export type OrderDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetail.
     */
    data: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
    /**
     * Choose, which OrderDetail to update.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail updateMany
   */
  export type OrderDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
  }

  /**
   * OrderDetail updateManyAndReturn
   */
  export type OrderDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailWhereInput
    /**
     * Limit how many OrderDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderDetail upsert
   */
  export type OrderDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetail to update in case it exists.
     */
    where: OrderDetailWhereUniqueInput
    /**
     * In case the OrderDetail found by the `where` argument doesn't exist, create a new OrderDetail with this data.
     */
    create: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
    /**
     * In case the OrderDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
  }

  /**
   * OrderDetail delete
   */
  export type OrderDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
    /**
     * Filter which OrderDetail to delete.
     */
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail deleteMany
   */
  export type OrderDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailWhereInput
    /**
     * Limit how many OrderDetails to delete.
     */
    limit?: number
  }

  /**
   * OrderDetail without action
   */
  export type OrderDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetail
     */
    select?: OrderDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDetail
     */
    omit?: OrderDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDetailInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    subtotal: number | null
    taxAmount: number | null
    totalAmount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    subtotal: number | null
    taxAmount: number | null
    totalAmount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    invoiceCode: string | null
    orderId: number | null
    createdAt: Date | null
    employeeId: string | null
    taxCode: string | null
    subtotal: number | null
    taxAmount: number | null
    totalAmount: number | null
    notes: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    invoiceCode: string | null
    orderId: number | null
    createdAt: Date | null
    employeeId: string | null
    taxCode: string | null
    subtotal: number | null
    taxAmount: number | null
    totalAmount: number | null
    notes: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceCode: number
    orderId: number
    createdAt: number
    employeeId: number
    taxCode: number
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    orderId?: true
    subtotal?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    orderId?: true
    subtotal?: true
    taxAmount?: true
    totalAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceCode?: true
    orderId?: true
    createdAt?: true
    employeeId?: true
    taxCode?: true
    subtotal?: true
    taxAmount?: true
    totalAmount?: true
    notes?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceCode?: true
    orderId?: true
    createdAt?: true
    employeeId?: true
    taxCode?: true
    subtotal?: true
    taxAmount?: true
    totalAmount?: true
    notes?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceCode?: true
    orderId?: true
    createdAt?: true
    employeeId?: true
    taxCode?: true
    subtotal?: true
    taxAmount?: true
    totalAmount?: true
    notes?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    invoiceCode: string
    orderId: number
    createdAt: Date
    employeeId: string
    taxCode: string
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes: string | null
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceCode?: boolean
    orderId?: boolean
    createdAt?: boolean
    employeeId?: boolean
    taxCode?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceCode?: boolean
    orderId?: boolean
    createdAt?: boolean
    employeeId?: boolean
    taxCode?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceCode?: boolean
    orderId?: boolean
    createdAt?: boolean
    employeeId?: boolean
    taxCode?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    notes?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceCode?: boolean
    orderId?: boolean
    createdAt?: boolean
    employeeId?: boolean
    taxCode?: boolean
    subtotal?: boolean
    taxAmount?: boolean
    totalAmount?: boolean
    notes?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceCode" | "orderId" | "createdAt" | "employeeId" | "taxCode" | "subtotal" | "taxAmount" | "totalAmount" | "notes", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoiceCode: string
      orderId: number
      createdAt: Date
      employeeId: string
      taxCode: string
      subtotal: number
      taxAmount: number
      totalAmount: number
      notes: string | null
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly invoiceCode: FieldRef<"Invoice", 'String'>
    readonly orderId: FieldRef<"Invoice", 'Int'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly employeeId: FieldRef<"Invoice", 'String'>
    readonly taxCode: FieldRef<"Invoice", 'String'>
    readonly subtotal: FieldRef<"Invoice", 'Int'>
    readonly taxAmount: FieldRef<"Invoice", 'Int'>
    readonly totalAmount: FieldRef<"Invoice", 'Int'>
    readonly notes: FieldRef<"Invoice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BrandScalarFieldEnum: {
    id: 'id',
    brandName: 'brandName',
    brandUrl: 'brandUrl',
    description: 'description',
    brandAbbreviation: 'brandAbbreviation'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    slug: 'slug',
    productLine: 'productLine',
    description: 'description',
    status: 'status',
    productSpecs: 'productSpecs',
    brandId: 'brandId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductSkuScalarFieldEnum: {
    id: 'id',
    skuNo: 'skuNo',
    barcode: 'barcode',
    skuName: 'skuName',
    image: 'image',
    status: 'status',
    skuAttributes: 'skuAttributes',
    slug: 'slug'
  };

  export type ProductSkuScalarFieldEnum = (typeof ProductSkuScalarFieldEnum)[keyof typeof ProductSkuScalarFieldEnum]


  export const SpuSkuMappingScalarFieldEnum: {
    id: 'id',
    spuId: 'spuId',
    skuId: 'skuId'
  };

  export type SpuSkuMappingScalarFieldEnum = (typeof SpuSkuMappingScalarFieldEnum)[keyof typeof SpuSkuMappingScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    productSkuId: 'productSkuId',
    beginAt: 'beginAt',
    sellingPrice: 'sellingPrice',
    displayPrice: 'displayPrice',
    createdAt: 'createdAt'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const PurchaseOrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    supplierId: 'supplierId',
    createdAt: 'createdAt',
    orderDate: 'orderDate',
    employeeId: 'employeeId'
  };

  export type PurchaseOrderScalarFieldEnum = (typeof PurchaseOrderScalarFieldEnum)[keyof typeof PurchaseOrderScalarFieldEnum]


  export const PurchaseOrderDetailScalarFieldEnum: {
    purchaseOrderId: 'purchaseOrderId',
    skuId: 'skuId',
    quantity: 'quantity',
    unitPrice: 'unitPrice'
  };

  export type PurchaseOrderDetailScalarFieldEnum = (typeof PurchaseOrderDetailScalarFieldEnum)[keyof typeof PurchaseOrderDetailScalarFieldEnum]


  export const WarehouseReceiptScalarFieldEnum: {
    id: 'id',
    receiptNumber: 'receiptNumber',
    purchaseOrderId: 'purchaseOrderId',
    createdAt: 'createdAt',
    receiptDate: 'receiptDate',
    employeeId: 'employeeId'
  };

  export type WarehouseReceiptScalarFieldEnum = (typeof WarehouseReceiptScalarFieldEnum)[keyof typeof WarehouseReceiptScalarFieldEnum]


  export const ProductSerialScalarFieldEnum: {
    id: 'id',
    serialNumber: 'serialNumber',
    dateManufactured: 'dateManufactured',
    productSkuId: 'productSkuId',
    warehouseReceiptId: 'warehouseReceiptId',
    status: 'status'
  };

  export type ProductSerialScalarFieldEnum = (typeof ProductSerialScalarFieldEnum)[keyof typeof ProductSerialScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    contactPhone: 'contactPhone',
    shippingAddress: 'shippingAddress',
    postcode: 'postcode',
    status: 'status',
    orderType: 'orderType',
    shippingMethod: 'shippingMethod',
    paymentMethod: 'paymentMethod',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    shippingFee: 'shippingFee',
    discount: 'discount'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderDetailScalarFieldEnum: {
    orderId: 'orderId',
    productSerialId: 'productSerialId',
    unitPrice: 'unitPrice',
    tax: 'tax'
  };

  export type OrderDetailScalarFieldEnum = (typeof OrderDetailScalarFieldEnum)[keyof typeof OrderDetailScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceCode: 'invoiceCode',
    orderId: 'orderId',
    createdAt: 'createdAt',
    employeeId: 'employeeId',
    taxCode: 'taxCode',
    subtotal: 'subtotal',
    taxAmount: 'taxAmount',
    totalAmount: 'totalAmount',
    notes: 'notes'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: IntFilter<"Brand"> | number
    brandName?: StringFilter<"Brand"> | string
    brandUrl?: StringFilter<"Brand"> | string
    description?: StringFilter<"Brand"> | string
    brandAbbreviation?: StringFilter<"Brand"> | string
    product?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    brandName?: SortOrder
    brandUrl?: SortOrder
    description?: SortOrder
    brandAbbreviation?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    brandName?: string
    brandUrl?: string
    brandAbbreviation?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    description?: StringFilter<"Brand"> | string
    product?: ProductListRelationFilter
  }, "id" | "brandName" | "brandUrl" | "brandAbbreviation">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    brandName?: SortOrder
    brandUrl?: SortOrder
    description?: SortOrder
    brandAbbreviation?: SortOrder
    _count?: BrandCountOrderByAggregateInput
    _avg?: BrandAvgOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
    _sum?: BrandSumOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Brand"> | number
    brandName?: StringWithAggregatesFilter<"Brand"> | string
    brandUrl?: StringWithAggregatesFilter<"Brand"> | string
    description?: StringWithAggregatesFilter<"Brand"> | string
    brandAbbreviation?: StringWithAggregatesFilter<"Brand"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    productName?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    productLine?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    status?: BoolFilter<"Product"> | boolean
    productSpecs?: JsonFilter<"Product">
    brandId?: IntFilter<"Product"> | number
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    spuSkuMapping?: SpuSkuMappingListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    slug?: SortOrder
    productLine?: SortOrder
    description?: SortOrder
    status?: SortOrder
    productSpecs?: SortOrder
    brandId?: SortOrder
    brand?: BrandOrderByWithRelationInput
    spuSkuMapping?: SpuSkuMappingOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productName?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productLine?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    status?: BoolFilter<"Product"> | boolean
    productSpecs?: JsonFilter<"Product">
    brandId?: IntFilter<"Product"> | number
    brand?: XOR<BrandScalarRelationFilter, BrandWhereInput>
    spuSkuMapping?: SpuSkuMappingListRelationFilter
  }, "id" | "productName" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    slug?: SortOrder
    productLine?: SortOrder
    description?: SortOrder
    status?: SortOrder
    productSpecs?: SortOrder
    brandId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    productName?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    productLine?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    status?: BoolWithAggregatesFilter<"Product"> | boolean
    productSpecs?: JsonWithAggregatesFilter<"Product">
    brandId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type ProductSkuWhereInput = {
    AND?: ProductSkuWhereInput | ProductSkuWhereInput[]
    OR?: ProductSkuWhereInput[]
    NOT?: ProductSkuWhereInput | ProductSkuWhereInput[]
    id?: IntFilter<"ProductSku"> | number
    skuNo?: StringFilter<"ProductSku"> | string
    barcode?: StringFilter<"ProductSku"> | string
    skuName?: StringFilter<"ProductSku"> | string
    image?: StringFilter<"ProductSku"> | string
    status?: BoolFilter<"ProductSku"> | boolean
    skuAttributes?: JsonFilter<"ProductSku">
    slug?: StringFilter<"ProductSku"> | string
    spuSkuMapping?: SpuSkuMappingListRelationFilter
    price?: PriceListRelationFilter
    purchaseOrderDetail?: PurchaseOrderDetailListRelationFilter
    productSerial?: ProductSerialListRelationFilter
  }

  export type ProductSkuOrderByWithRelationInput = {
    id?: SortOrder
    skuNo?: SortOrder
    barcode?: SortOrder
    skuName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    skuAttributes?: SortOrder
    slug?: SortOrder
    spuSkuMapping?: SpuSkuMappingOrderByRelationAggregateInput
    price?: PriceOrderByRelationAggregateInput
    purchaseOrderDetail?: PurchaseOrderDetailOrderByRelationAggregateInput
    productSerial?: ProductSerialOrderByRelationAggregateInput
  }

  export type ProductSkuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    skuNo?: string
    slug?: string
    AND?: ProductSkuWhereInput | ProductSkuWhereInput[]
    OR?: ProductSkuWhereInput[]
    NOT?: ProductSkuWhereInput | ProductSkuWhereInput[]
    barcode?: StringFilter<"ProductSku"> | string
    skuName?: StringFilter<"ProductSku"> | string
    image?: StringFilter<"ProductSku"> | string
    status?: BoolFilter<"ProductSku"> | boolean
    skuAttributes?: JsonFilter<"ProductSku">
    spuSkuMapping?: SpuSkuMappingListRelationFilter
    price?: PriceListRelationFilter
    purchaseOrderDetail?: PurchaseOrderDetailListRelationFilter
    productSerial?: ProductSerialListRelationFilter
  }, "id" | "skuNo" | "slug">

  export type ProductSkuOrderByWithAggregationInput = {
    id?: SortOrder
    skuNo?: SortOrder
    barcode?: SortOrder
    skuName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    skuAttributes?: SortOrder
    slug?: SortOrder
    _count?: ProductSkuCountOrderByAggregateInput
    _avg?: ProductSkuAvgOrderByAggregateInput
    _max?: ProductSkuMaxOrderByAggregateInput
    _min?: ProductSkuMinOrderByAggregateInput
    _sum?: ProductSkuSumOrderByAggregateInput
  }

  export type ProductSkuScalarWhereWithAggregatesInput = {
    AND?: ProductSkuScalarWhereWithAggregatesInput | ProductSkuScalarWhereWithAggregatesInput[]
    OR?: ProductSkuScalarWhereWithAggregatesInput[]
    NOT?: ProductSkuScalarWhereWithAggregatesInput | ProductSkuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductSku"> | number
    skuNo?: StringWithAggregatesFilter<"ProductSku"> | string
    barcode?: StringWithAggregatesFilter<"ProductSku"> | string
    skuName?: StringWithAggregatesFilter<"ProductSku"> | string
    image?: StringWithAggregatesFilter<"ProductSku"> | string
    status?: BoolWithAggregatesFilter<"ProductSku"> | boolean
    skuAttributes?: JsonWithAggregatesFilter<"ProductSku">
    slug?: StringWithAggregatesFilter<"ProductSku"> | string
  }

  export type SpuSkuMappingWhereInput = {
    AND?: SpuSkuMappingWhereInput | SpuSkuMappingWhereInput[]
    OR?: SpuSkuMappingWhereInput[]
    NOT?: SpuSkuMappingWhereInput | SpuSkuMappingWhereInput[]
    id?: IntFilter<"SpuSkuMapping"> | number
    spuId?: IntFilter<"SpuSkuMapping"> | number
    skuId?: IntFilter<"SpuSkuMapping"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }

  export type SpuSkuMappingOrderByWithRelationInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
    product?: ProductOrderByWithRelationInput
    productSku?: ProductSkuOrderByWithRelationInput
  }

  export type SpuSkuMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    spuId_skuId?: SpuSkuMappingSpuIdSkuIdCompoundUniqueInput
    AND?: SpuSkuMappingWhereInput | SpuSkuMappingWhereInput[]
    OR?: SpuSkuMappingWhereInput[]
    NOT?: SpuSkuMappingWhereInput | SpuSkuMappingWhereInput[]
    spuId?: IntFilter<"SpuSkuMapping"> | number
    skuId?: IntFilter<"SpuSkuMapping"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }, "id" | "spuId_skuId">

  export type SpuSkuMappingOrderByWithAggregationInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
    _count?: SpuSkuMappingCountOrderByAggregateInput
    _avg?: SpuSkuMappingAvgOrderByAggregateInput
    _max?: SpuSkuMappingMaxOrderByAggregateInput
    _min?: SpuSkuMappingMinOrderByAggregateInput
    _sum?: SpuSkuMappingSumOrderByAggregateInput
  }

  export type SpuSkuMappingScalarWhereWithAggregatesInput = {
    AND?: SpuSkuMappingScalarWhereWithAggregatesInput | SpuSkuMappingScalarWhereWithAggregatesInput[]
    OR?: SpuSkuMappingScalarWhereWithAggregatesInput[]
    NOT?: SpuSkuMappingScalarWhereWithAggregatesInput | SpuSkuMappingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpuSkuMapping"> | number
    spuId?: IntWithAggregatesFilter<"SpuSkuMapping"> | number
    skuId?: IntWithAggregatesFilter<"SpuSkuMapping"> | number
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    productSkuId?: IntFilter<"Price"> | number
    beginAt?: DateTimeFilter<"Price"> | Date | string
    sellingPrice?: IntFilter<"Price"> | number
    displayPrice?: IntFilter<"Price"> | number
    createdAt?: DateTimeFilter<"Price"> | Date | string
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    productSkuId?: SortOrder
    beginAt?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
    createdAt?: SortOrder
    productSku?: ProductSkuOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    productSkuId_beginAt?: PriceProductSkuIdBeginAtCompoundUniqueInput
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    productSkuId?: IntFilter<"Price"> | number
    beginAt?: DateTimeFilter<"Price"> | Date | string
    sellingPrice?: IntFilter<"Price"> | number
    displayPrice?: IntFilter<"Price"> | number
    createdAt?: DateTimeFilter<"Price"> | Date | string
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }, "productSkuId_beginAt">

  export type PriceOrderByWithAggregationInput = {
    productSkuId?: SortOrder
    beginAt?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
    createdAt?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    productSkuId?: IntWithAggregatesFilter<"Price"> | number
    beginAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    sellingPrice?: IntWithAggregatesFilter<"Price"> | number
    displayPrice?: IntWithAggregatesFilter<"Price"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Price"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    purchaseOrder?: PurchaseOrderListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    purchaseOrder?: PurchaseOrderOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    address?: StringFilter<"Supplier"> | string
    phone?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    purchaseOrder?: PurchaseOrderListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
    address?: StringWithAggregatesFilter<"Supplier"> | string
    phone?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
  }

  export type PurchaseOrderWhereInput = {
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    orderNumber?: StringFilter<"PurchaseOrder"> | string
    supplierId?: IntFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    orderDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    employeeId?: StringFilter<"PurchaseOrder"> | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    purchaseOrderDetail?: PurchaseOrderDetailListRelationFilter
    warehouseReceipt?: XOR<WarehouseReceiptNullableScalarRelationFilter, WarehouseReceiptWhereInput> | null
  }

  export type PurchaseOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
    employeeId?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    purchaseOrderDetail?: PurchaseOrderDetailOrderByRelationAggregateInput
    warehouseReceipt?: WarehouseReceiptOrderByWithRelationInput
  }

  export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: string
    AND?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    OR?: PurchaseOrderWhereInput[]
    NOT?: PurchaseOrderWhereInput | PurchaseOrderWhereInput[]
    supplierId?: IntFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    orderDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    employeeId?: StringFilter<"PurchaseOrder"> | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    purchaseOrderDetail?: PurchaseOrderDetailListRelationFilter
    warehouseReceipt?: XOR<WarehouseReceiptNullableScalarRelationFilter, WarehouseReceiptWhereInput> | null
  }, "id" | "orderNumber">

  export type PurchaseOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
    employeeId?: SortOrder
    _count?: PurchaseOrderCountOrderByAggregateInput
    _avg?: PurchaseOrderAvgOrderByAggregateInput
    _max?: PurchaseOrderMaxOrderByAggregateInput
    _min?: PurchaseOrderMinOrderByAggregateInput
    _sum?: PurchaseOrderSumOrderByAggregateInput
  }

  export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderScalarWhereWithAggregatesInput | PurchaseOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    orderNumber?: StringWithAggregatesFilter<"PurchaseOrder"> | string
    supplierId?: IntWithAggregatesFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    orderDate?: DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string
    employeeId?: StringWithAggregatesFilter<"PurchaseOrder"> | string
  }

  export type PurchaseOrderDetailWhereInput = {
    AND?: PurchaseOrderDetailWhereInput | PurchaseOrderDetailWhereInput[]
    OR?: PurchaseOrderDetailWhereInput[]
    NOT?: PurchaseOrderDetailWhereInput | PurchaseOrderDetailWhereInput[]
    purchaseOrderId?: IntFilter<"PurchaseOrderDetail"> | number
    skuId?: IntFilter<"PurchaseOrderDetail"> | number
    quantity?: IntFilter<"PurchaseOrderDetail"> | number
    unitPrice?: IntFilter<"PurchaseOrderDetail"> | number
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    sku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }

  export type PurchaseOrderDetailOrderByWithRelationInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
    sku?: ProductSkuOrderByWithRelationInput
  }

  export type PurchaseOrderDetailWhereUniqueInput = Prisma.AtLeast<{
    purchaseOrderId_skuId?: PurchaseOrderDetailPurchaseOrderIdSkuIdCompoundUniqueInput
    AND?: PurchaseOrderDetailWhereInput | PurchaseOrderDetailWhereInput[]
    OR?: PurchaseOrderDetailWhereInput[]
    NOT?: PurchaseOrderDetailWhereInput | PurchaseOrderDetailWhereInput[]
    purchaseOrderId?: IntFilter<"PurchaseOrderDetail"> | number
    skuId?: IntFilter<"PurchaseOrderDetail"> | number
    quantity?: IntFilter<"PurchaseOrderDetail"> | number
    unitPrice?: IntFilter<"PurchaseOrderDetail"> | number
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    sku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
  }, "purchaseOrderId_skuId">

  export type PurchaseOrderDetailOrderByWithAggregationInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    _count?: PurchaseOrderDetailCountOrderByAggregateInput
    _avg?: PurchaseOrderDetailAvgOrderByAggregateInput
    _max?: PurchaseOrderDetailMaxOrderByAggregateInput
    _min?: PurchaseOrderDetailMinOrderByAggregateInput
    _sum?: PurchaseOrderDetailSumOrderByAggregateInput
  }

  export type PurchaseOrderDetailScalarWhereWithAggregatesInput = {
    AND?: PurchaseOrderDetailScalarWhereWithAggregatesInput | PurchaseOrderDetailScalarWhereWithAggregatesInput[]
    OR?: PurchaseOrderDetailScalarWhereWithAggregatesInput[]
    NOT?: PurchaseOrderDetailScalarWhereWithAggregatesInput | PurchaseOrderDetailScalarWhereWithAggregatesInput[]
    purchaseOrderId?: IntWithAggregatesFilter<"PurchaseOrderDetail"> | number
    skuId?: IntWithAggregatesFilter<"PurchaseOrderDetail"> | number
    quantity?: IntWithAggregatesFilter<"PurchaseOrderDetail"> | number
    unitPrice?: IntWithAggregatesFilter<"PurchaseOrderDetail"> | number
  }

  export type WarehouseReceiptWhereInput = {
    AND?: WarehouseReceiptWhereInput | WarehouseReceiptWhereInput[]
    OR?: WarehouseReceiptWhereInput[]
    NOT?: WarehouseReceiptWhereInput | WarehouseReceiptWhereInput[]
    id?: IntFilter<"WarehouseReceipt"> | number
    receiptNumber?: StringFilter<"WarehouseReceipt"> | string
    purchaseOrderId?: IntFilter<"WarehouseReceipt"> | number
    createdAt?: DateTimeNullableFilter<"WarehouseReceipt"> | Date | string | null
    receiptDate?: DateTimeNullableFilter<"WarehouseReceipt"> | Date | string | null
    employeeId?: StringFilter<"WarehouseReceipt"> | string
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    productSerial?: ProductSerialListRelationFilter
  }

  export type WarehouseReceiptOrderByWithRelationInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseOrderId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    receiptDate?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    purchaseOrder?: PurchaseOrderOrderByWithRelationInput
    productSerial?: ProductSerialOrderByRelationAggregateInput
  }

  export type WarehouseReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    receiptNumber?: string
    purchaseOrderId?: number
    AND?: WarehouseReceiptWhereInput | WarehouseReceiptWhereInput[]
    OR?: WarehouseReceiptWhereInput[]
    NOT?: WarehouseReceiptWhereInput | WarehouseReceiptWhereInput[]
    createdAt?: DateTimeNullableFilter<"WarehouseReceipt"> | Date | string | null
    receiptDate?: DateTimeNullableFilter<"WarehouseReceipt"> | Date | string | null
    employeeId?: StringFilter<"WarehouseReceipt"> | string
    purchaseOrder?: XOR<PurchaseOrderScalarRelationFilter, PurchaseOrderWhereInput>
    productSerial?: ProductSerialListRelationFilter
  }, "id" | "receiptNumber" | "purchaseOrderId">

  export type WarehouseReceiptOrderByWithAggregationInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseOrderId?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    receiptDate?: SortOrderInput | SortOrder
    employeeId?: SortOrder
    _count?: WarehouseReceiptCountOrderByAggregateInput
    _avg?: WarehouseReceiptAvgOrderByAggregateInput
    _max?: WarehouseReceiptMaxOrderByAggregateInput
    _min?: WarehouseReceiptMinOrderByAggregateInput
    _sum?: WarehouseReceiptSumOrderByAggregateInput
  }

  export type WarehouseReceiptScalarWhereWithAggregatesInput = {
    AND?: WarehouseReceiptScalarWhereWithAggregatesInput | WarehouseReceiptScalarWhereWithAggregatesInput[]
    OR?: WarehouseReceiptScalarWhereWithAggregatesInput[]
    NOT?: WarehouseReceiptScalarWhereWithAggregatesInput | WarehouseReceiptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WarehouseReceipt"> | number
    receiptNumber?: StringWithAggregatesFilter<"WarehouseReceipt"> | string
    purchaseOrderId?: IntWithAggregatesFilter<"WarehouseReceipt"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"WarehouseReceipt"> | Date | string | null
    receiptDate?: DateTimeNullableWithAggregatesFilter<"WarehouseReceipt"> | Date | string | null
    employeeId?: StringWithAggregatesFilter<"WarehouseReceipt"> | string
  }

  export type ProductSerialWhereInput = {
    AND?: ProductSerialWhereInput | ProductSerialWhereInput[]
    OR?: ProductSerialWhereInput[]
    NOT?: ProductSerialWhereInput | ProductSerialWhereInput[]
    id?: UuidFilter<"ProductSerial"> | string
    serialNumber?: StringFilter<"ProductSerial"> | string
    dateManufactured?: DateTimeFilter<"ProductSerial"> | Date | string
    productSkuId?: IntFilter<"ProductSerial"> | number
    warehouseReceiptId?: IntFilter<"ProductSerial"> | number
    status?: BoolFilter<"ProductSerial"> | boolean
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
    warehouseReceipt?: XOR<WarehouseReceiptScalarRelationFilter, WarehouseReceiptWhereInput>
    orderDetail?: OrderDetailListRelationFilter
  }

  export type ProductSerialOrderByWithRelationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    dateManufactured?: SortOrder
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
    status?: SortOrder
    productSku?: ProductSkuOrderByWithRelationInput
    warehouseReceipt?: WarehouseReceiptOrderByWithRelationInput
    orderDetail?: OrderDetailOrderByRelationAggregateInput
  }

  export type ProductSerialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serialNumber?: string
    AND?: ProductSerialWhereInput | ProductSerialWhereInput[]
    OR?: ProductSerialWhereInput[]
    NOT?: ProductSerialWhereInput | ProductSerialWhereInput[]
    dateManufactured?: DateTimeFilter<"ProductSerial"> | Date | string
    productSkuId?: IntFilter<"ProductSerial"> | number
    warehouseReceiptId?: IntFilter<"ProductSerial"> | number
    status?: BoolFilter<"ProductSerial"> | boolean
    productSku?: XOR<ProductSkuScalarRelationFilter, ProductSkuWhereInput>
    warehouseReceipt?: XOR<WarehouseReceiptScalarRelationFilter, WarehouseReceiptWhereInput>
    orderDetail?: OrderDetailListRelationFilter
  }, "id" | "serialNumber">

  export type ProductSerialOrderByWithAggregationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    dateManufactured?: SortOrder
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
    status?: SortOrder
    _count?: ProductSerialCountOrderByAggregateInput
    _avg?: ProductSerialAvgOrderByAggregateInput
    _max?: ProductSerialMaxOrderByAggregateInput
    _min?: ProductSerialMinOrderByAggregateInput
    _sum?: ProductSerialSumOrderByAggregateInput
  }

  export type ProductSerialScalarWhereWithAggregatesInput = {
    AND?: ProductSerialScalarWhereWithAggregatesInput | ProductSerialScalarWhereWithAggregatesInput[]
    OR?: ProductSerialScalarWhereWithAggregatesInput[]
    NOT?: ProductSerialScalarWhereWithAggregatesInput | ProductSerialScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductSerial"> | string
    serialNumber?: StringWithAggregatesFilter<"ProductSerial"> | string
    dateManufactured?: DateTimeWithAggregatesFilter<"ProductSerial"> | Date | string
    productSkuId?: IntWithAggregatesFilter<"ProductSerial"> | number
    warehouseReceiptId?: IntWithAggregatesFilter<"ProductSerial"> | number
    status?: BoolWithAggregatesFilter<"ProductSerial"> | boolean
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    employeeId?: StringNullableFilter<"Order"> | string | null
    firstName?: StringFilter<"Order"> | string
    lastName?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    contactPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    postcode?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    orderType?: BoolFilter<"Order"> | boolean
    shippingMethod?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    note?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    shippingFee?: IntFilter<"Order"> | number
    discount?: IntFilter<"Order"> | number
    orderDetail?: OrderDetailListRelationFilter
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    shippingAddress?: SortOrder
    postcode?: SortOrderInput | SortOrder
    status?: SortOrder
    orderType?: SortOrder
    shippingMethod?: SortOrder
    paymentMethod?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
    orderDetail?: OrderDetailOrderByRelationAggregateInput
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    employeeId?: StringNullableFilter<"Order"> | string | null
    firstName?: StringFilter<"Order"> | string
    lastName?: StringFilter<"Order"> | string
    email?: StringFilter<"Order"> | string
    contactPhone?: StringFilter<"Order"> | string
    shippingAddress?: StringFilter<"Order"> | string
    postcode?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    orderType?: BoolFilter<"Order"> | boolean
    shippingMethod?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    note?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    shippingFee?: IntFilter<"Order"> | number
    discount?: IntFilter<"Order"> | number
    orderDetail?: OrderDetailListRelationFilter
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    shippingAddress?: SortOrder
    postcode?: SortOrderInput | SortOrder
    status?: SortOrder
    orderType?: SortOrder
    shippingMethod?: SortOrder
    paymentMethod?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    employeeId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    firstName?: StringWithAggregatesFilter<"Order"> | string
    lastName?: StringWithAggregatesFilter<"Order"> | string
    email?: StringWithAggregatesFilter<"Order"> | string
    contactPhone?: StringWithAggregatesFilter<"Order"> | string
    shippingAddress?: StringWithAggregatesFilter<"Order"> | string
    postcode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: StringWithAggregatesFilter<"Order"> | string
    orderType?: BoolWithAggregatesFilter<"Order"> | boolean
    shippingMethod?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    note?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    shippingFee?: IntWithAggregatesFilter<"Order"> | number
    discount?: IntWithAggregatesFilter<"Order"> | number
  }

  export type OrderDetailWhereInput = {
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    orderId?: IntFilter<"OrderDetail"> | number
    productSerialId?: UuidFilter<"OrderDetail"> | string
    unitPrice?: IntFilter<"OrderDetail"> | number
    tax?: IntFilter<"OrderDetail"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    productSerial?: XOR<ProductSerialScalarRelationFilter, ProductSerialWhereInput>
  }

  export type OrderDetailOrderByWithRelationInput = {
    orderId?: SortOrder
    productSerialId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
    order?: OrderOrderByWithRelationInput
    productSerial?: ProductSerialOrderByWithRelationInput
  }

  export type OrderDetailWhereUniqueInput = Prisma.AtLeast<{
    orderId_productSerialId?: OrderDetailOrderIdProductSerialIdCompoundUniqueInput
    AND?: OrderDetailWhereInput | OrderDetailWhereInput[]
    OR?: OrderDetailWhereInput[]
    NOT?: OrderDetailWhereInput | OrderDetailWhereInput[]
    orderId?: IntFilter<"OrderDetail"> | number
    productSerialId?: UuidFilter<"OrderDetail"> | string
    unitPrice?: IntFilter<"OrderDetail"> | number
    tax?: IntFilter<"OrderDetail"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    productSerial?: XOR<ProductSerialScalarRelationFilter, ProductSerialWhereInput>
  }, "orderId_productSerialId">

  export type OrderDetailOrderByWithAggregationInput = {
    orderId?: SortOrder
    productSerialId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
    _count?: OrderDetailCountOrderByAggregateInput
    _avg?: OrderDetailAvgOrderByAggregateInput
    _max?: OrderDetailMaxOrderByAggregateInput
    _min?: OrderDetailMinOrderByAggregateInput
    _sum?: OrderDetailSumOrderByAggregateInput
  }

  export type OrderDetailScalarWhereWithAggregatesInput = {
    AND?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    OR?: OrderDetailScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailScalarWhereWithAggregatesInput | OrderDetailScalarWhereWithAggregatesInput[]
    orderId?: IntWithAggregatesFilter<"OrderDetail"> | number
    productSerialId?: UuidWithAggregatesFilter<"OrderDetail"> | string
    unitPrice?: IntWithAggregatesFilter<"OrderDetail"> | number
    tax?: IntWithAggregatesFilter<"OrderDetail"> | number
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    invoiceCode?: StringFilter<"Invoice"> | string
    orderId?: IntFilter<"Invoice"> | number
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    employeeId?: StringFilter<"Invoice"> | string
    taxCode?: StringFilter<"Invoice"> | string
    subtotal?: IntFilter<"Invoice"> | number
    taxAmount?: IntFilter<"Invoice"> | number
    totalAmount?: IntFilter<"Invoice"> | number
    notes?: StringNullableFilter<"Invoice"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    employeeId?: SortOrder
    taxCode?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceCode?: string
    orderId?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    employeeId?: StringFilter<"Invoice"> | string
    taxCode?: StringFilter<"Invoice"> | string
    subtotal?: IntFilter<"Invoice"> | number
    taxAmount?: IntFilter<"Invoice"> | number
    totalAmount?: IntFilter<"Invoice"> | number
    notes?: StringNullableFilter<"Invoice"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "invoiceCode" | "orderId">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    employeeId?: SortOrder
    taxCode?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    invoiceCode?: StringWithAggregatesFilter<"Invoice"> | string
    orderId?: IntWithAggregatesFilter<"Invoice"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    employeeId?: StringWithAggregatesFilter<"Invoice"> | string
    taxCode?: StringWithAggregatesFilter<"Invoice"> | string
    subtotal?: IntWithAggregatesFilter<"Invoice"> | number
    taxAmount?: IntWithAggregatesFilter<"Invoice"> | number
    totalAmount?: IntWithAggregatesFilter<"Invoice"> | number
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
  }

  export type BrandCreateInput = {
    brandName: string
    brandUrl: string
    description: string
    brandAbbreviation: string
    product?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id?: number
    brandName: string
    brandUrl: string
    description: string
    brandAbbreviation: string
    product?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    brandUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandAbbreviation?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    brandUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandAbbreviation?: StringFieldUpdateOperationsInput | string
    product?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id?: number
    brandName: string
    brandUrl: string
    description: string
    brandAbbreviation: string
  }

  export type BrandUpdateManyMutationInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    brandUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandAbbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    brandUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandAbbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    brand: BrandCreateNestedOneWithoutProductInput
    spuSkuMapping?: SpuSkuMappingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    brandId: number
    spuSkuMapping?: SpuSkuMappingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
    spuSkuMapping?: SpuSkuMappingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    brandId?: IntFieldUpdateOperationsInput | number
    spuSkuMapping?: SpuSkuMappingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    brandId: number
  }

  export type ProductUpdateManyMutationInput = {
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSkuCreateInput = {
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingCreateNestedManyWithoutProductSkuInput
    price?: PriceCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutSkuInput
    productSerial?: ProductSerialCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUncheckedCreateInput = {
    id?: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingUncheckedCreateNestedManyWithoutProductSkuInput
    price?: PriceUncheckedCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutSkuInput
    productSerial?: ProductSerialUncheckedCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUpdateInput = {
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUpdateManyWithoutProductSkuNestedInput
    price?: PriceUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutSkuNestedInput
    productSerial?: ProductSerialUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUncheckedUpdateManyWithoutProductSkuNestedInput
    price?: PriceUncheckedUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutSkuNestedInput
    productSerial?: ProductSerialUncheckedUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuCreateManyInput = {
    id?: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
  }

  export type ProductSkuUpdateManyMutationInput = {
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSkuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type SpuSkuMappingCreateInput = {
    product: ProductCreateNestedOneWithoutSpuSkuMappingInput
    productSku: ProductSkuCreateNestedOneWithoutSpuSkuMappingInput
  }

  export type SpuSkuMappingUncheckedCreateInput = {
    id?: number
    spuId: number
    skuId: number
  }

  export type SpuSkuMappingUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutSpuSkuMappingNestedInput
    productSku?: ProductSkuUpdateOneRequiredWithoutSpuSkuMappingNestedInput
  }

  export type SpuSkuMappingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spuId?: IntFieldUpdateOperationsInput | number
    skuId?: IntFieldUpdateOperationsInput | number
  }

  export type SpuSkuMappingCreateManyInput = {
    id?: number
    spuId: number
    skuId: number
  }

  export type SpuSkuMappingUpdateManyMutationInput = {

  }

  export type SpuSkuMappingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spuId?: IntFieldUpdateOperationsInput | number
    skuId?: IntFieldUpdateOperationsInput | number
  }

  export type PriceCreateInput = {
    beginAt: Date | string
    sellingPrice: number
    displayPrice: number
    createdAt?: Date | string
    productSku: ProductSkuCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    productSkuId: number
    beginAt: Date | string
    sellingPrice: number
    displayPrice: number
    createdAt?: Date | string
  }

  export type PriceUpdateInput = {
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productSku?: ProductSkuUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    productSkuId?: IntFieldUpdateOperationsInput | number
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyInput = {
    productSkuId: number
    beginAt: Date | string
    sellingPrice: number
    displayPrice: number
    createdAt?: Date | string
  }

  export type PriceUpdateManyMutationInput = {
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyInput = {
    productSkuId?: IntFieldUpdateOperationsInput | number
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    name: string
    address: string
    phone: string
    email: string
    purchaseOrder?: PurchaseOrderCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    purchaseOrder?: PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purchaseOrder?: PurchaseOrderUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    purchaseOrder?: PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrderCreateInput = {
    orderNumber: string
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    supplier: SupplierCreateNestedOneWithoutPurchaseOrderInput
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutPurchaseOrderInput
    warehouseReceipt?: WarehouseReceiptCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateInput = {
    id?: number
    orderNumber: string
    supplierId: number
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutPurchaseOrderInput
    warehouseReceipt?: WarehouseReceiptUncheckedCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUpdateInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutPurchaseOrderNestedInput
    warehouseReceipt?: WarehouseReceiptUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutPurchaseOrderNestedInput
    warehouseReceipt?: WarehouseReceiptUncheckedUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderCreateManyInput = {
    id?: number
    orderNumber: string
    supplierId: number
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
  }

  export type PurchaseOrderUpdateManyMutationInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrderDetailCreateInput = {
    quantity: number
    unitPrice: number
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutPurchaseOrderDetailInput
    sku: ProductSkuCreateNestedOneWithoutPurchaseOrderDetailInput
  }

  export type PurchaseOrderDetailUncheckedCreateInput = {
    purchaseOrderId: number
    skuId: number
    quantity: number
    unitPrice: number
  }

  export type PurchaseOrderDetailUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderDetailNestedInput
    sku?: ProductSkuUpdateOneRequiredWithoutPurchaseOrderDetailNestedInput
  }

  export type PurchaseOrderDetailUncheckedUpdateInput = {
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    skuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderDetailCreateManyInput = {
    purchaseOrderId: number
    skuId: number
    quantity: number
    unitPrice: number
  }

  export type PurchaseOrderDetailUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderDetailUncheckedUpdateManyInput = {
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    skuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseReceiptCreateInput = {
    receiptNumber: string
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutWarehouseReceiptInput
    productSerial?: ProductSerialCreateNestedManyWithoutWarehouseReceiptInput
  }

  export type WarehouseReceiptUncheckedCreateInput = {
    id?: number
    receiptNumber: string
    purchaseOrderId: number
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
    productSerial?: ProductSerialUncheckedCreateNestedManyWithoutWarehouseReceiptInput
  }

  export type WarehouseReceiptUpdateInput = {
    receiptNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutWarehouseReceiptNestedInput
    productSerial?: ProductSerialUpdateManyWithoutWarehouseReceiptNestedInput
  }

  export type WarehouseReceiptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    productSerial?: ProductSerialUncheckedUpdateManyWithoutWarehouseReceiptNestedInput
  }

  export type WarehouseReceiptCreateManyInput = {
    id?: number
    receiptNumber: string
    purchaseOrderId: number
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
  }

  export type WarehouseReceiptUpdateManyMutationInput = {
    receiptNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseReceiptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductSerialCreateInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    status?: boolean
    productSku: ProductSkuCreateNestedOneWithoutProductSerialInput
    warehouseReceipt: WarehouseReceiptCreateNestedOneWithoutProductSerialInput
    orderDetail?: OrderDetailCreateNestedManyWithoutProductSerialInput
  }

  export type ProductSerialUncheckedCreateInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    productSkuId: number
    warehouseReceiptId: number
    status?: boolean
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductSerialInput
  }

  export type ProductSerialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSku?: ProductSkuUpdateOneRequiredWithoutProductSerialNestedInput
    warehouseReceipt?: WarehouseReceiptUpdateOneRequiredWithoutProductSerialNestedInput
    orderDetail?: OrderDetailUpdateManyWithoutProductSerialNestedInput
  }

  export type ProductSerialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    productSkuId?: IntFieldUpdateOperationsInput | number
    warehouseReceiptId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductSerialNestedInput
  }

  export type ProductSerialCreateManyInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    productSkuId: number
    warehouseReceiptId: number
    status?: boolean
  }

  export type ProductSerialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductSerialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    productSkuId?: IntFieldUpdateOperationsInput | number
    warehouseReceiptId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderCreateInput = {
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
    orderDetail?: OrderDetailCreateNestedManyWithoutOrderInput
    invoice?: InvoiceCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
    invoice?: InvoiceUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput
    invoice?: InvoiceUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
    invoice?: InvoiceUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
  }

  export type OrderUpdateManyMutationInput = {
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailCreateInput = {
    unitPrice?: number
    tax?: number
    order: OrderCreateNestedOneWithoutOrderDetailInput
    productSerial: ProductSerialCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateInput = {
    orderId: number
    productSerialId: string
    unitPrice?: number
    tax?: number
  }

  export type OrderDetailUpdateInput = {
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput
    productSerial?: ProductSerialUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    productSerialId?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailCreateManyInput = {
    orderId: number
    productSerialId: string
    unitPrice?: number
    tax?: number
  }

  export type OrderDetailUpdateManyMutationInput = {
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailUncheckedUpdateManyInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    productSerialId?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }

  export type InvoiceCreateInput = {
    invoiceCode: string
    createdAt?: Date | string
    employeeId: string
    taxCode: string
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes?: string | null
    order: OrderCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    invoiceCode: string
    orderId: number
    createdAt?: Date | string
    employeeId: string
    taxCode: string
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes?: string | null
  }

  export type InvoiceUpdateInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceCreateManyInput = {
    id?: number
    invoiceCode: string
    orderId: number
    createdAt?: Date | string
    employeeId: string
    taxCode: string
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes?: string | null
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    brandUrl?: SortOrder
    description?: SortOrder
    brandAbbreviation?: SortOrder
  }

  export type BrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    brandUrl?: SortOrder
    description?: SortOrder
    brandAbbreviation?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    brandName?: SortOrder
    brandUrl?: SortOrder
    description?: SortOrder
    brandAbbreviation?: SortOrder
  }

  export type BrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BrandScalarRelationFilter = {
    is?: BrandWhereInput
    isNot?: BrandWhereInput
  }

  export type SpuSkuMappingListRelationFilter = {
    every?: SpuSkuMappingWhereInput
    some?: SpuSkuMappingWhereInput
    none?: SpuSkuMappingWhereInput
  }

  export type SpuSkuMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    slug?: SortOrder
    productLine?: SortOrder
    description?: SortOrder
    status?: SortOrder
    productSpecs?: SortOrder
    brandId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    slug?: SortOrder
    productLine?: SortOrder
    description?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    slug?: SortOrder
    productLine?: SortOrder
    description?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type PurchaseOrderDetailListRelationFilter = {
    every?: PurchaseOrderDetailWhereInput
    some?: PurchaseOrderDetailWhereInput
    none?: PurchaseOrderDetailWhereInput
  }

  export type ProductSerialListRelationFilter = {
    every?: ProductSerialWhereInput
    some?: ProductSerialWhereInput
    none?: ProductSerialWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSerialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSkuCountOrderByAggregateInput = {
    id?: SortOrder
    skuNo?: SortOrder
    barcode?: SortOrder
    skuName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    skuAttributes?: SortOrder
    slug?: SortOrder
  }

  export type ProductSkuAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductSkuMaxOrderByAggregateInput = {
    id?: SortOrder
    skuNo?: SortOrder
    barcode?: SortOrder
    skuName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    slug?: SortOrder
  }

  export type ProductSkuMinOrderByAggregateInput = {
    id?: SortOrder
    skuNo?: SortOrder
    barcode?: SortOrder
    skuName?: SortOrder
    image?: SortOrder
    status?: SortOrder
    slug?: SortOrder
  }

  export type ProductSkuSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductSkuScalarRelationFilter = {
    is?: ProductSkuWhereInput
    isNot?: ProductSkuWhereInput
  }

  export type SpuSkuMappingSpuIdSkuIdCompoundUniqueInput = {
    spuId: number
    skuId: number
  }

  export type SpuSkuMappingCountOrderByAggregateInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
  }

  export type SpuSkuMappingAvgOrderByAggregateInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
  }

  export type SpuSkuMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
  }

  export type SpuSkuMappingMinOrderByAggregateInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
  }

  export type SpuSkuMappingSumOrderByAggregateInput = {
    id?: SortOrder
    spuId?: SortOrder
    skuId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PriceProductSkuIdBeginAtCompoundUniqueInput = {
    productSkuId: number
    beginAt: Date | string
  }

  export type PriceCountOrderByAggregateInput = {
    productSkuId?: SortOrder
    beginAt?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    productSkuId?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    productSkuId?: SortOrder
    beginAt?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    productSkuId?: SortOrder
    beginAt?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    productSkuId?: SortOrder
    sellingPrice?: SortOrder
    displayPrice?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PurchaseOrderListRelationFilter = {
    every?: PurchaseOrderWhereInput
    some?: PurchaseOrderWhereInput
    none?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type WarehouseReceiptNullableScalarRelationFilter = {
    is?: WarehouseReceiptWhereInput | null
    isNot?: WarehouseReceiptWhereInput | null
  }

  export type PurchaseOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
    employeeId?: SortOrder
  }

  export type PurchaseOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
    employeeId?: SortOrder
  }

  export type PurchaseOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    supplierId?: SortOrder
    createdAt?: SortOrder
    orderDate?: SortOrder
    employeeId?: SortOrder
  }

  export type PurchaseOrderSumOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
  }

  export type PurchaseOrderScalarRelationFilter = {
    is?: PurchaseOrderWhereInput
    isNot?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderDetailPurchaseOrderIdSkuIdCompoundUniqueInput = {
    purchaseOrderId: number
    skuId: number
  }

  export type PurchaseOrderDetailCountOrderByAggregateInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseOrderDetailAvgOrderByAggregateInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseOrderDetailMaxOrderByAggregateInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseOrderDetailMinOrderByAggregateInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type PurchaseOrderDetailSumOrderByAggregateInput = {
    purchaseOrderId?: SortOrder
    skuId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WarehouseReceiptCountOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseOrderId?: SortOrder
    createdAt?: SortOrder
    receiptDate?: SortOrder
    employeeId?: SortOrder
  }

  export type WarehouseReceiptAvgOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
  }

  export type WarehouseReceiptMaxOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseOrderId?: SortOrder
    createdAt?: SortOrder
    receiptDate?: SortOrder
    employeeId?: SortOrder
  }

  export type WarehouseReceiptMinOrderByAggregateInput = {
    id?: SortOrder
    receiptNumber?: SortOrder
    purchaseOrderId?: SortOrder
    createdAt?: SortOrder
    receiptDate?: SortOrder
    employeeId?: SortOrder
  }

  export type WarehouseReceiptSumOrderByAggregateInput = {
    id?: SortOrder
    purchaseOrderId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type WarehouseReceiptScalarRelationFilter = {
    is?: WarehouseReceiptWhereInput
    isNot?: WarehouseReceiptWhereInput
  }

  export type OrderDetailListRelationFilter = {
    every?: OrderDetailWhereInput
    some?: OrderDetailWhereInput
    none?: OrderDetailWhereInput
  }

  export type OrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductSerialCountOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    dateManufactured?: SortOrder
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
    status?: SortOrder
  }

  export type ProductSerialAvgOrderByAggregateInput = {
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
  }

  export type ProductSerialMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    dateManufactured?: SortOrder
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
    status?: SortOrder
  }

  export type ProductSerialMinOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    dateManufactured?: SortOrder
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
    status?: SortOrder
  }

  export type ProductSerialSumOrderByAggregateInput = {
    productSkuId?: SortOrder
    warehouseReceiptId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    shippingAddress?: SortOrder
    postcode?: SortOrder
    status?: SortOrder
    orderType?: SortOrder
    shippingMethod?: SortOrder
    paymentMethod?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    shippingAddress?: SortOrder
    postcode?: SortOrder
    status?: SortOrder
    orderType?: SortOrder
    shippingMethod?: SortOrder
    paymentMethod?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    shippingAddress?: SortOrder
    postcode?: SortOrder
    status?: SortOrder
    orderType?: SortOrder
    shippingMethod?: SortOrder
    paymentMethod?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    shippingFee?: SortOrder
    discount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductSerialScalarRelationFilter = {
    is?: ProductSerialWhereInput
    isNot?: ProductSerialWhereInput
  }

  export type OrderDetailOrderIdProductSerialIdCompoundUniqueInput = {
    orderId: number
    productSerialId: string
  }

  export type OrderDetailCountOrderByAggregateInput = {
    orderId?: SortOrder
    productSerialId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
  }

  export type OrderDetailAvgOrderByAggregateInput = {
    orderId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
  }

  export type OrderDetailMaxOrderByAggregateInput = {
    orderId?: SortOrder
    productSerialId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
  }

  export type OrderDetailMinOrderByAggregateInput = {
    orderId?: SortOrder
    productSerialId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
  }

  export type OrderDetailSumOrderByAggregateInput = {
    orderId?: SortOrder
    unitPrice?: SortOrder
    tax?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    employeeId?: SortOrder
    taxCode?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    employeeId?: SortOrder
    taxCode?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceCode?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    employeeId?: SortOrder
    taxCode?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    subtotal?: SortOrder
    taxAmount?: SortOrder
    totalAmount?: SortOrder
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BrandCreateNestedOneWithoutProductInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    connect?: BrandWhereUniqueInput
  }

  export type SpuSkuMappingCreateNestedManyWithoutProductInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductInput, SpuSkuMappingUncheckedCreateWithoutProductInput> | SpuSkuMappingCreateWithoutProductInput[] | SpuSkuMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductInput | SpuSkuMappingCreateOrConnectWithoutProductInput[]
    createMany?: SpuSkuMappingCreateManyProductInputEnvelope
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
  }

  export type SpuSkuMappingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductInput, SpuSkuMappingUncheckedCreateWithoutProductInput> | SpuSkuMappingCreateWithoutProductInput[] | SpuSkuMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductInput | SpuSkuMappingCreateOrConnectWithoutProductInput[]
    createMany?: SpuSkuMappingCreateManyProductInputEnvelope
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BrandUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductInput
    upsert?: BrandUpsertWithoutProductInput
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductInput, BrandUpdateWithoutProductInput>, BrandUncheckedUpdateWithoutProductInput>
  }

  export type SpuSkuMappingUpdateManyWithoutProductNestedInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductInput, SpuSkuMappingUncheckedCreateWithoutProductInput> | SpuSkuMappingCreateWithoutProductInput[] | SpuSkuMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductInput | SpuSkuMappingCreateOrConnectWithoutProductInput[]
    upsert?: SpuSkuMappingUpsertWithWhereUniqueWithoutProductInput | SpuSkuMappingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SpuSkuMappingCreateManyProductInputEnvelope
    set?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    disconnect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    delete?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    update?: SpuSkuMappingUpdateWithWhereUniqueWithoutProductInput | SpuSkuMappingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SpuSkuMappingUpdateManyWithWhereWithoutProductInput | SpuSkuMappingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SpuSkuMappingScalarWhereInput | SpuSkuMappingScalarWhereInput[]
  }

  export type SpuSkuMappingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductInput, SpuSkuMappingUncheckedCreateWithoutProductInput> | SpuSkuMappingCreateWithoutProductInput[] | SpuSkuMappingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductInput | SpuSkuMappingCreateOrConnectWithoutProductInput[]
    upsert?: SpuSkuMappingUpsertWithWhereUniqueWithoutProductInput | SpuSkuMappingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SpuSkuMappingCreateManyProductInputEnvelope
    set?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    disconnect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    delete?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    update?: SpuSkuMappingUpdateWithWhereUniqueWithoutProductInput | SpuSkuMappingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SpuSkuMappingUpdateManyWithWhereWithoutProductInput | SpuSkuMappingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SpuSkuMappingScalarWhereInput | SpuSkuMappingScalarWhereInput[]
  }

  export type SpuSkuMappingCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductSkuInput, SpuSkuMappingUncheckedCreateWithoutProductSkuInput> | SpuSkuMappingCreateWithoutProductSkuInput[] | SpuSkuMappingUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductSkuInput | SpuSkuMappingCreateOrConnectWithoutProductSkuInput[]
    createMany?: SpuSkuMappingCreateManyProductSkuInputEnvelope
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
  }

  export type PriceCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<PriceCreateWithoutProductSkuInput, PriceUncheckedCreateWithoutProductSkuInput> | PriceCreateWithoutProductSkuInput[] | PriceUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductSkuInput | PriceCreateOrConnectWithoutProductSkuInput[]
    createMany?: PriceCreateManyProductSkuInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PurchaseOrderDetailCreateNestedManyWithoutSkuInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutSkuInput, PurchaseOrderDetailUncheckedCreateWithoutSkuInput> | PurchaseOrderDetailCreateWithoutSkuInput[] | PurchaseOrderDetailUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutSkuInput | PurchaseOrderDetailCreateOrConnectWithoutSkuInput[]
    createMany?: PurchaseOrderDetailCreateManySkuInputEnvelope
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
  }

  export type ProductSerialCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<ProductSerialCreateWithoutProductSkuInput, ProductSerialUncheckedCreateWithoutProductSkuInput> | ProductSerialCreateWithoutProductSkuInput[] | ProductSerialUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutProductSkuInput | ProductSerialCreateOrConnectWithoutProductSkuInput[]
    createMany?: ProductSerialCreateManyProductSkuInputEnvelope
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
  }

  export type SpuSkuMappingUncheckedCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductSkuInput, SpuSkuMappingUncheckedCreateWithoutProductSkuInput> | SpuSkuMappingCreateWithoutProductSkuInput[] | SpuSkuMappingUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductSkuInput | SpuSkuMappingCreateOrConnectWithoutProductSkuInput[]
    createMany?: SpuSkuMappingCreateManyProductSkuInputEnvelope
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<PriceCreateWithoutProductSkuInput, PriceUncheckedCreateWithoutProductSkuInput> | PriceCreateWithoutProductSkuInput[] | PriceUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductSkuInput | PriceCreateOrConnectWithoutProductSkuInput[]
    createMany?: PriceCreateManyProductSkuInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PurchaseOrderDetailUncheckedCreateNestedManyWithoutSkuInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutSkuInput, PurchaseOrderDetailUncheckedCreateWithoutSkuInput> | PurchaseOrderDetailCreateWithoutSkuInput[] | PurchaseOrderDetailUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutSkuInput | PurchaseOrderDetailCreateOrConnectWithoutSkuInput[]
    createMany?: PurchaseOrderDetailCreateManySkuInputEnvelope
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
  }

  export type ProductSerialUncheckedCreateNestedManyWithoutProductSkuInput = {
    create?: XOR<ProductSerialCreateWithoutProductSkuInput, ProductSerialUncheckedCreateWithoutProductSkuInput> | ProductSerialCreateWithoutProductSkuInput[] | ProductSerialUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutProductSkuInput | ProductSerialCreateOrConnectWithoutProductSkuInput[]
    createMany?: ProductSerialCreateManyProductSkuInputEnvelope
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
  }

  export type SpuSkuMappingUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductSkuInput, SpuSkuMappingUncheckedCreateWithoutProductSkuInput> | SpuSkuMappingCreateWithoutProductSkuInput[] | SpuSkuMappingUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductSkuInput | SpuSkuMappingCreateOrConnectWithoutProductSkuInput[]
    upsert?: SpuSkuMappingUpsertWithWhereUniqueWithoutProductSkuInput | SpuSkuMappingUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: SpuSkuMappingCreateManyProductSkuInputEnvelope
    set?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    disconnect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    delete?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    update?: SpuSkuMappingUpdateWithWhereUniqueWithoutProductSkuInput | SpuSkuMappingUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: SpuSkuMappingUpdateManyWithWhereWithoutProductSkuInput | SpuSkuMappingUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: SpuSkuMappingScalarWhereInput | SpuSkuMappingScalarWhereInput[]
  }

  export type PriceUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<PriceCreateWithoutProductSkuInput, PriceUncheckedCreateWithoutProductSkuInput> | PriceCreateWithoutProductSkuInput[] | PriceUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductSkuInput | PriceCreateOrConnectWithoutProductSkuInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductSkuInput | PriceUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: PriceCreateManyProductSkuInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductSkuInput | PriceUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductSkuInput | PriceUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PurchaseOrderDetailUpdateManyWithoutSkuNestedInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutSkuInput, PurchaseOrderDetailUncheckedCreateWithoutSkuInput> | PurchaseOrderDetailCreateWithoutSkuInput[] | PurchaseOrderDetailUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutSkuInput | PurchaseOrderDetailCreateOrConnectWithoutSkuInput[]
    upsert?: PurchaseOrderDetailUpsertWithWhereUniqueWithoutSkuInput | PurchaseOrderDetailUpsertWithWhereUniqueWithoutSkuInput[]
    createMany?: PurchaseOrderDetailCreateManySkuInputEnvelope
    set?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    disconnect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    delete?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    update?: PurchaseOrderDetailUpdateWithWhereUniqueWithoutSkuInput | PurchaseOrderDetailUpdateWithWhereUniqueWithoutSkuInput[]
    updateMany?: PurchaseOrderDetailUpdateManyWithWhereWithoutSkuInput | PurchaseOrderDetailUpdateManyWithWhereWithoutSkuInput[]
    deleteMany?: PurchaseOrderDetailScalarWhereInput | PurchaseOrderDetailScalarWhereInput[]
  }

  export type ProductSerialUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<ProductSerialCreateWithoutProductSkuInput, ProductSerialUncheckedCreateWithoutProductSkuInput> | ProductSerialCreateWithoutProductSkuInput[] | ProductSerialUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutProductSkuInput | ProductSerialCreateOrConnectWithoutProductSkuInput[]
    upsert?: ProductSerialUpsertWithWhereUniqueWithoutProductSkuInput | ProductSerialUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: ProductSerialCreateManyProductSkuInputEnvelope
    set?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    disconnect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    delete?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    update?: ProductSerialUpdateWithWhereUniqueWithoutProductSkuInput | ProductSerialUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: ProductSerialUpdateManyWithWhereWithoutProductSkuInput | ProductSerialUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: ProductSerialScalarWhereInput | ProductSerialScalarWhereInput[]
  }

  export type SpuSkuMappingUncheckedUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<SpuSkuMappingCreateWithoutProductSkuInput, SpuSkuMappingUncheckedCreateWithoutProductSkuInput> | SpuSkuMappingCreateWithoutProductSkuInput[] | SpuSkuMappingUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: SpuSkuMappingCreateOrConnectWithoutProductSkuInput | SpuSkuMappingCreateOrConnectWithoutProductSkuInput[]
    upsert?: SpuSkuMappingUpsertWithWhereUniqueWithoutProductSkuInput | SpuSkuMappingUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: SpuSkuMappingCreateManyProductSkuInputEnvelope
    set?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    disconnect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    delete?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    connect?: SpuSkuMappingWhereUniqueInput | SpuSkuMappingWhereUniqueInput[]
    update?: SpuSkuMappingUpdateWithWhereUniqueWithoutProductSkuInput | SpuSkuMappingUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: SpuSkuMappingUpdateManyWithWhereWithoutProductSkuInput | SpuSkuMappingUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: SpuSkuMappingScalarWhereInput | SpuSkuMappingScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<PriceCreateWithoutProductSkuInput, PriceUncheckedCreateWithoutProductSkuInput> | PriceCreateWithoutProductSkuInput[] | PriceUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductSkuInput | PriceCreateOrConnectWithoutProductSkuInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductSkuInput | PriceUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: PriceCreateManyProductSkuInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductSkuInput | PriceUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductSkuInput | PriceUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PurchaseOrderDetailUncheckedUpdateManyWithoutSkuNestedInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutSkuInput, PurchaseOrderDetailUncheckedCreateWithoutSkuInput> | PurchaseOrderDetailCreateWithoutSkuInput[] | PurchaseOrderDetailUncheckedCreateWithoutSkuInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutSkuInput | PurchaseOrderDetailCreateOrConnectWithoutSkuInput[]
    upsert?: PurchaseOrderDetailUpsertWithWhereUniqueWithoutSkuInput | PurchaseOrderDetailUpsertWithWhereUniqueWithoutSkuInput[]
    createMany?: PurchaseOrderDetailCreateManySkuInputEnvelope
    set?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    disconnect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    delete?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    update?: PurchaseOrderDetailUpdateWithWhereUniqueWithoutSkuInput | PurchaseOrderDetailUpdateWithWhereUniqueWithoutSkuInput[]
    updateMany?: PurchaseOrderDetailUpdateManyWithWhereWithoutSkuInput | PurchaseOrderDetailUpdateManyWithWhereWithoutSkuInput[]
    deleteMany?: PurchaseOrderDetailScalarWhereInput | PurchaseOrderDetailScalarWhereInput[]
  }

  export type ProductSerialUncheckedUpdateManyWithoutProductSkuNestedInput = {
    create?: XOR<ProductSerialCreateWithoutProductSkuInput, ProductSerialUncheckedCreateWithoutProductSkuInput> | ProductSerialCreateWithoutProductSkuInput[] | ProductSerialUncheckedCreateWithoutProductSkuInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutProductSkuInput | ProductSerialCreateOrConnectWithoutProductSkuInput[]
    upsert?: ProductSerialUpsertWithWhereUniqueWithoutProductSkuInput | ProductSerialUpsertWithWhereUniqueWithoutProductSkuInput[]
    createMany?: ProductSerialCreateManyProductSkuInputEnvelope
    set?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    disconnect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    delete?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    update?: ProductSerialUpdateWithWhereUniqueWithoutProductSkuInput | ProductSerialUpdateWithWhereUniqueWithoutProductSkuInput[]
    updateMany?: ProductSerialUpdateManyWithWhereWithoutProductSkuInput | ProductSerialUpdateManyWithWhereWithoutProductSkuInput[]
    deleteMany?: ProductSerialScalarWhereInput | ProductSerialScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSpuSkuMappingInput = {
    create?: XOR<ProductCreateWithoutSpuSkuMappingInput, ProductUncheckedCreateWithoutSpuSkuMappingInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSpuSkuMappingInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSkuCreateNestedOneWithoutSpuSkuMappingInput = {
    create?: XOR<ProductSkuCreateWithoutSpuSkuMappingInput, ProductSkuUncheckedCreateWithoutSpuSkuMappingInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutSpuSkuMappingInput
    connect?: ProductSkuWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSpuSkuMappingNestedInput = {
    create?: XOR<ProductCreateWithoutSpuSkuMappingInput, ProductUncheckedCreateWithoutSpuSkuMappingInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSpuSkuMappingInput
    upsert?: ProductUpsertWithoutSpuSkuMappingInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSpuSkuMappingInput, ProductUpdateWithoutSpuSkuMappingInput>, ProductUncheckedUpdateWithoutSpuSkuMappingInput>
  }

  export type ProductSkuUpdateOneRequiredWithoutSpuSkuMappingNestedInput = {
    create?: XOR<ProductSkuCreateWithoutSpuSkuMappingInput, ProductSkuUncheckedCreateWithoutSpuSkuMappingInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutSpuSkuMappingInput
    upsert?: ProductSkuUpsertWithoutSpuSkuMappingInput
    connect?: ProductSkuWhereUniqueInput
    update?: XOR<XOR<ProductSkuUpdateToOneWithWhereWithoutSpuSkuMappingInput, ProductSkuUpdateWithoutSpuSkuMappingInput>, ProductSkuUncheckedUpdateWithoutSpuSkuMappingInput>
  }

  export type ProductSkuCreateNestedOneWithoutPriceInput = {
    create?: XOR<ProductSkuCreateWithoutPriceInput, ProductSkuUncheckedCreateWithoutPriceInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutPriceInput
    connect?: ProductSkuWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductSkuUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<ProductSkuCreateWithoutPriceInput, ProductSkuUncheckedCreateWithoutPriceInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutPriceInput
    upsert?: ProductSkuUpsertWithoutPriceInput
    connect?: ProductSkuWhereUniqueInput
    update?: XOR<XOR<ProductSkuUpdateToOneWithWhereWithoutPriceInput, ProductSkuUpdateWithoutPriceInput>, ProductSkuUncheckedUpdateWithoutPriceInput>
  }

  export type PurchaseOrderCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
  }

  export type PurchaseOrderUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput> | PurchaseOrderCreateWithoutSupplierInput[] | PurchaseOrderUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutSupplierInput | PurchaseOrderCreateOrConnectWithoutSupplierInput[]
    upsert?: PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: PurchaseOrderCreateManySupplierInputEnvelope
    set?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    disconnect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    delete?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    connect?: PurchaseOrderWhereUniqueInput | PurchaseOrderWhereUniqueInput[]
    update?: PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchaseOrderInput
    connect?: SupplierWhereUniqueInput
  }

  export type PurchaseOrderDetailCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderDetailCreateWithoutPurchaseOrderInput[] | PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderDetailCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
  }

  export type WarehouseReceiptCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<WarehouseReceiptCreateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: WarehouseReceiptCreateOrConnectWithoutPurchaseOrderInput
    connect?: WarehouseReceiptWhereUniqueInput
  }

  export type PurchaseOrderDetailUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderDetailCreateWithoutPurchaseOrderInput[] | PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderDetailCreateManyPurchaseOrderInputEnvelope
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
  }

  export type WarehouseReceiptUncheckedCreateNestedOneWithoutPurchaseOrderInput = {
    create?: XOR<WarehouseReceiptCreateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: WarehouseReceiptCreateOrConnectWithoutPurchaseOrderInput
    connect?: WarehouseReceiptWhereUniqueInput
  }

  export type SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput = {
    create?: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutPurchaseOrderInput
    upsert?: SupplierUpsertWithoutPurchaseOrderInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutPurchaseOrderInput, SupplierUpdateWithoutPurchaseOrderInput>, SupplierUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderDetailUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderDetailCreateWithoutPurchaseOrderInput[] | PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderDetailUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderDetailUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderDetailCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    disconnect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    delete?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    update?: PurchaseOrderDetailUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderDetailUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderDetailUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderDetailUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderDetailScalarWhereInput | PurchaseOrderDetailScalarWhereInput[]
  }

  export type WarehouseReceiptUpdateOneWithoutPurchaseOrderNestedInput = {
    create?: XOR<WarehouseReceiptCreateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: WarehouseReceiptCreateOrConnectWithoutPurchaseOrderInput
    upsert?: WarehouseReceiptUpsertWithoutPurchaseOrderInput
    disconnect?: WarehouseReceiptWhereInput | boolean
    delete?: WarehouseReceiptWhereInput | boolean
    connect?: WarehouseReceiptWhereUniqueInput
    update?: XOR<XOR<WarehouseReceiptUpdateToOneWithWhereWithoutPurchaseOrderInput, WarehouseReceiptUpdateWithoutPurchaseOrderInput>, WarehouseReceiptUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderDetailUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: XOR<PurchaseOrderDetailCreateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput> | PurchaseOrderDetailCreateWithoutPurchaseOrderInput[] | PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput[]
    connectOrCreate?: PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput | PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput[]
    upsert?: PurchaseOrderDetailUpsertWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderDetailUpsertWithWhereUniqueWithoutPurchaseOrderInput[]
    createMany?: PurchaseOrderDetailCreateManyPurchaseOrderInputEnvelope
    set?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    disconnect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    delete?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    connect?: PurchaseOrderDetailWhereUniqueInput | PurchaseOrderDetailWhereUniqueInput[]
    update?: PurchaseOrderDetailUpdateWithWhereUniqueWithoutPurchaseOrderInput | PurchaseOrderDetailUpdateWithWhereUniqueWithoutPurchaseOrderInput[]
    updateMany?: PurchaseOrderDetailUpdateManyWithWhereWithoutPurchaseOrderInput | PurchaseOrderDetailUpdateManyWithWhereWithoutPurchaseOrderInput[]
    deleteMany?: PurchaseOrderDetailScalarWhereInput | PurchaseOrderDetailScalarWhereInput[]
  }

  export type WarehouseReceiptUncheckedUpdateOneWithoutPurchaseOrderNestedInput = {
    create?: XOR<WarehouseReceiptCreateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput>
    connectOrCreate?: WarehouseReceiptCreateOrConnectWithoutPurchaseOrderInput
    upsert?: WarehouseReceiptUpsertWithoutPurchaseOrderInput
    disconnect?: WarehouseReceiptWhereInput | boolean
    delete?: WarehouseReceiptWhereInput | boolean
    connect?: WarehouseReceiptWhereUniqueInput
    update?: XOR<XOR<WarehouseReceiptUpdateToOneWithWhereWithoutPurchaseOrderInput, WarehouseReceiptUpdateWithoutPurchaseOrderInput>, WarehouseReceiptUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderCreateNestedOneWithoutPurchaseOrderDetailInput = {
    create?: XOR<PurchaseOrderCreateWithoutPurchaseOrderDetailInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderDetailInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPurchaseOrderDetailInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type ProductSkuCreateNestedOneWithoutPurchaseOrderDetailInput = {
    create?: XOR<ProductSkuCreateWithoutPurchaseOrderDetailInput, ProductSkuUncheckedCreateWithoutPurchaseOrderDetailInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutPurchaseOrderDetailInput
    connect?: ProductSkuWhereUniqueInput
  }

  export type PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderDetailNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutPurchaseOrderDetailInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderDetailInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutPurchaseOrderDetailInput
    upsert?: PurchaseOrderUpsertWithoutPurchaseOrderDetailInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutPurchaseOrderDetailInput, PurchaseOrderUpdateWithoutPurchaseOrderDetailInput>, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderDetailInput>
  }

  export type ProductSkuUpdateOneRequiredWithoutPurchaseOrderDetailNestedInput = {
    create?: XOR<ProductSkuCreateWithoutPurchaseOrderDetailInput, ProductSkuUncheckedCreateWithoutPurchaseOrderDetailInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutPurchaseOrderDetailInput
    upsert?: ProductSkuUpsertWithoutPurchaseOrderDetailInput
    connect?: ProductSkuWhereUniqueInput
    update?: XOR<XOR<ProductSkuUpdateToOneWithWhereWithoutPurchaseOrderDetailInput, ProductSkuUpdateWithoutPurchaseOrderDetailInput>, ProductSkuUncheckedUpdateWithoutPurchaseOrderDetailInput>
  }

  export type PurchaseOrderCreateNestedOneWithoutWarehouseReceiptInput = {
    create?: XOR<PurchaseOrderCreateWithoutWarehouseReceiptInput, PurchaseOrderUncheckedCreateWithoutWarehouseReceiptInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutWarehouseReceiptInput
    connect?: PurchaseOrderWhereUniqueInput
  }

  export type ProductSerialCreateNestedManyWithoutWarehouseReceiptInput = {
    create?: XOR<ProductSerialCreateWithoutWarehouseReceiptInput, ProductSerialUncheckedCreateWithoutWarehouseReceiptInput> | ProductSerialCreateWithoutWarehouseReceiptInput[] | ProductSerialUncheckedCreateWithoutWarehouseReceiptInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutWarehouseReceiptInput | ProductSerialCreateOrConnectWithoutWarehouseReceiptInput[]
    createMany?: ProductSerialCreateManyWarehouseReceiptInputEnvelope
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
  }

  export type ProductSerialUncheckedCreateNestedManyWithoutWarehouseReceiptInput = {
    create?: XOR<ProductSerialCreateWithoutWarehouseReceiptInput, ProductSerialUncheckedCreateWithoutWarehouseReceiptInput> | ProductSerialCreateWithoutWarehouseReceiptInput[] | ProductSerialUncheckedCreateWithoutWarehouseReceiptInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutWarehouseReceiptInput | ProductSerialCreateOrConnectWithoutWarehouseReceiptInput[]
    createMany?: ProductSerialCreateManyWarehouseReceiptInputEnvelope
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PurchaseOrderUpdateOneRequiredWithoutWarehouseReceiptNestedInput = {
    create?: XOR<PurchaseOrderCreateWithoutWarehouseReceiptInput, PurchaseOrderUncheckedCreateWithoutWarehouseReceiptInput>
    connectOrCreate?: PurchaseOrderCreateOrConnectWithoutWarehouseReceiptInput
    upsert?: PurchaseOrderUpsertWithoutWarehouseReceiptInput
    connect?: PurchaseOrderWhereUniqueInput
    update?: XOR<XOR<PurchaseOrderUpdateToOneWithWhereWithoutWarehouseReceiptInput, PurchaseOrderUpdateWithoutWarehouseReceiptInput>, PurchaseOrderUncheckedUpdateWithoutWarehouseReceiptInput>
  }

  export type ProductSerialUpdateManyWithoutWarehouseReceiptNestedInput = {
    create?: XOR<ProductSerialCreateWithoutWarehouseReceiptInput, ProductSerialUncheckedCreateWithoutWarehouseReceiptInput> | ProductSerialCreateWithoutWarehouseReceiptInput[] | ProductSerialUncheckedCreateWithoutWarehouseReceiptInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutWarehouseReceiptInput | ProductSerialCreateOrConnectWithoutWarehouseReceiptInput[]
    upsert?: ProductSerialUpsertWithWhereUniqueWithoutWarehouseReceiptInput | ProductSerialUpsertWithWhereUniqueWithoutWarehouseReceiptInput[]
    createMany?: ProductSerialCreateManyWarehouseReceiptInputEnvelope
    set?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    disconnect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    delete?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    update?: ProductSerialUpdateWithWhereUniqueWithoutWarehouseReceiptInput | ProductSerialUpdateWithWhereUniqueWithoutWarehouseReceiptInput[]
    updateMany?: ProductSerialUpdateManyWithWhereWithoutWarehouseReceiptInput | ProductSerialUpdateManyWithWhereWithoutWarehouseReceiptInput[]
    deleteMany?: ProductSerialScalarWhereInput | ProductSerialScalarWhereInput[]
  }

  export type ProductSerialUncheckedUpdateManyWithoutWarehouseReceiptNestedInput = {
    create?: XOR<ProductSerialCreateWithoutWarehouseReceiptInput, ProductSerialUncheckedCreateWithoutWarehouseReceiptInput> | ProductSerialCreateWithoutWarehouseReceiptInput[] | ProductSerialUncheckedCreateWithoutWarehouseReceiptInput[]
    connectOrCreate?: ProductSerialCreateOrConnectWithoutWarehouseReceiptInput | ProductSerialCreateOrConnectWithoutWarehouseReceiptInput[]
    upsert?: ProductSerialUpsertWithWhereUniqueWithoutWarehouseReceiptInput | ProductSerialUpsertWithWhereUniqueWithoutWarehouseReceiptInput[]
    createMany?: ProductSerialCreateManyWarehouseReceiptInputEnvelope
    set?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    disconnect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    delete?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    connect?: ProductSerialWhereUniqueInput | ProductSerialWhereUniqueInput[]
    update?: ProductSerialUpdateWithWhereUniqueWithoutWarehouseReceiptInput | ProductSerialUpdateWithWhereUniqueWithoutWarehouseReceiptInput[]
    updateMany?: ProductSerialUpdateManyWithWhereWithoutWarehouseReceiptInput | ProductSerialUpdateManyWithWhereWithoutWarehouseReceiptInput[]
    deleteMany?: ProductSerialScalarWhereInput | ProductSerialScalarWhereInput[]
  }

  export type ProductSkuCreateNestedOneWithoutProductSerialInput = {
    create?: XOR<ProductSkuCreateWithoutProductSerialInput, ProductSkuUncheckedCreateWithoutProductSerialInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutProductSerialInput
    connect?: ProductSkuWhereUniqueInput
  }

  export type WarehouseReceiptCreateNestedOneWithoutProductSerialInput = {
    create?: XOR<WarehouseReceiptCreateWithoutProductSerialInput, WarehouseReceiptUncheckedCreateWithoutProductSerialInput>
    connectOrCreate?: WarehouseReceiptCreateOrConnectWithoutProductSerialInput
    connect?: WarehouseReceiptWhereUniqueInput
  }

  export type OrderDetailCreateNestedManyWithoutProductSerialInput = {
    create?: XOR<OrderDetailCreateWithoutProductSerialInput, OrderDetailUncheckedCreateWithoutProductSerialInput> | OrderDetailCreateWithoutProductSerialInput[] | OrderDetailUncheckedCreateWithoutProductSerialInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductSerialInput | OrderDetailCreateOrConnectWithoutProductSerialInput[]
    createMany?: OrderDetailCreateManyProductSerialInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutProductSerialInput = {
    create?: XOR<OrderDetailCreateWithoutProductSerialInput, OrderDetailUncheckedCreateWithoutProductSerialInput> | OrderDetailCreateWithoutProductSerialInput[] | OrderDetailUncheckedCreateWithoutProductSerialInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductSerialInput | OrderDetailCreateOrConnectWithoutProductSerialInput[]
    createMany?: OrderDetailCreateManyProductSerialInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type ProductSkuUpdateOneRequiredWithoutProductSerialNestedInput = {
    create?: XOR<ProductSkuCreateWithoutProductSerialInput, ProductSkuUncheckedCreateWithoutProductSerialInput>
    connectOrCreate?: ProductSkuCreateOrConnectWithoutProductSerialInput
    upsert?: ProductSkuUpsertWithoutProductSerialInput
    connect?: ProductSkuWhereUniqueInput
    update?: XOR<XOR<ProductSkuUpdateToOneWithWhereWithoutProductSerialInput, ProductSkuUpdateWithoutProductSerialInput>, ProductSkuUncheckedUpdateWithoutProductSerialInput>
  }

  export type WarehouseReceiptUpdateOneRequiredWithoutProductSerialNestedInput = {
    create?: XOR<WarehouseReceiptCreateWithoutProductSerialInput, WarehouseReceiptUncheckedCreateWithoutProductSerialInput>
    connectOrCreate?: WarehouseReceiptCreateOrConnectWithoutProductSerialInput
    upsert?: WarehouseReceiptUpsertWithoutProductSerialInput
    connect?: WarehouseReceiptWhereUniqueInput
    update?: XOR<XOR<WarehouseReceiptUpdateToOneWithWhereWithoutProductSerialInput, WarehouseReceiptUpdateWithoutProductSerialInput>, WarehouseReceiptUncheckedUpdateWithoutProductSerialInput>
  }

  export type OrderDetailUpdateManyWithoutProductSerialNestedInput = {
    create?: XOR<OrderDetailCreateWithoutProductSerialInput, OrderDetailUncheckedCreateWithoutProductSerialInput> | OrderDetailCreateWithoutProductSerialInput[] | OrderDetailUncheckedCreateWithoutProductSerialInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductSerialInput | OrderDetailCreateOrConnectWithoutProductSerialInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutProductSerialInput | OrderDetailUpsertWithWhereUniqueWithoutProductSerialInput[]
    createMany?: OrderDetailCreateManyProductSerialInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutProductSerialInput | OrderDetailUpdateWithWhereUniqueWithoutProductSerialInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutProductSerialInput | OrderDetailUpdateManyWithWhereWithoutProductSerialInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type OrderDetailUncheckedUpdateManyWithoutProductSerialNestedInput = {
    create?: XOR<OrderDetailCreateWithoutProductSerialInput, OrderDetailUncheckedCreateWithoutProductSerialInput> | OrderDetailCreateWithoutProductSerialInput[] | OrderDetailUncheckedCreateWithoutProductSerialInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutProductSerialInput | OrderDetailCreateOrConnectWithoutProductSerialInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutProductSerialInput | OrderDetailUpsertWithWhereUniqueWithoutProductSerialInput[]
    createMany?: OrderDetailCreateManyProductSerialInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutProductSerialInput | OrderDetailUpdateWithWhereUniqueWithoutProductSerialInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutProductSerialInput | OrderDetailUpdateManyWithWhereWithoutProductSerialInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type OrderDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type InvoiceCreateNestedOneWithoutOrderInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput
    connect?: InvoiceWhereUniqueInput
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput
    connect?: InvoiceWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput | OrderDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type InvoiceUpdateOneWithoutOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput
    upsert?: InvoiceUpsertWithoutOrderInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutOrderInput, InvoiceUpdateWithoutOrderInput>, InvoiceUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput> | OrderDetailCreateWithoutOrderInput[] | OrderDetailUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput | OrderDetailCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput | OrderDetailUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    disconnect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    delete?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    connect?: OrderDetailWhereUniqueInput | OrderDetailWhereUniqueInput[]
    update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput | OrderDetailUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput | OrderDetailUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutOrderInput
    upsert?: InvoiceUpsertWithoutOrderInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutOrderInput, InvoiceUpdateWithoutOrderInput>, InvoiceUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductSerialCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<ProductSerialCreateWithoutOrderDetailInput, ProductSerialUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: ProductSerialCreateOrConnectWithoutOrderDetailInput
    connect?: ProductSerialWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailInput
    upsert?: OrderUpsertWithoutOrderDetailInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderDetailInput, OrderUpdateWithoutOrderDetailInput>, OrderUncheckedUpdateWithoutOrderDetailInput>
  }

  export type ProductSerialUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<ProductSerialCreateWithoutOrderDetailInput, ProductSerialUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: ProductSerialCreateOrConnectWithoutOrderDetailInput
    upsert?: ProductSerialUpsertWithoutOrderDetailInput
    connect?: ProductSerialWhereUniqueInput
    update?: XOR<XOR<ProductSerialUpdateToOneWithWhereWithoutOrderDetailInput, ProductSerialUpdateWithoutOrderDetailInput>, ProductSerialUncheckedUpdateWithoutOrderDetailInput>
  }

  export type OrderCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<OrderCreateWithoutInvoiceInput, OrderUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: OrderCreateOrConnectWithoutInvoiceInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<OrderCreateWithoutInvoiceInput, OrderUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: OrderCreateOrConnectWithoutInvoiceInput
    upsert?: OrderUpsertWithoutInvoiceInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutInvoiceInput, OrderUpdateWithoutInvoiceInput>, OrderUncheckedUpdateWithoutInvoiceInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductCreateWithoutBrandInput = {
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    spuSkuMapping?: SpuSkuMappingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id?: number
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    spuSkuMapping?: SpuSkuMappingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    productName?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    productLine?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    status?: BoolFilter<"Product"> | boolean
    productSpecs?: JsonFilter<"Product">
    brandId?: IntFilter<"Product"> | number
  }

  export type BrandCreateWithoutProductInput = {
    brandName: string
    brandUrl: string
    description: string
    brandAbbreviation: string
  }

  export type BrandUncheckedCreateWithoutProductInput = {
    id?: number
    brandName: string
    brandUrl: string
    description: string
    brandAbbreviation: string
  }

  export type BrandCreateOrConnectWithoutProductInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
  }

  export type SpuSkuMappingCreateWithoutProductInput = {
    productSku: ProductSkuCreateNestedOneWithoutSpuSkuMappingInput
  }

  export type SpuSkuMappingUncheckedCreateWithoutProductInput = {
    id?: number
    skuId: number
  }

  export type SpuSkuMappingCreateOrConnectWithoutProductInput = {
    where: SpuSkuMappingWhereUniqueInput
    create: XOR<SpuSkuMappingCreateWithoutProductInput, SpuSkuMappingUncheckedCreateWithoutProductInput>
  }

  export type SpuSkuMappingCreateManyProductInputEnvelope = {
    data: SpuSkuMappingCreateManyProductInput | SpuSkuMappingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BrandUpsertWithoutProductInput = {
    update: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
    create: XOR<BrandCreateWithoutProductInput, BrandUncheckedCreateWithoutProductInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductInput, BrandUncheckedUpdateWithoutProductInput>
  }

  export type BrandUpdateWithoutProductInput = {
    brandName?: StringFieldUpdateOperationsInput | string
    brandUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandAbbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type BrandUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandName?: StringFieldUpdateOperationsInput | string
    brandUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brandAbbreviation?: StringFieldUpdateOperationsInput | string
  }

  export type SpuSkuMappingUpsertWithWhereUniqueWithoutProductInput = {
    where: SpuSkuMappingWhereUniqueInput
    update: XOR<SpuSkuMappingUpdateWithoutProductInput, SpuSkuMappingUncheckedUpdateWithoutProductInput>
    create: XOR<SpuSkuMappingCreateWithoutProductInput, SpuSkuMappingUncheckedCreateWithoutProductInput>
  }

  export type SpuSkuMappingUpdateWithWhereUniqueWithoutProductInput = {
    where: SpuSkuMappingWhereUniqueInput
    data: XOR<SpuSkuMappingUpdateWithoutProductInput, SpuSkuMappingUncheckedUpdateWithoutProductInput>
  }

  export type SpuSkuMappingUpdateManyWithWhereWithoutProductInput = {
    where: SpuSkuMappingScalarWhereInput
    data: XOR<SpuSkuMappingUpdateManyMutationInput, SpuSkuMappingUncheckedUpdateManyWithoutProductInput>
  }

  export type SpuSkuMappingScalarWhereInput = {
    AND?: SpuSkuMappingScalarWhereInput | SpuSkuMappingScalarWhereInput[]
    OR?: SpuSkuMappingScalarWhereInput[]
    NOT?: SpuSkuMappingScalarWhereInput | SpuSkuMappingScalarWhereInput[]
    id?: IntFilter<"SpuSkuMapping"> | number
    spuId?: IntFilter<"SpuSkuMapping"> | number
    skuId?: IntFilter<"SpuSkuMapping"> | number
  }

  export type SpuSkuMappingCreateWithoutProductSkuInput = {
    product: ProductCreateNestedOneWithoutSpuSkuMappingInput
  }

  export type SpuSkuMappingUncheckedCreateWithoutProductSkuInput = {
    id?: number
    spuId: number
  }

  export type SpuSkuMappingCreateOrConnectWithoutProductSkuInput = {
    where: SpuSkuMappingWhereUniqueInput
    create: XOR<SpuSkuMappingCreateWithoutProductSkuInput, SpuSkuMappingUncheckedCreateWithoutProductSkuInput>
  }

  export type SpuSkuMappingCreateManyProductSkuInputEnvelope = {
    data: SpuSkuMappingCreateManyProductSkuInput | SpuSkuMappingCreateManyProductSkuInput[]
    skipDuplicates?: boolean
  }

  export type PriceCreateWithoutProductSkuInput = {
    beginAt: Date | string
    sellingPrice: number
    displayPrice: number
    createdAt?: Date | string
  }

  export type PriceUncheckedCreateWithoutProductSkuInput = {
    beginAt: Date | string
    sellingPrice: number
    displayPrice: number
    createdAt?: Date | string
  }

  export type PriceCreateOrConnectWithoutProductSkuInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutProductSkuInput, PriceUncheckedCreateWithoutProductSkuInput>
  }

  export type PriceCreateManyProductSkuInputEnvelope = {
    data: PriceCreateManyProductSkuInput | PriceCreateManyProductSkuInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderDetailCreateWithoutSkuInput = {
    quantity: number
    unitPrice: number
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutPurchaseOrderDetailInput
  }

  export type PurchaseOrderDetailUncheckedCreateWithoutSkuInput = {
    purchaseOrderId: number
    quantity: number
    unitPrice: number
  }

  export type PurchaseOrderDetailCreateOrConnectWithoutSkuInput = {
    where: PurchaseOrderDetailWhereUniqueInput
    create: XOR<PurchaseOrderDetailCreateWithoutSkuInput, PurchaseOrderDetailUncheckedCreateWithoutSkuInput>
  }

  export type PurchaseOrderDetailCreateManySkuInputEnvelope = {
    data: PurchaseOrderDetailCreateManySkuInput | PurchaseOrderDetailCreateManySkuInput[]
    skipDuplicates?: boolean
  }

  export type ProductSerialCreateWithoutProductSkuInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    status?: boolean
    warehouseReceipt: WarehouseReceiptCreateNestedOneWithoutProductSerialInput
    orderDetail?: OrderDetailCreateNestedManyWithoutProductSerialInput
  }

  export type ProductSerialUncheckedCreateWithoutProductSkuInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    warehouseReceiptId: number
    status?: boolean
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductSerialInput
  }

  export type ProductSerialCreateOrConnectWithoutProductSkuInput = {
    where: ProductSerialWhereUniqueInput
    create: XOR<ProductSerialCreateWithoutProductSkuInput, ProductSerialUncheckedCreateWithoutProductSkuInput>
  }

  export type ProductSerialCreateManyProductSkuInputEnvelope = {
    data: ProductSerialCreateManyProductSkuInput | ProductSerialCreateManyProductSkuInput[]
    skipDuplicates?: boolean
  }

  export type SpuSkuMappingUpsertWithWhereUniqueWithoutProductSkuInput = {
    where: SpuSkuMappingWhereUniqueInput
    update: XOR<SpuSkuMappingUpdateWithoutProductSkuInput, SpuSkuMappingUncheckedUpdateWithoutProductSkuInput>
    create: XOR<SpuSkuMappingCreateWithoutProductSkuInput, SpuSkuMappingUncheckedCreateWithoutProductSkuInput>
  }

  export type SpuSkuMappingUpdateWithWhereUniqueWithoutProductSkuInput = {
    where: SpuSkuMappingWhereUniqueInput
    data: XOR<SpuSkuMappingUpdateWithoutProductSkuInput, SpuSkuMappingUncheckedUpdateWithoutProductSkuInput>
  }

  export type SpuSkuMappingUpdateManyWithWhereWithoutProductSkuInput = {
    where: SpuSkuMappingScalarWhereInput
    data: XOR<SpuSkuMappingUpdateManyMutationInput, SpuSkuMappingUncheckedUpdateManyWithoutProductSkuInput>
  }

  export type PriceUpsertWithWhereUniqueWithoutProductSkuInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutProductSkuInput, PriceUncheckedUpdateWithoutProductSkuInput>
    create: XOR<PriceCreateWithoutProductSkuInput, PriceUncheckedCreateWithoutProductSkuInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutProductSkuInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutProductSkuInput, PriceUncheckedUpdateWithoutProductSkuInput>
  }

  export type PriceUpdateManyWithWhereWithoutProductSkuInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutProductSkuInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    productSkuId?: IntFilter<"Price"> | number
    beginAt?: DateTimeFilter<"Price"> | Date | string
    sellingPrice?: IntFilter<"Price"> | number
    displayPrice?: IntFilter<"Price"> | number
    createdAt?: DateTimeFilter<"Price"> | Date | string
  }

  export type PurchaseOrderDetailUpsertWithWhereUniqueWithoutSkuInput = {
    where: PurchaseOrderDetailWhereUniqueInput
    update: XOR<PurchaseOrderDetailUpdateWithoutSkuInput, PurchaseOrderDetailUncheckedUpdateWithoutSkuInput>
    create: XOR<PurchaseOrderDetailCreateWithoutSkuInput, PurchaseOrderDetailUncheckedCreateWithoutSkuInput>
  }

  export type PurchaseOrderDetailUpdateWithWhereUniqueWithoutSkuInput = {
    where: PurchaseOrderDetailWhereUniqueInput
    data: XOR<PurchaseOrderDetailUpdateWithoutSkuInput, PurchaseOrderDetailUncheckedUpdateWithoutSkuInput>
  }

  export type PurchaseOrderDetailUpdateManyWithWhereWithoutSkuInput = {
    where: PurchaseOrderDetailScalarWhereInput
    data: XOR<PurchaseOrderDetailUpdateManyMutationInput, PurchaseOrderDetailUncheckedUpdateManyWithoutSkuInput>
  }

  export type PurchaseOrderDetailScalarWhereInput = {
    AND?: PurchaseOrderDetailScalarWhereInput | PurchaseOrderDetailScalarWhereInput[]
    OR?: PurchaseOrderDetailScalarWhereInput[]
    NOT?: PurchaseOrderDetailScalarWhereInput | PurchaseOrderDetailScalarWhereInput[]
    purchaseOrderId?: IntFilter<"PurchaseOrderDetail"> | number
    skuId?: IntFilter<"PurchaseOrderDetail"> | number
    quantity?: IntFilter<"PurchaseOrderDetail"> | number
    unitPrice?: IntFilter<"PurchaseOrderDetail"> | number
  }

  export type ProductSerialUpsertWithWhereUniqueWithoutProductSkuInput = {
    where: ProductSerialWhereUniqueInput
    update: XOR<ProductSerialUpdateWithoutProductSkuInput, ProductSerialUncheckedUpdateWithoutProductSkuInput>
    create: XOR<ProductSerialCreateWithoutProductSkuInput, ProductSerialUncheckedCreateWithoutProductSkuInput>
  }

  export type ProductSerialUpdateWithWhereUniqueWithoutProductSkuInput = {
    where: ProductSerialWhereUniqueInput
    data: XOR<ProductSerialUpdateWithoutProductSkuInput, ProductSerialUncheckedUpdateWithoutProductSkuInput>
  }

  export type ProductSerialUpdateManyWithWhereWithoutProductSkuInput = {
    where: ProductSerialScalarWhereInput
    data: XOR<ProductSerialUpdateManyMutationInput, ProductSerialUncheckedUpdateManyWithoutProductSkuInput>
  }

  export type ProductSerialScalarWhereInput = {
    AND?: ProductSerialScalarWhereInput | ProductSerialScalarWhereInput[]
    OR?: ProductSerialScalarWhereInput[]
    NOT?: ProductSerialScalarWhereInput | ProductSerialScalarWhereInput[]
    id?: UuidFilter<"ProductSerial"> | string
    serialNumber?: StringFilter<"ProductSerial"> | string
    dateManufactured?: DateTimeFilter<"ProductSerial"> | Date | string
    productSkuId?: IntFilter<"ProductSerial"> | number
    warehouseReceiptId?: IntFilter<"ProductSerial"> | number
    status?: BoolFilter<"ProductSerial"> | boolean
  }

  export type ProductCreateWithoutSpuSkuMappingInput = {
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    brand: BrandCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSpuSkuMappingInput = {
    id?: number
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
    brandId: number
  }

  export type ProductCreateOrConnectWithoutSpuSkuMappingInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSpuSkuMappingInput, ProductUncheckedCreateWithoutSpuSkuMappingInput>
  }

  export type ProductSkuCreateWithoutSpuSkuMappingInput = {
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    price?: PriceCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutSkuInput
    productSerial?: ProductSerialCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUncheckedCreateWithoutSpuSkuMappingInput = {
    id?: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    price?: PriceUncheckedCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutSkuInput
    productSerial?: ProductSerialUncheckedCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuCreateOrConnectWithoutSpuSkuMappingInput = {
    where: ProductSkuWhereUniqueInput
    create: XOR<ProductSkuCreateWithoutSpuSkuMappingInput, ProductSkuUncheckedCreateWithoutSpuSkuMappingInput>
  }

  export type ProductUpsertWithoutSpuSkuMappingInput = {
    update: XOR<ProductUpdateWithoutSpuSkuMappingInput, ProductUncheckedUpdateWithoutSpuSkuMappingInput>
    create: XOR<ProductCreateWithoutSpuSkuMappingInput, ProductUncheckedCreateWithoutSpuSkuMappingInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSpuSkuMappingInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSpuSkuMappingInput, ProductUncheckedUpdateWithoutSpuSkuMappingInput>
  }

  export type ProductUpdateWithoutSpuSkuMappingInput = {
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    brand?: BrandUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSpuSkuMappingInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    brandId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSkuUpsertWithoutSpuSkuMappingInput = {
    update: XOR<ProductSkuUpdateWithoutSpuSkuMappingInput, ProductSkuUncheckedUpdateWithoutSpuSkuMappingInput>
    create: XOR<ProductSkuCreateWithoutSpuSkuMappingInput, ProductSkuUncheckedCreateWithoutSpuSkuMappingInput>
    where?: ProductSkuWhereInput
  }

  export type ProductSkuUpdateToOneWithWhereWithoutSpuSkuMappingInput = {
    where?: ProductSkuWhereInput
    data: XOR<ProductSkuUpdateWithoutSpuSkuMappingInput, ProductSkuUncheckedUpdateWithoutSpuSkuMappingInput>
  }

  export type ProductSkuUpdateWithoutSpuSkuMappingInput = {
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    price?: PriceUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutSkuNestedInput
    productSerial?: ProductSerialUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateWithoutSpuSkuMappingInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    price?: PriceUncheckedUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutSkuNestedInput
    productSerial?: ProductSerialUncheckedUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuCreateWithoutPriceInput = {
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutSkuInput
    productSerial?: ProductSerialCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUncheckedCreateWithoutPriceInput = {
    id?: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingUncheckedCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutSkuInput
    productSerial?: ProductSerialUncheckedCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuCreateOrConnectWithoutPriceInput = {
    where: ProductSkuWhereUniqueInput
    create: XOR<ProductSkuCreateWithoutPriceInput, ProductSkuUncheckedCreateWithoutPriceInput>
  }

  export type ProductSkuUpsertWithoutPriceInput = {
    update: XOR<ProductSkuUpdateWithoutPriceInput, ProductSkuUncheckedUpdateWithoutPriceInput>
    create: XOR<ProductSkuCreateWithoutPriceInput, ProductSkuUncheckedCreateWithoutPriceInput>
    where?: ProductSkuWhereInput
  }

  export type ProductSkuUpdateToOneWithWhereWithoutPriceInput = {
    where?: ProductSkuWhereInput
    data: XOR<ProductSkuUpdateWithoutPriceInput, ProductSkuUncheckedUpdateWithoutPriceInput>
  }

  export type ProductSkuUpdateWithoutPriceInput = {
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutSkuNestedInput
    productSerial?: ProductSerialUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUncheckedUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutSkuNestedInput
    productSerial?: ProductSerialUncheckedUpdateManyWithoutProductSkuNestedInput
  }

  export type PurchaseOrderCreateWithoutSupplierInput = {
    orderNumber: string
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutPurchaseOrderInput
    warehouseReceipt?: WarehouseReceiptCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutSupplierInput = {
    id?: number
    orderNumber: string
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutPurchaseOrderInput
    warehouseReceipt?: WarehouseReceiptUncheckedCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseOrderCreateManySupplierInputEnvelope = {
    data: PurchaseOrderCreateManySupplierInput | PurchaseOrderCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    update: XOR<PurchaseOrderUpdateWithoutSupplierInput, PurchaseOrderUncheckedUpdateWithoutSupplierInput>
    create: XOR<PurchaseOrderCreateWithoutSupplierInput, PurchaseOrderUncheckedCreateWithoutSupplierInput>
  }

  export type PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: PurchaseOrderWhereUniqueInput
    data: XOR<PurchaseOrderUpdateWithoutSupplierInput, PurchaseOrderUncheckedUpdateWithoutSupplierInput>
  }

  export type PurchaseOrderUpdateManyWithWhereWithoutSupplierInput = {
    where: PurchaseOrderScalarWhereInput
    data: XOR<PurchaseOrderUpdateManyMutationInput, PurchaseOrderUncheckedUpdateManyWithoutSupplierInput>
  }

  export type PurchaseOrderScalarWhereInput = {
    AND?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    OR?: PurchaseOrderScalarWhereInput[]
    NOT?: PurchaseOrderScalarWhereInput | PurchaseOrderScalarWhereInput[]
    id?: IntFilter<"PurchaseOrder"> | number
    orderNumber?: StringFilter<"PurchaseOrder"> | string
    supplierId?: IntFilter<"PurchaseOrder"> | number
    createdAt?: DateTimeFilter<"PurchaseOrder"> | Date | string
    orderDate?: DateTimeFilter<"PurchaseOrder"> | Date | string
    employeeId?: StringFilter<"PurchaseOrder"> | string
  }

  export type SupplierCreateWithoutPurchaseOrderInput = {
    name: string
    address: string
    phone: string
    email: string
  }

  export type SupplierUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
  }

  export type SupplierCreateOrConnectWithoutPurchaseOrderInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderDetailCreateWithoutPurchaseOrderInput = {
    quantity: number
    unitPrice: number
    sku: ProductSkuCreateNestedOneWithoutPurchaseOrderDetailInput
  }

  export type PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput = {
    skuId: number
    quantity: number
    unitPrice: number
  }

  export type PurchaseOrderDetailCreateOrConnectWithoutPurchaseOrderInput = {
    where: PurchaseOrderDetailWhereUniqueInput
    create: XOR<PurchaseOrderDetailCreateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderDetailCreateManyPurchaseOrderInputEnvelope = {
    data: PurchaseOrderDetailCreateManyPurchaseOrderInput | PurchaseOrderDetailCreateManyPurchaseOrderInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseReceiptCreateWithoutPurchaseOrderInput = {
    receiptNumber: string
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
    productSerial?: ProductSerialCreateNestedManyWithoutWarehouseReceiptInput
  }

  export type WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput = {
    id?: number
    receiptNumber: string
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
    productSerial?: ProductSerialUncheckedCreateNestedManyWithoutWarehouseReceiptInput
  }

  export type WarehouseReceiptCreateOrConnectWithoutPurchaseOrderInput = {
    where: WarehouseReceiptWhereUniqueInput
    create: XOR<WarehouseReceiptCreateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type SupplierUpsertWithoutPurchaseOrderInput = {
    update: XOR<SupplierUpdateWithoutPurchaseOrderInput, SupplierUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<SupplierCreateWithoutPurchaseOrderInput, SupplierUncheckedCreateWithoutPurchaseOrderInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutPurchaseOrderInput, SupplierUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type SupplierUpdateWithoutPurchaseOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrderDetailUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderDetailWhereUniqueInput
    update: XOR<PurchaseOrderDetailUpdateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<PurchaseOrderDetailCreateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedCreateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderDetailUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: PurchaseOrderDetailWhereUniqueInput
    data: XOR<PurchaseOrderDetailUpdateWithoutPurchaseOrderInput, PurchaseOrderDetailUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type PurchaseOrderDetailUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: PurchaseOrderDetailScalarWhereInput
    data: XOR<PurchaseOrderDetailUpdateManyMutationInput, PurchaseOrderDetailUncheckedUpdateManyWithoutPurchaseOrderInput>
  }

  export type WarehouseReceiptUpsertWithoutPurchaseOrderInput = {
    update: XOR<WarehouseReceiptUpdateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedUpdateWithoutPurchaseOrderInput>
    create: XOR<WarehouseReceiptCreateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedCreateWithoutPurchaseOrderInput>
    where?: WarehouseReceiptWhereInput
  }

  export type WarehouseReceiptUpdateToOneWithWhereWithoutPurchaseOrderInput = {
    where?: WarehouseReceiptWhereInput
    data: XOR<WarehouseReceiptUpdateWithoutPurchaseOrderInput, WarehouseReceiptUncheckedUpdateWithoutPurchaseOrderInput>
  }

  export type WarehouseReceiptUpdateWithoutPurchaseOrderInput = {
    receiptNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    productSerial?: ProductSerialUpdateManyWithoutWarehouseReceiptNestedInput
  }

  export type WarehouseReceiptUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    productSerial?: ProductSerialUncheckedUpdateManyWithoutWarehouseReceiptNestedInput
  }

  export type PurchaseOrderCreateWithoutPurchaseOrderDetailInput = {
    orderNumber: string
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    supplier: SupplierCreateNestedOneWithoutPurchaseOrderInput
    warehouseReceipt?: WarehouseReceiptCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutPurchaseOrderDetailInput = {
    id?: number
    orderNumber: string
    supplierId: number
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    warehouseReceipt?: WarehouseReceiptUncheckedCreateNestedOneWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutPurchaseOrderDetailInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutPurchaseOrderDetailInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderDetailInput>
  }

  export type ProductSkuCreateWithoutPurchaseOrderDetailInput = {
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingCreateNestedManyWithoutProductSkuInput
    price?: PriceCreateNestedManyWithoutProductSkuInput
    productSerial?: ProductSerialCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuUncheckedCreateWithoutPurchaseOrderDetailInput = {
    id?: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingUncheckedCreateNestedManyWithoutProductSkuInput
    price?: PriceUncheckedCreateNestedManyWithoutProductSkuInput
    productSerial?: ProductSerialUncheckedCreateNestedManyWithoutProductSkuInput
  }

  export type ProductSkuCreateOrConnectWithoutPurchaseOrderDetailInput = {
    where: ProductSkuWhereUniqueInput
    create: XOR<ProductSkuCreateWithoutPurchaseOrderDetailInput, ProductSkuUncheckedCreateWithoutPurchaseOrderDetailInput>
  }

  export type PurchaseOrderUpsertWithoutPurchaseOrderDetailInput = {
    update: XOR<PurchaseOrderUpdateWithoutPurchaseOrderDetailInput, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderDetailInput>
    create: XOR<PurchaseOrderCreateWithoutPurchaseOrderDetailInput, PurchaseOrderUncheckedCreateWithoutPurchaseOrderDetailInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutPurchaseOrderDetailInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutPurchaseOrderDetailInput, PurchaseOrderUncheckedUpdateWithoutPurchaseOrderDetailInput>
  }

  export type PurchaseOrderUpdateWithoutPurchaseOrderDetailInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput
    warehouseReceipt?: WarehouseReceiptUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutPurchaseOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    warehouseReceipt?: WarehouseReceiptUncheckedUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type ProductSkuUpsertWithoutPurchaseOrderDetailInput = {
    update: XOR<ProductSkuUpdateWithoutPurchaseOrderDetailInput, ProductSkuUncheckedUpdateWithoutPurchaseOrderDetailInput>
    create: XOR<ProductSkuCreateWithoutPurchaseOrderDetailInput, ProductSkuUncheckedCreateWithoutPurchaseOrderDetailInput>
    where?: ProductSkuWhereInput
  }

  export type ProductSkuUpdateToOneWithWhereWithoutPurchaseOrderDetailInput = {
    where?: ProductSkuWhereInput
    data: XOR<ProductSkuUpdateWithoutPurchaseOrderDetailInput, ProductSkuUncheckedUpdateWithoutPurchaseOrderDetailInput>
  }

  export type ProductSkuUpdateWithoutPurchaseOrderDetailInput = {
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUpdateManyWithoutProductSkuNestedInput
    price?: PriceUpdateManyWithoutProductSkuNestedInput
    productSerial?: ProductSerialUpdateManyWithoutProductSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateWithoutPurchaseOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUncheckedUpdateManyWithoutProductSkuNestedInput
    price?: PriceUncheckedUpdateManyWithoutProductSkuNestedInput
    productSerial?: ProductSerialUncheckedUpdateManyWithoutProductSkuNestedInput
  }

  export type PurchaseOrderCreateWithoutWarehouseReceiptInput = {
    orderNumber: string
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    supplier: SupplierCreateNestedOneWithoutPurchaseOrderInput
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderUncheckedCreateWithoutWarehouseReceiptInput = {
    id?: number
    orderNumber: string
    supplierId: number
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutPurchaseOrderInput
  }

  export type PurchaseOrderCreateOrConnectWithoutWarehouseReceiptInput = {
    where: PurchaseOrderWhereUniqueInput
    create: XOR<PurchaseOrderCreateWithoutWarehouseReceiptInput, PurchaseOrderUncheckedCreateWithoutWarehouseReceiptInput>
  }

  export type ProductSerialCreateWithoutWarehouseReceiptInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    status?: boolean
    productSku: ProductSkuCreateNestedOneWithoutProductSerialInput
    orderDetail?: OrderDetailCreateNestedManyWithoutProductSerialInput
  }

  export type ProductSerialUncheckedCreateWithoutWarehouseReceiptInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    productSkuId: number
    status?: boolean
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutProductSerialInput
  }

  export type ProductSerialCreateOrConnectWithoutWarehouseReceiptInput = {
    where: ProductSerialWhereUniqueInput
    create: XOR<ProductSerialCreateWithoutWarehouseReceiptInput, ProductSerialUncheckedCreateWithoutWarehouseReceiptInput>
  }

  export type ProductSerialCreateManyWarehouseReceiptInputEnvelope = {
    data: ProductSerialCreateManyWarehouseReceiptInput | ProductSerialCreateManyWarehouseReceiptInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseOrderUpsertWithoutWarehouseReceiptInput = {
    update: XOR<PurchaseOrderUpdateWithoutWarehouseReceiptInput, PurchaseOrderUncheckedUpdateWithoutWarehouseReceiptInput>
    create: XOR<PurchaseOrderCreateWithoutWarehouseReceiptInput, PurchaseOrderUncheckedCreateWithoutWarehouseReceiptInput>
    where?: PurchaseOrderWhereInput
  }

  export type PurchaseOrderUpdateToOneWithWhereWithoutWarehouseReceiptInput = {
    where?: PurchaseOrderWhereInput
    data: XOR<PurchaseOrderUpdateWithoutWarehouseReceiptInput, PurchaseOrderUncheckedUpdateWithoutWarehouseReceiptInput>
  }

  export type PurchaseOrderUpdateWithoutWarehouseReceiptInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    supplier?: SupplierUpdateOneRequiredWithoutPurchaseOrderNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutWarehouseReceiptInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    supplierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutPurchaseOrderNestedInput
  }

  export type ProductSerialUpsertWithWhereUniqueWithoutWarehouseReceiptInput = {
    where: ProductSerialWhereUniqueInput
    update: XOR<ProductSerialUpdateWithoutWarehouseReceiptInput, ProductSerialUncheckedUpdateWithoutWarehouseReceiptInput>
    create: XOR<ProductSerialCreateWithoutWarehouseReceiptInput, ProductSerialUncheckedCreateWithoutWarehouseReceiptInput>
  }

  export type ProductSerialUpdateWithWhereUniqueWithoutWarehouseReceiptInput = {
    where: ProductSerialWhereUniqueInput
    data: XOR<ProductSerialUpdateWithoutWarehouseReceiptInput, ProductSerialUncheckedUpdateWithoutWarehouseReceiptInput>
  }

  export type ProductSerialUpdateManyWithWhereWithoutWarehouseReceiptInput = {
    where: ProductSerialScalarWhereInput
    data: XOR<ProductSerialUpdateManyMutationInput, ProductSerialUncheckedUpdateManyWithoutWarehouseReceiptInput>
  }

  export type ProductSkuCreateWithoutProductSerialInput = {
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingCreateNestedManyWithoutProductSkuInput
    price?: PriceCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailCreateNestedManyWithoutSkuInput
  }

  export type ProductSkuUncheckedCreateWithoutProductSerialInput = {
    id?: number
    skuNo: string
    barcode: string
    skuName: string
    image: string
    status?: boolean
    skuAttributes: JsonNullValueInput | InputJsonValue
    slug: string
    spuSkuMapping?: SpuSkuMappingUncheckedCreateNestedManyWithoutProductSkuInput
    price?: PriceUncheckedCreateNestedManyWithoutProductSkuInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedCreateNestedManyWithoutSkuInput
  }

  export type ProductSkuCreateOrConnectWithoutProductSerialInput = {
    where: ProductSkuWhereUniqueInput
    create: XOR<ProductSkuCreateWithoutProductSerialInput, ProductSkuUncheckedCreateWithoutProductSerialInput>
  }

  export type WarehouseReceiptCreateWithoutProductSerialInput = {
    receiptNumber: string
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
    purchaseOrder: PurchaseOrderCreateNestedOneWithoutWarehouseReceiptInput
  }

  export type WarehouseReceiptUncheckedCreateWithoutProductSerialInput = {
    id?: number
    receiptNumber: string
    purchaseOrderId: number
    createdAt?: Date | string | null
    receiptDate?: Date | string | null
    employeeId: string
  }

  export type WarehouseReceiptCreateOrConnectWithoutProductSerialInput = {
    where: WarehouseReceiptWhereUniqueInput
    create: XOR<WarehouseReceiptCreateWithoutProductSerialInput, WarehouseReceiptUncheckedCreateWithoutProductSerialInput>
  }

  export type OrderDetailCreateWithoutProductSerialInput = {
    unitPrice?: number
    tax?: number
    order: OrderCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateWithoutProductSerialInput = {
    orderId: number
    unitPrice?: number
    tax?: number
  }

  export type OrderDetailCreateOrConnectWithoutProductSerialInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutProductSerialInput, OrderDetailUncheckedCreateWithoutProductSerialInput>
  }

  export type OrderDetailCreateManyProductSerialInputEnvelope = {
    data: OrderDetailCreateManyProductSerialInput | OrderDetailCreateManyProductSerialInput[]
    skipDuplicates?: boolean
  }

  export type ProductSkuUpsertWithoutProductSerialInput = {
    update: XOR<ProductSkuUpdateWithoutProductSerialInput, ProductSkuUncheckedUpdateWithoutProductSerialInput>
    create: XOR<ProductSkuCreateWithoutProductSerialInput, ProductSkuUncheckedCreateWithoutProductSerialInput>
    where?: ProductSkuWhereInput
  }

  export type ProductSkuUpdateToOneWithWhereWithoutProductSerialInput = {
    where?: ProductSkuWhereInput
    data: XOR<ProductSkuUpdateWithoutProductSerialInput, ProductSkuUncheckedUpdateWithoutProductSerialInput>
  }

  export type ProductSkuUpdateWithoutProductSerialInput = {
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUpdateManyWithoutProductSkuNestedInput
    price?: PriceUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutSkuNestedInput
  }

  export type ProductSkuUncheckedUpdateWithoutProductSerialInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuNo?: StringFieldUpdateOperationsInput | string
    barcode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    skuAttributes?: JsonNullValueInput | InputJsonValue
    slug?: StringFieldUpdateOperationsInput | string
    spuSkuMapping?: SpuSkuMappingUncheckedUpdateManyWithoutProductSkuNestedInput
    price?: PriceUncheckedUpdateManyWithoutProductSkuNestedInput
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutSkuNestedInput
  }

  export type WarehouseReceiptUpsertWithoutProductSerialInput = {
    update: XOR<WarehouseReceiptUpdateWithoutProductSerialInput, WarehouseReceiptUncheckedUpdateWithoutProductSerialInput>
    create: XOR<WarehouseReceiptCreateWithoutProductSerialInput, WarehouseReceiptUncheckedCreateWithoutProductSerialInput>
    where?: WarehouseReceiptWhereInput
  }

  export type WarehouseReceiptUpdateToOneWithWhereWithoutProductSerialInput = {
    where?: WarehouseReceiptWhereInput
    data: XOR<WarehouseReceiptUpdateWithoutProductSerialInput, WarehouseReceiptUncheckedUpdateWithoutProductSerialInput>
  }

  export type WarehouseReceiptUpdateWithoutProductSerialInput = {
    receiptNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutWarehouseReceiptNestedInput
  }

  export type WarehouseReceiptUncheckedUpdateWithoutProductSerialInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiptNumber?: StringFieldUpdateOperationsInput | string
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutProductSerialInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutProductSerialInput, OrderDetailUncheckedUpdateWithoutProductSerialInput>
    create: XOR<OrderDetailCreateWithoutProductSerialInput, OrderDetailUncheckedCreateWithoutProductSerialInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutProductSerialInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutProductSerialInput, OrderDetailUncheckedUpdateWithoutProductSerialInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutProductSerialInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutProductSerialInput>
  }

  export type OrderDetailScalarWhereInput = {
    AND?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    OR?: OrderDetailScalarWhereInput[]
    NOT?: OrderDetailScalarWhereInput | OrderDetailScalarWhereInput[]
    orderId?: IntFilter<"OrderDetail"> | number
    productSerialId?: UuidFilter<"OrderDetail"> | string
    unitPrice?: IntFilter<"OrderDetail"> | number
    tax?: IntFilter<"OrderDetail"> | number
  }

  export type OrderDetailCreateWithoutOrderInput = {
    unitPrice?: number
    tax?: number
    productSerial: ProductSerialCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateWithoutOrderInput = {
    productSerialId: string
    unitPrice?: number
    tax?: number
  }

  export type OrderDetailCreateOrConnectWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailCreateManyOrderInputEnvelope = {
    data: OrderDetailCreateManyOrderInput | OrderDetailCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutOrderInput = {
    invoiceCode: string
    createdAt?: Date | string
    employeeId: string
    taxCode: string
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes?: string | null
  }

  export type InvoiceUncheckedCreateWithoutOrderInput = {
    id?: number
    invoiceCode: string
    createdAt?: Date | string
    employeeId: string
    taxCode: string
    subtotal: number
    taxAmount: number
    totalAmount: number
    notes?: string | null
  }

  export type InvoiceCreateOrConnectWithoutOrderInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutOrderInput>
  }

  export type InvoiceUpsertWithoutOrderInput = {
    update: XOR<InvoiceUpdateWithoutOrderInput, InvoiceUncheckedUpdateWithoutOrderInput>
    create: XOR<InvoiceCreateWithoutOrderInput, InvoiceUncheckedCreateWithoutOrderInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutOrderInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutOrderInput, InvoiceUncheckedUpdateWithoutOrderInput>
  }

  export type InvoiceUpdateWithoutOrderInput = {
    invoiceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvoiceUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    taxCode?: StringFieldUpdateOperationsInput | string
    subtotal?: IntFieldUpdateOperationsInput | number
    taxAmount?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateWithoutOrderDetailInput = {
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
    invoice?: InvoiceCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderDetailInput = {
    id?: number
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
    invoice?: InvoiceUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderDetailInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
  }

  export type ProductSerialCreateWithoutOrderDetailInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    status?: boolean
    productSku: ProductSkuCreateNestedOneWithoutProductSerialInput
    warehouseReceipt: WarehouseReceiptCreateNestedOneWithoutProductSerialInput
  }

  export type ProductSerialUncheckedCreateWithoutOrderDetailInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    productSkuId: number
    warehouseReceiptId: number
    status?: boolean
  }

  export type ProductSerialCreateOrConnectWithoutOrderDetailInput = {
    where: ProductSerialWhereUniqueInput
    create: XOR<ProductSerialCreateWithoutOrderDetailInput, ProductSerialUncheckedCreateWithoutOrderDetailInput>
  }

  export type OrderUpsertWithoutOrderDetailInput = {
    update: XOR<OrderUpdateWithoutOrderDetailInput, OrderUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<OrderCreateWithoutOrderDetailInput, OrderUncheckedCreateWithoutOrderDetailInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderDetailInput, OrderUncheckedUpdateWithoutOrderDetailInput>
  }

  export type OrderUpdateWithoutOrderDetailInput = {
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    invoice?: InvoiceUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type ProductSerialUpsertWithoutOrderDetailInput = {
    update: XOR<ProductSerialUpdateWithoutOrderDetailInput, ProductSerialUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<ProductSerialCreateWithoutOrderDetailInput, ProductSerialUncheckedCreateWithoutOrderDetailInput>
    where?: ProductSerialWhereInput
  }

  export type ProductSerialUpdateToOneWithWhereWithoutOrderDetailInput = {
    where?: ProductSerialWhereInput
    data: XOR<ProductSerialUpdateWithoutOrderDetailInput, ProductSerialUncheckedUpdateWithoutOrderDetailInput>
  }

  export type ProductSerialUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSku?: ProductSkuUpdateOneRequiredWithoutProductSerialNestedInput
    warehouseReceipt?: WarehouseReceiptUpdateOneRequiredWithoutProductSerialNestedInput
  }

  export type ProductSerialUncheckedUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    productSkuId?: IntFieldUpdateOperationsInput | number
    warehouseReceiptId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderCreateWithoutInvoiceInput = {
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
    orderDetail?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutInvoiceInput = {
    id?: number
    employeeId?: string | null
    firstName: string
    lastName: string
    email: string
    contactPhone: string
    shippingAddress: string
    postcode?: string | null
    status?: string
    orderType?: boolean
    shippingMethod: string
    paymentMethod: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shippingFee?: number
    discount?: number
    orderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutInvoiceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutInvoiceInput, OrderUncheckedCreateWithoutInvoiceInput>
  }

  export type OrderUpsertWithoutInvoiceInput = {
    update: XOR<OrderUpdateWithoutInvoiceInput, OrderUncheckedUpdateWithoutInvoiceInput>
    create: XOR<OrderCreateWithoutInvoiceInput, OrderUncheckedCreateWithoutInvoiceInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutInvoiceInput, OrderUncheckedUpdateWithoutInvoiceInput>
  }

  export type OrderUpdateWithoutInvoiceInput = {
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    shippingAddress?: StringFieldUpdateOperationsInput | string
    postcode?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    orderType?: BoolFieldUpdateOperationsInput | boolean
    shippingMethod?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingFee?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ProductCreateManyBrandInput = {
    id?: number
    productName: string
    slug: string
    productLine: string
    description: string
    status: boolean
    productSpecs: JsonNullValueInput | InputJsonValue
  }

  export type ProductUpdateWithoutBrandInput = {
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    spuSkuMapping?: SpuSkuMappingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
    spuSkuMapping?: SpuSkuMappingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    productName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    productLine?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSpecs?: JsonNullValueInput | InputJsonValue
  }

  export type SpuSkuMappingCreateManyProductInput = {
    id?: number
    skuId: number
  }

  export type SpuSkuMappingUpdateWithoutProductInput = {
    productSku?: ProductSkuUpdateOneRequiredWithoutSpuSkuMappingNestedInput
  }

  export type SpuSkuMappingUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuId?: IntFieldUpdateOperationsInput | number
  }

  export type SpuSkuMappingUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    skuId?: IntFieldUpdateOperationsInput | number
  }

  export type SpuSkuMappingCreateManyProductSkuInput = {
    id?: number
    spuId: number
  }

  export type PriceCreateManyProductSkuInput = {
    beginAt: Date | string
    sellingPrice: number
    displayPrice: number
    createdAt?: Date | string
  }

  export type PurchaseOrderDetailCreateManySkuInput = {
    purchaseOrderId: number
    quantity: number
    unitPrice: number
  }

  export type ProductSerialCreateManyProductSkuInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    warehouseReceiptId: number
    status?: boolean
  }

  export type SpuSkuMappingUpdateWithoutProductSkuInput = {
    product?: ProductUpdateOneRequiredWithoutSpuSkuMappingNestedInput
  }

  export type SpuSkuMappingUncheckedUpdateWithoutProductSkuInput = {
    id?: IntFieldUpdateOperationsInput | number
    spuId?: IntFieldUpdateOperationsInput | number
  }

  export type SpuSkuMappingUncheckedUpdateManyWithoutProductSkuInput = {
    id?: IntFieldUpdateOperationsInput | number
    spuId?: IntFieldUpdateOperationsInput | number
  }

  export type PriceUpdateWithoutProductSkuInput = {
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateWithoutProductSkuInput = {
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceUncheckedUpdateManyWithoutProductSkuInput = {
    beginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellingPrice?: IntFieldUpdateOperationsInput | number
    displayPrice?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseOrderDetailUpdateWithoutSkuInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    purchaseOrder?: PurchaseOrderUpdateOneRequiredWithoutPurchaseOrderDetailNestedInput
  }

  export type PurchaseOrderDetailUncheckedUpdateWithoutSkuInput = {
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderDetailUncheckedUpdateManyWithoutSkuInput = {
    purchaseOrderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSerialUpdateWithoutProductSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    warehouseReceipt?: WarehouseReceiptUpdateOneRequiredWithoutProductSerialNestedInput
    orderDetail?: OrderDetailUpdateManyWithoutProductSerialNestedInput
  }

  export type ProductSerialUncheckedUpdateWithoutProductSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseReceiptId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductSerialNestedInput
  }

  export type ProductSerialUncheckedUpdateManyWithoutProductSkuInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseReceiptId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseOrderCreateManySupplierInput = {
    id?: number
    orderNumber: string
    createdAt?: Date | string
    orderDate: Date | string
    employeeId: string
  }

  export type PurchaseOrderUpdateWithoutSupplierInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    purchaseOrderDetail?: PurchaseOrderDetailUpdateManyWithoutPurchaseOrderNestedInput
    warehouseReceipt?: WarehouseReceiptUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
    purchaseOrderDetail?: PurchaseOrderDetailUncheckedUpdateManyWithoutPurchaseOrderNestedInput
    warehouseReceipt?: WarehouseReceiptUncheckedUpdateOneWithoutPurchaseOrderNestedInput
  }

  export type PurchaseOrderUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseOrderDetailCreateManyPurchaseOrderInput = {
    skuId: number
    quantity: number
    unitPrice: number
  }

  export type PurchaseOrderDetailUpdateWithoutPurchaseOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    sku?: ProductSkuUpdateOneRequiredWithoutPurchaseOrderDetailNestedInput
  }

  export type PurchaseOrderDetailUncheckedUpdateWithoutPurchaseOrderInput = {
    skuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseOrderDetailUncheckedUpdateManyWithoutPurchaseOrderInput = {
    skuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSerialCreateManyWarehouseReceiptInput = {
    id?: string
    serialNumber: string
    dateManufactured: Date | string
    productSkuId: number
    status?: boolean
  }

  export type ProductSerialUpdateWithoutWarehouseReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    productSku?: ProductSkuUpdateOneRequiredWithoutProductSerialNestedInput
    orderDetail?: OrderDetailUpdateManyWithoutProductSerialNestedInput
  }

  export type ProductSerialUncheckedUpdateWithoutWarehouseReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    productSkuId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    orderDetail?: OrderDetailUncheckedUpdateManyWithoutProductSerialNestedInput
  }

  export type ProductSerialUncheckedUpdateManyWithoutWarehouseReceiptInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    dateManufactured?: DateTimeFieldUpdateOperationsInput | Date | string
    productSkuId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderDetailCreateManyProductSerialInput = {
    orderId: number
    unitPrice?: number
    tax?: number
  }

  export type OrderDetailUpdateWithoutProductSerialInput = {
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutProductSerialInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailUncheckedUpdateManyWithoutProductSerialInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailCreateManyOrderInput = {
    productSerialId: string
    unitPrice?: number
    tax?: number
  }

  export type OrderDetailUpdateWithoutOrderInput = {
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    productSerial?: ProductSerialUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateWithoutOrderInput = {
    productSerialId?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderInput = {
    productSerialId?: StringFieldUpdateOperationsInput | string
    unitPrice?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}