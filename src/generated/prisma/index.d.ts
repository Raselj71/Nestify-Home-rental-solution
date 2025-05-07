
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model saveProperty
 * 
 */
export type saveProperty = $Result.DefaultSelection<Prisma.$savePropertyPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model WalletTransaction
 * 
 */
export type WalletTransaction = $Result.DefaultSelection<Prisma.$WalletTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PropertyType: {
  house: 'house',
  unit: 'unit',
  room: 'room',
  flat: 'flat',
  floor: 'floor',
  apartment: 'apartment',
  seat: 'seat'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]


export const PriceType: {
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly'
};

export type PriceType = (typeof PriceType)[keyof typeof PriceType]


export const user_role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const WalletTransactionType: {
  RECHARGE: 'RECHARGE',
  BOOKING: 'BOOKING',
  REFUND: 'REFUND',
  ADJUSTMENT: 'ADJUSTMENT'
};

export type WalletTransactionType = (typeof WalletTransactionType)[keyof typeof WalletTransactionType]

}

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

export type PriceType = $Enums.PriceType

export const PriceType: typeof $Enums.PriceType

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type WalletTransactionType = $Enums.WalletTransactionType

export const WalletTransactionType: typeof $Enums.WalletTransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saveProperty`: Exposes CRUD operations for the **saveProperty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaveProperties
    * const saveProperties = await prisma.saveProperty.findMany()
    * ```
    */
  get saveProperty(): Prisma.savePropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransaction.findMany()
    * ```
    */
  get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, ClientOptions>;
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
    Users: 'Users',
    saveProperty: 'saveProperty',
    Property: 'Property',
    Booking: 'Booking',
    WalletTransaction: 'WalletTransaction'
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
      modelProps: "users" | "saveProperty" | "property" | "booking" | "walletTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      saveProperty: {
        payload: Prisma.$savePropertyPayload<ExtArgs>
        fields: Prisma.savePropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.savePropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.savePropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>
          }
          findFirst: {
            args: Prisma.savePropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.savePropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>
          }
          findMany: {
            args: Prisma.savePropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>[]
          }
          create: {
            args: Prisma.savePropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>
          }
          createMany: {
            args: Prisma.savePropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.savePropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>[]
          }
          delete: {
            args: Prisma.savePropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>
          }
          update: {
            args: Prisma.savePropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>
          }
          deleteMany: {
            args: Prisma.savePropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.savePropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.savePropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>[]
          }
          upsert: {
            args: Prisma.savePropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$savePropertyPayload>
          }
          aggregate: {
            args: Prisma.SavePropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaveProperty>
          }
          groupBy: {
            args: Prisma.savePropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavePropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.savePropertyCountArgs<ExtArgs>
            result: $Utils.Optional<SavePropertyCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      WalletTransaction: {
        payload: Prisma.$WalletTransactionPayload<ExtArgs>
        fields: Prisma.WalletTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          delete: {
            args: Prisma.WalletTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          update: {
            args: Prisma.WalletTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          upsert: {
            args: Prisma.WalletTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransaction>
          }
          groupBy: {
            args: Prisma.WalletTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionCountAggregateOutputType> | number
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
    users?: UsersOmit
    saveProperty?: savePropertyOmit
    property?: PropertyOmit
    booking?: BookingOmit
    walletTransaction?: WalletTransactionOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    booking: number
    wallet: number
    saveProperty: number
    property: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | UsersCountOutputTypeCountBookingArgs
    wallet?: boolean | UsersCountOutputTypeCountWalletArgs
    saveProperty?: boolean | UsersCountOutputTypeCountSavePropertyArgs
    property?: boolean | UsersCountOutputTypeCountPropertyArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSavePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savePropertyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    point: number | null
  }

  export type UsersSumAggregateOutputType = {
    point: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    point: number | null
    fullName: string | null
    fcm_token: string | null
    avatar: string | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    point: number | null
    fullName: string | null
    fcm_token: string | null
    avatar: string | null
    role: $Enums.user_role | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    point: number
    fullName: number
    fcm_token: number
    avatar: number
    role: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    point?: true
  }

  export type UsersSumAggregateInputType = {
    point?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    point?: true
    fullName?: true
    fcm_token?: true
    avatar?: true
    role?: true
    createdAt?: true
    updateAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    point?: true
    fullName?: true
    fcm_token?: true
    avatar?: true
    role?: true
    createdAt?: true
    updateAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    point?: true
    fullName?: true
    fcm_token?: true
    avatar?: true
    role?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    point: number
    fullName: string | null
    fcm_token: string | null
    avatar: string | null
    role: $Enums.user_role
    createdAt: Date
    updateAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    point?: boolean
    fullName?: boolean
    fcm_token?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    booking?: boolean | Users$bookingArgs<ExtArgs>
    wallet?: boolean | Users$walletArgs<ExtArgs>
    saveProperty?: boolean | Users$savePropertyArgs<ExtArgs>
    property?: boolean | Users$propertyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    point?: boolean
    fullName?: boolean
    fcm_token?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    point?: boolean
    fullName?: boolean
    fcm_token?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    point?: boolean
    fullName?: boolean
    fcm_token?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "point" | "fullName" | "fcm_token" | "avatar" | "role" | "createdAt" | "updateAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | Users$bookingArgs<ExtArgs>
    wallet?: boolean | Users$walletArgs<ExtArgs>
    saveProperty?: boolean | Users$savePropertyArgs<ExtArgs>
    property?: boolean | Users$propertyArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>[]
      wallet: Prisma.$WalletTransactionPayload<ExtArgs>[]
      saveProperty: Prisma.$savePropertyPayload<ExtArgs>[]
      property: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      point: number
      fullName: string | null
      fcm_token: string | null
      avatar: string | null
      role: $Enums.user_role
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends Users$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallet<T extends Users$walletArgs<ExtArgs> = {}>(args?: Subset<T, Users$walletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saveProperty<T extends Users$savePropertyArgs<ExtArgs> = {}>(args?: Subset<T, Users$savePropertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property<T extends Users$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Users$propertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly point: FieldRef<"Users", 'Int'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly fcm_token: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'user_role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updateAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.booking
   */
  export type Users$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Users.wallet
   */
  export type Users$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * Users.saveProperty
   */
  export type Users$savePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    where?: savePropertyWhereInput
    orderBy?: savePropertyOrderByWithRelationInput | savePropertyOrderByWithRelationInput[]
    cursor?: savePropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavePropertyScalarFieldEnum | SavePropertyScalarFieldEnum[]
  }

  /**
   * Users.property
   */
  export type Users$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model saveProperty
   */

  export type AggregateSaveProperty = {
    _count: SavePropertyCountAggregateOutputType | null
    _min: SavePropertyMinAggregateOutputType | null
    _max: SavePropertyMaxAggregateOutputType | null
  }

  export type SavePropertyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
  }

  export type SavePropertyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
  }

  export type SavePropertyCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    _all: number
  }


  export type SavePropertyMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
  }

  export type SavePropertyMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
  }

  export type SavePropertyCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    _all?: true
  }

  export type SavePropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saveProperty to aggregate.
     */
    where?: savePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saveProperties to fetch.
     */
    orderBy?: savePropertyOrderByWithRelationInput | savePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: savePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saveProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saveProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saveProperties
    **/
    _count?: true | SavePropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavePropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavePropertyMaxAggregateInputType
  }

  export type GetSavePropertyAggregateType<T extends SavePropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateSaveProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaveProperty[P]>
      : GetScalarType<T[P], AggregateSaveProperty[P]>
  }




  export type savePropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: savePropertyWhereInput
    orderBy?: savePropertyOrderByWithAggregationInput | savePropertyOrderByWithAggregationInput[]
    by: SavePropertyScalarFieldEnum[] | SavePropertyScalarFieldEnum
    having?: savePropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavePropertyCountAggregateInputType | true
    _min?: SavePropertyMinAggregateInputType
    _max?: SavePropertyMaxAggregateInputType
  }

  export type SavePropertyGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    _count: SavePropertyCountAggregateOutputType | null
    _min: SavePropertyMinAggregateOutputType | null
    _max: SavePropertyMaxAggregateOutputType | null
  }

  type GetSavePropertyGroupByPayload<T extends savePropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavePropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavePropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavePropertyGroupByOutputType[P]>
            : GetScalarType<T[P], SavePropertyGroupByOutputType[P]>
        }
      >
    >


  export type savePropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveProperty"]>

  export type savePropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveProperty"]>

  export type savePropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    User?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saveProperty"]>

  export type savePropertySelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
  }

  export type savePropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId", ExtArgs["result"]["saveProperty"]>
  export type savePropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type savePropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type savePropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $savePropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saveProperty"
    objects: {
      User: Prisma.$UsersPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
    }, ExtArgs["result"]["saveProperty"]>
    composites: {}
  }

  type savePropertyGetPayload<S extends boolean | null | undefined | savePropertyDefaultArgs> = $Result.GetResult<Prisma.$savePropertyPayload, S>

  type savePropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<savePropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavePropertyCountAggregateInputType | true
    }

  export interface savePropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saveProperty'], meta: { name: 'saveProperty' } }
    /**
     * Find zero or one SaveProperty that matches the filter.
     * @param {savePropertyFindUniqueArgs} args - Arguments to find a SaveProperty
     * @example
     * // Get one SaveProperty
     * const saveProperty = await prisma.saveProperty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends savePropertyFindUniqueArgs>(args: SelectSubset<T, savePropertyFindUniqueArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaveProperty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {savePropertyFindUniqueOrThrowArgs} args - Arguments to find a SaveProperty
     * @example
     * // Get one SaveProperty
     * const saveProperty = await prisma.saveProperty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends savePropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, savePropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaveProperty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savePropertyFindFirstArgs} args - Arguments to find a SaveProperty
     * @example
     * // Get one SaveProperty
     * const saveProperty = await prisma.saveProperty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends savePropertyFindFirstArgs>(args?: SelectSubset<T, savePropertyFindFirstArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaveProperty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savePropertyFindFirstOrThrowArgs} args - Arguments to find a SaveProperty
     * @example
     * // Get one SaveProperty
     * const saveProperty = await prisma.saveProperty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends savePropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, savePropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaveProperties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savePropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaveProperties
     * const saveProperties = await prisma.saveProperty.findMany()
     * 
     * // Get first 10 SaveProperties
     * const saveProperties = await prisma.saveProperty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savePropertyWithIdOnly = await prisma.saveProperty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends savePropertyFindManyArgs>(args?: SelectSubset<T, savePropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaveProperty.
     * @param {savePropertyCreateArgs} args - Arguments to create a SaveProperty.
     * @example
     * // Create one SaveProperty
     * const SaveProperty = await prisma.saveProperty.create({
     *   data: {
     *     // ... data to create a SaveProperty
     *   }
     * })
     * 
     */
    create<T extends savePropertyCreateArgs>(args: SelectSubset<T, savePropertyCreateArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaveProperties.
     * @param {savePropertyCreateManyArgs} args - Arguments to create many SaveProperties.
     * @example
     * // Create many SaveProperties
     * const saveProperty = await prisma.saveProperty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends savePropertyCreateManyArgs>(args?: SelectSubset<T, savePropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaveProperties and returns the data saved in the database.
     * @param {savePropertyCreateManyAndReturnArgs} args - Arguments to create many SaveProperties.
     * @example
     * // Create many SaveProperties
     * const saveProperty = await prisma.saveProperty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaveProperties and only return the `id`
     * const savePropertyWithIdOnly = await prisma.saveProperty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends savePropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, savePropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaveProperty.
     * @param {savePropertyDeleteArgs} args - Arguments to delete one SaveProperty.
     * @example
     * // Delete one SaveProperty
     * const SaveProperty = await prisma.saveProperty.delete({
     *   where: {
     *     // ... filter to delete one SaveProperty
     *   }
     * })
     * 
     */
    delete<T extends savePropertyDeleteArgs>(args: SelectSubset<T, savePropertyDeleteArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaveProperty.
     * @param {savePropertyUpdateArgs} args - Arguments to update one SaveProperty.
     * @example
     * // Update one SaveProperty
     * const saveProperty = await prisma.saveProperty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends savePropertyUpdateArgs>(args: SelectSubset<T, savePropertyUpdateArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaveProperties.
     * @param {savePropertyDeleteManyArgs} args - Arguments to filter SaveProperties to delete.
     * @example
     * // Delete a few SaveProperties
     * const { count } = await prisma.saveProperty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends savePropertyDeleteManyArgs>(args?: SelectSubset<T, savePropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaveProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savePropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaveProperties
     * const saveProperty = await prisma.saveProperty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends savePropertyUpdateManyArgs>(args: SelectSubset<T, savePropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaveProperties and returns the data updated in the database.
     * @param {savePropertyUpdateManyAndReturnArgs} args - Arguments to update many SaveProperties.
     * @example
     * // Update many SaveProperties
     * const saveProperty = await prisma.saveProperty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaveProperties and only return the `id`
     * const savePropertyWithIdOnly = await prisma.saveProperty.updateManyAndReturn({
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
    updateManyAndReturn<T extends savePropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, savePropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaveProperty.
     * @param {savePropertyUpsertArgs} args - Arguments to update or create a SaveProperty.
     * @example
     * // Update or create a SaveProperty
     * const saveProperty = await prisma.saveProperty.upsert({
     *   create: {
     *     // ... data to create a SaveProperty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaveProperty we want to update
     *   }
     * })
     */
    upsert<T extends savePropertyUpsertArgs>(args: SelectSubset<T, savePropertyUpsertArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaveProperties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savePropertyCountArgs} args - Arguments to filter SaveProperties to count.
     * @example
     * // Count the number of SaveProperties
     * const count = await prisma.saveProperty.count({
     *   where: {
     *     // ... the filter for the SaveProperties we want to count
     *   }
     * })
    **/
    count<T extends savePropertyCountArgs>(
      args?: Subset<T, savePropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavePropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaveProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavePropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavePropertyAggregateArgs>(args: Subset<T, SavePropertyAggregateArgs>): Prisma.PrismaPromise<GetSavePropertyAggregateType<T>>

    /**
     * Group by SaveProperty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {savePropertyGroupByArgs} args - Group by arguments.
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
      T extends savePropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: savePropertyGroupByArgs['orderBy'] }
        : { orderBy?: savePropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, savePropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavePropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saveProperty model
   */
  readonly fields: savePropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saveProperty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__savePropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the saveProperty model
   */
  interface savePropertyFieldRefs {
    readonly id: FieldRef<"saveProperty", 'String'>
    readonly userId: FieldRef<"saveProperty", 'String'>
    readonly propertyId: FieldRef<"saveProperty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * saveProperty findUnique
   */
  export type savePropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * Filter, which saveProperty to fetch.
     */
    where: savePropertyWhereUniqueInput
  }

  /**
   * saveProperty findUniqueOrThrow
   */
  export type savePropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * Filter, which saveProperty to fetch.
     */
    where: savePropertyWhereUniqueInput
  }

  /**
   * saveProperty findFirst
   */
  export type savePropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * Filter, which saveProperty to fetch.
     */
    where?: savePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saveProperties to fetch.
     */
    orderBy?: savePropertyOrderByWithRelationInput | savePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saveProperties.
     */
    cursor?: savePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saveProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saveProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saveProperties.
     */
    distinct?: SavePropertyScalarFieldEnum | SavePropertyScalarFieldEnum[]
  }

  /**
   * saveProperty findFirstOrThrow
   */
  export type savePropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * Filter, which saveProperty to fetch.
     */
    where?: savePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saveProperties to fetch.
     */
    orderBy?: savePropertyOrderByWithRelationInput | savePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saveProperties.
     */
    cursor?: savePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saveProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saveProperties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saveProperties.
     */
    distinct?: SavePropertyScalarFieldEnum | SavePropertyScalarFieldEnum[]
  }

  /**
   * saveProperty findMany
   */
  export type savePropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * Filter, which saveProperties to fetch.
     */
    where?: savePropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saveProperties to fetch.
     */
    orderBy?: savePropertyOrderByWithRelationInput | savePropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saveProperties.
     */
    cursor?: savePropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saveProperties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saveProperties.
     */
    skip?: number
    distinct?: SavePropertyScalarFieldEnum | SavePropertyScalarFieldEnum[]
  }

  /**
   * saveProperty create
   */
  export type savePropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a saveProperty.
     */
    data: XOR<savePropertyCreateInput, savePropertyUncheckedCreateInput>
  }

  /**
   * saveProperty createMany
   */
  export type savePropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saveProperties.
     */
    data: savePropertyCreateManyInput | savePropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saveProperty createManyAndReturn
   */
  export type savePropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * The data used to create many saveProperties.
     */
    data: savePropertyCreateManyInput | savePropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * saveProperty update
   */
  export type savePropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a saveProperty.
     */
    data: XOR<savePropertyUpdateInput, savePropertyUncheckedUpdateInput>
    /**
     * Choose, which saveProperty to update.
     */
    where: savePropertyWhereUniqueInput
  }

  /**
   * saveProperty updateMany
   */
  export type savePropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saveProperties.
     */
    data: XOR<savePropertyUpdateManyMutationInput, savePropertyUncheckedUpdateManyInput>
    /**
     * Filter which saveProperties to update
     */
    where?: savePropertyWhereInput
    /**
     * Limit how many saveProperties to update.
     */
    limit?: number
  }

  /**
   * saveProperty updateManyAndReturn
   */
  export type savePropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * The data used to update saveProperties.
     */
    data: XOR<savePropertyUpdateManyMutationInput, savePropertyUncheckedUpdateManyInput>
    /**
     * Filter which saveProperties to update
     */
    where?: savePropertyWhereInput
    /**
     * Limit how many saveProperties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * saveProperty upsert
   */
  export type savePropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the saveProperty to update in case it exists.
     */
    where: savePropertyWhereUniqueInput
    /**
     * In case the saveProperty found by the `where` argument doesn't exist, create a new saveProperty with this data.
     */
    create: XOR<savePropertyCreateInput, savePropertyUncheckedCreateInput>
    /**
     * In case the saveProperty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<savePropertyUpdateInput, savePropertyUncheckedUpdateInput>
  }

  /**
   * saveProperty delete
   */
  export type savePropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    /**
     * Filter which saveProperty to delete.
     */
    where: savePropertyWhereUniqueInput
  }

  /**
   * saveProperty deleteMany
   */
  export type savePropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saveProperties to delete
     */
    where?: savePropertyWhereInput
    /**
     * Limit how many saveProperties to delete.
     */
    limit?: number
  }

  /**
   * saveProperty without action
   */
  export type savePropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyCategory: string | null
    gender: string | null
    propertySeat: string | null
    propertyDivision: string | null
    propertyDistrict: string | null
    propertyUpzila: string | null
    propertySectorNo: string | null
    propertyRoadNo: string | null
    propertyHouseNo: string | null
    propertyShortAddress: string | null
    propertyAvailable: string | null
    propertyType: $Enums.PropertyType | null
    propertyBedroom: string | null
    propertyBathroom: string | null
    propertyBalcony: string | null
    propertyFloor: string | null
    propertySize: string | null
    propertyPrice: string | null
    propertyPriceType: $Enums.PriceType | null
    propertyDescription: string | null
    propertyBookingStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyCategory: string | null
    gender: string | null
    propertySeat: string | null
    propertyDivision: string | null
    propertyDistrict: string | null
    propertyUpzila: string | null
    propertySectorNo: string | null
    propertyRoadNo: string | null
    propertyHouseNo: string | null
    propertyShortAddress: string | null
    propertyAvailable: string | null
    propertyType: $Enums.PropertyType | null
    propertyBedroom: string | null
    propertyBathroom: string | null
    propertyBalcony: string | null
    propertyFloor: string | null
    propertySize: string | null
    propertyPrice: string | null
    propertyPriceType: $Enums.PriceType | null
    propertyDescription: string | null
    propertyBookingStatus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    userId: number
    propertyCategory: number
    gender: number
    propertySeat: number
    propertyDivision: number
    propertyDistrict: number
    propertyUpzila: number
    propertySectorNo: number
    propertyRoadNo: number
    propertyHouseNo: number
    propertyShortAddress: number
    propertyAvailable: number
    propertyType: number
    propertyBedroom: number
    propertyBathroom: number
    propertyBalcony: number
    propertyFloor: number
    propertySize: number
    propertyPrice: number
    propertyPriceType: number
    propertyInclude: number
    propertyImages: number
    propertyDescription: number
    propertyBookingStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyMinAggregateInputType = {
    id?: true
    userId?: true
    propertyCategory?: true
    gender?: true
    propertySeat?: true
    propertyDivision?: true
    propertyDistrict?: true
    propertyUpzila?: true
    propertySectorNo?: true
    propertyRoadNo?: true
    propertyHouseNo?: true
    propertyShortAddress?: true
    propertyAvailable?: true
    propertyType?: true
    propertyBedroom?: true
    propertyBathroom?: true
    propertyBalcony?: true
    propertyFloor?: true
    propertySize?: true
    propertyPrice?: true
    propertyPriceType?: true
    propertyDescription?: true
    propertyBookingStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyCategory?: true
    gender?: true
    propertySeat?: true
    propertyDivision?: true
    propertyDistrict?: true
    propertyUpzila?: true
    propertySectorNo?: true
    propertyRoadNo?: true
    propertyHouseNo?: true
    propertyShortAddress?: true
    propertyAvailable?: true
    propertyType?: true
    propertyBedroom?: true
    propertyBathroom?: true
    propertyBalcony?: true
    propertyFloor?: true
    propertySize?: true
    propertyPrice?: true
    propertyPriceType?: true
    propertyDescription?: true
    propertyBookingStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    userId?: true
    propertyCategory?: true
    gender?: true
    propertySeat?: true
    propertyDivision?: true
    propertyDistrict?: true
    propertyUpzila?: true
    propertySectorNo?: true
    propertyRoadNo?: true
    propertyHouseNo?: true
    propertyShortAddress?: true
    propertyAvailable?: true
    propertyType?: true
    propertyBedroom?: true
    propertyBathroom?: true
    propertyBalcony?: true
    propertyFloor?: true
    propertySize?: true
    propertyPrice?: true
    propertyPriceType?: true
    propertyInclude?: true
    propertyImages?: true
    propertyDescription?: true
    propertyBookingStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    userId: string
    propertyCategory: string
    gender: string | null
    propertySeat: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo: string | null
    propertyRoadNo: string | null
    propertyHouseNo: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony: string | null
    propertyFloor: string | null
    propertySize: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude: string[]
    propertyImages: string[]
    propertyDescription: string | null
    propertyBookingStatus: boolean
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyCategory?: boolean
    gender?: boolean
    propertySeat?: boolean
    propertyDivision?: boolean
    propertyDistrict?: boolean
    propertyUpzila?: boolean
    propertySectorNo?: boolean
    propertyRoadNo?: boolean
    propertyHouseNo?: boolean
    propertyShortAddress?: boolean
    propertyAvailable?: boolean
    propertyType?: boolean
    propertyBedroom?: boolean
    propertyBathroom?: boolean
    propertyBalcony?: boolean
    propertyFloor?: boolean
    propertySize?: boolean
    propertyPrice?: boolean
    propertyPriceType?: boolean
    propertyInclude?: boolean
    propertyImages?: boolean
    propertyDescription?: boolean
    propertyBookingStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    booking?: boolean | Property$bookingArgs<ExtArgs>
    saveProperty?: boolean | Property$savePropertyArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyCategory?: boolean
    gender?: boolean
    propertySeat?: boolean
    propertyDivision?: boolean
    propertyDistrict?: boolean
    propertyUpzila?: boolean
    propertySectorNo?: boolean
    propertyRoadNo?: boolean
    propertyHouseNo?: boolean
    propertyShortAddress?: boolean
    propertyAvailable?: boolean
    propertyType?: boolean
    propertyBedroom?: boolean
    propertyBathroom?: boolean
    propertyBalcony?: boolean
    propertyFloor?: boolean
    propertySize?: boolean
    propertyPrice?: boolean
    propertyPriceType?: boolean
    propertyInclude?: boolean
    propertyImages?: boolean
    propertyDescription?: boolean
    propertyBookingStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyCategory?: boolean
    gender?: boolean
    propertySeat?: boolean
    propertyDivision?: boolean
    propertyDistrict?: boolean
    propertyUpzila?: boolean
    propertySectorNo?: boolean
    propertyRoadNo?: boolean
    propertyHouseNo?: boolean
    propertyShortAddress?: boolean
    propertyAvailable?: boolean
    propertyType?: boolean
    propertyBedroom?: boolean
    propertyBathroom?: boolean
    propertyBalcony?: boolean
    propertyFloor?: boolean
    propertySize?: boolean
    propertyPrice?: boolean
    propertyPriceType?: boolean
    propertyInclude?: boolean
    propertyImages?: boolean
    propertyDescription?: boolean
    propertyBookingStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    userId?: boolean
    propertyCategory?: boolean
    gender?: boolean
    propertySeat?: boolean
    propertyDivision?: boolean
    propertyDistrict?: boolean
    propertyUpzila?: boolean
    propertySectorNo?: boolean
    propertyRoadNo?: boolean
    propertyHouseNo?: boolean
    propertyShortAddress?: boolean
    propertyAvailable?: boolean
    propertyType?: boolean
    propertyBedroom?: boolean
    propertyBathroom?: boolean
    propertyBalcony?: boolean
    propertyFloor?: boolean
    propertySize?: boolean
    propertyPrice?: boolean
    propertyPriceType?: boolean
    propertyInclude?: boolean
    propertyImages?: boolean
    propertyDescription?: boolean
    propertyBookingStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyCategory" | "gender" | "propertySeat" | "propertyDivision" | "propertyDistrict" | "propertyUpzila" | "propertySectorNo" | "propertyRoadNo" | "propertyHouseNo" | "propertyShortAddress" | "propertyAvailable" | "propertyType" | "propertyBedroom" | "propertyBathroom" | "propertyBalcony" | "propertyFloor" | "propertySize" | "propertyPrice" | "propertyPriceType" | "propertyInclude" | "propertyImages" | "propertyDescription" | "propertyBookingStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    booking?: boolean | Property$bookingArgs<ExtArgs>
    saveProperty?: boolean | Property$savePropertyArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
      saveProperty: Prisma.$savePropertyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyCategory: string
      gender: string | null
      propertySeat: string | null
      propertyDivision: string
      propertyDistrict: string
      propertyUpzila: string
      propertySectorNo: string | null
      propertyRoadNo: string | null
      propertyHouseNo: string | null
      propertyShortAddress: string
      propertyAvailable: string
      propertyType: $Enums.PropertyType
      propertyBedroom: string
      propertyBathroom: string
      propertyBalcony: string | null
      propertyFloor: string | null
      propertySize: string | null
      propertyPrice: string
      propertyPriceType: $Enums.PriceType
      propertyInclude: string[]
      propertyImages: string[]
      propertyDescription: string | null
      propertyBookingStatus: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends Property$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Property$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    saveProperty<T extends Property$savePropertyArgs<ExtArgs> = {}>(args?: Subset<T, Property$savePropertyArgs<ExtArgs>>): Prisma__savePropertyClient<$Result.GetResult<Prisma.$savePropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'String'>
    readonly userId: FieldRef<"Property", 'String'>
    readonly propertyCategory: FieldRef<"Property", 'String'>
    readonly gender: FieldRef<"Property", 'String'>
    readonly propertySeat: FieldRef<"Property", 'String'>
    readonly propertyDivision: FieldRef<"Property", 'String'>
    readonly propertyDistrict: FieldRef<"Property", 'String'>
    readonly propertyUpzila: FieldRef<"Property", 'String'>
    readonly propertySectorNo: FieldRef<"Property", 'String'>
    readonly propertyRoadNo: FieldRef<"Property", 'String'>
    readonly propertyHouseNo: FieldRef<"Property", 'String'>
    readonly propertyShortAddress: FieldRef<"Property", 'String'>
    readonly propertyAvailable: FieldRef<"Property", 'String'>
    readonly propertyType: FieldRef<"Property", 'PropertyType'>
    readonly propertyBedroom: FieldRef<"Property", 'String'>
    readonly propertyBathroom: FieldRef<"Property", 'String'>
    readonly propertyBalcony: FieldRef<"Property", 'String'>
    readonly propertyFloor: FieldRef<"Property", 'String'>
    readonly propertySize: FieldRef<"Property", 'String'>
    readonly propertyPrice: FieldRef<"Property", 'String'>
    readonly propertyPriceType: FieldRef<"Property", 'PriceType'>
    readonly propertyInclude: FieldRef<"Property", 'String[]'>
    readonly propertyImages: FieldRef<"Property", 'String[]'>
    readonly propertyDescription: FieldRef<"Property", 'String'>
    readonly propertyBookingStatus: FieldRef<"Property", 'Boolean'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.booking
   */
  export type Property$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Property.saveProperty
   */
  export type Property$savePropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saveProperty
     */
    select?: savePropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the saveProperty
     */
    omit?: savePropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: savePropertyInclude<ExtArgs> | null
    where?: savePropertyWhereInput
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    pointsUsed: number | null
  }

  export type BookingSumAggregateOutputType = {
    pointsUsed: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    pointsUsed: number | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    propertyId: string | null
    pointsUsed: number | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    pointsUsed: number
    createdAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    pointsUsed?: true
  }

  export type BookingSumAggregateInputType = {
    pointsUsed?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    pointsUsed?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    pointsUsed?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    pointsUsed?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    propertyId: string
    pointsUsed: number
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    pointsUsed?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    pointsUsed?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    pointsUsed?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    pointsUsed?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "pointsUsed" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      propertyId: string
      pointsUsed: number
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly propertyId: FieldRef<"Booking", 'String'>
    readonly pointsUsed: FieldRef<"Booking", 'Int'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransaction
   */

  export type AggregateWalletTransaction = {
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  export type WalletTransactionAvgAggregateOutputType = {
    points: number | null
  }

  export type WalletTransactionSumAggregateOutputType = {
    points: number | null
  }

  export type WalletTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.WalletTransactionType | null
    points: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type WalletTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.WalletTransactionType | null
    points: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type WalletTransactionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    points: number
    reason: number
    meta: number
    createdAt: number
    _all: number
  }


  export type WalletTransactionAvgAggregateInputType = {
    points?: true
  }

  export type WalletTransactionSumAggregateInputType = {
    points?: true
  }

  export type WalletTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    points?: true
    reason?: true
    createdAt?: true
  }

  export type WalletTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    points?: true
    reason?: true
    createdAt?: true
  }

  export type WalletTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    points?: true
    reason?: true
    meta?: true
    createdAt?: true
    _all?: true
  }

  export type WalletTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransaction to aggregate.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type GetWalletTransactionAggregateType<T extends WalletTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransaction[P]>
      : GetScalarType<T[P], AggregateWalletTransaction[P]>
  }




  export type WalletTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithAggregationInput | WalletTransactionOrderByWithAggregationInput[]
    by: WalletTransactionScalarFieldEnum[] | WalletTransactionScalarFieldEnum
    having?: WalletTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionCountAggregateInputType | true
    _avg?: WalletTransactionAvgAggregateInputType
    _sum?: WalletTransactionSumAggregateInputType
    _min?: WalletTransactionMinAggregateInputType
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type WalletTransactionGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.WalletTransactionType
    points: number
    reason: string | null
    meta: JsonValue | null
    createdAt: Date
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  type GetWalletTransactionGroupByPayload<T extends WalletTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    reason?: boolean
    meta?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    reason?: boolean
    meta?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    reason?: boolean
    meta?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    points?: boolean
    reason?: boolean
    meta?: boolean
    createdAt?: boolean
  }

  export type WalletTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "points" | "reason" | "meta" | "createdAt", ExtArgs["result"]["walletTransaction"]>
  export type WalletTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type WalletTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type WalletTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $WalletTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransaction"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.WalletTransactionType
      points: number
      reason: string | null
      meta: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["walletTransaction"]>
    composites: {}
  }

  type WalletTransactionGetPayload<S extends boolean | null | undefined | WalletTransactionDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionPayload, S>

  type WalletTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransactionCountAggregateInputType | true
    }

  export interface WalletTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransaction'], meta: { name: 'WalletTransaction' } }
    /**
     * Find zero or one WalletTransaction that matches the filter.
     * @param {WalletTransactionFindUniqueArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionFindUniqueArgs>(args: SelectSubset<T, WalletTransactionFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransactionFindUniqueOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionFindFirstArgs>(args?: SelectSubset<T, WalletTransactionFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionFindManyArgs>(args?: SelectSubset<T, WalletTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletTransaction.
     * @param {WalletTransactionCreateArgs} args - Arguments to create a WalletTransaction.
     * @example
     * // Create one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.create({
     *   data: {
     *     // ... data to create a WalletTransaction
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionCreateArgs>(args: SelectSubset<T, WalletTransactionCreateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionCreateManyArgs>(args?: SelectSubset<T, WalletTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletTransactions and returns the data saved in the database.
     * @param {WalletTransactionCreateManyAndReturnArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletTransaction.
     * @param {WalletTransactionDeleteArgs} args - Arguments to delete one WalletTransaction.
     * @example
     * // Delete one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.delete({
     *   where: {
     *     // ... filter to delete one WalletTransaction
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionDeleteArgs>(args: SelectSubset<T, WalletTransactionDeleteArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletTransaction.
     * @param {WalletTransactionUpdateArgs} args - Arguments to update one WalletTransaction.
     * @example
     * // Update one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionUpdateArgs>(args: SelectSubset<T, WalletTransactionUpdateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionUpdateManyArgs>(args: SelectSubset<T, WalletTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions and returns the data updated in the database.
     * @param {WalletTransactionUpdateManyAndReturnArgs} args - Arguments to update many WalletTransactions.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletTransaction.
     * @param {WalletTransactionUpsertArgs} args - Arguments to update or create a WalletTransaction.
     * @example
     * // Update or create a WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.upsert({
     *   create: {
     *     // ... data to create a WalletTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionUpsertArgs>(args: SelectSubset<T, WalletTransactionUpsertArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransaction.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionCountArgs>(
      args?: Subset<T, WalletTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletTransactionAggregateArgs>(args: Subset<T, WalletTransactionAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionAggregateType<T>>

    /**
     * Group by WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionGroupByArgs} args - Group by arguments.
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
      T extends WalletTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransaction model
   */
  readonly fields: WalletTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WalletTransaction model
   */
  interface WalletTransactionFieldRefs {
    readonly id: FieldRef<"WalletTransaction", 'String'>
    readonly userId: FieldRef<"WalletTransaction", 'String'>
    readonly type: FieldRef<"WalletTransaction", 'WalletTransactionType'>
    readonly points: FieldRef<"WalletTransaction", 'Int'>
    readonly reason: FieldRef<"WalletTransaction", 'String'>
    readonly meta: FieldRef<"WalletTransaction", 'Json'>
    readonly createdAt: FieldRef<"WalletTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransaction findUnique
   */
  export type WalletTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findUniqueOrThrow
   */
  export type WalletTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findFirst
   */
  export type WalletTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findFirstOrThrow
   */
  export type WalletTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findMany
   */
  export type WalletTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction create
   */
  export type WalletTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransaction.
     */
    data: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
  }

  /**
   * WalletTransaction createMany
   */
  export type WalletTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransaction createManyAndReturn
   */
  export type WalletTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction update
   */
  export type WalletTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransaction.
     */
    data: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
    /**
     * Choose, which WalletTransaction to update.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction updateMany
   */
  export type WalletTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
  }

  /**
   * WalletTransaction updateManyAndReturn
   */
  export type WalletTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction upsert
   */
  export type WalletTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransaction to update in case it exists.
     */
    where: WalletTransactionWhereUniqueInput
    /**
     * In case the WalletTransaction found by the `where` argument doesn't exist, create a new WalletTransaction with this data.
     */
    create: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
    /**
     * In case the WalletTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
  }

  /**
   * WalletTransaction delete
   */
  export type WalletTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter which WalletTransaction to delete.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction deleteMany
   */
  export type WalletTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionWhereInput
    /**
     * Limit how many WalletTransactions to delete.
     */
    limit?: number
  }

  /**
   * WalletTransaction without action
   */
  export type WalletTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    point: 'point',
    fullName: 'fullName',
    fcm_token: 'fcm_token',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SavePropertyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId'
  };

  export type SavePropertyScalarFieldEnum = (typeof SavePropertyScalarFieldEnum)[keyof typeof SavePropertyScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyCategory: 'propertyCategory',
    gender: 'gender',
    propertySeat: 'propertySeat',
    propertyDivision: 'propertyDivision',
    propertyDistrict: 'propertyDistrict',
    propertyUpzila: 'propertyUpzila',
    propertySectorNo: 'propertySectorNo',
    propertyRoadNo: 'propertyRoadNo',
    propertyHouseNo: 'propertyHouseNo',
    propertyShortAddress: 'propertyShortAddress',
    propertyAvailable: 'propertyAvailable',
    propertyType: 'propertyType',
    propertyBedroom: 'propertyBedroom',
    propertyBathroom: 'propertyBathroom',
    propertyBalcony: 'propertyBalcony',
    propertyFloor: 'propertyFloor',
    propertySize: 'propertySize',
    propertyPrice: 'propertyPrice',
    propertyPriceType: 'propertyPriceType',
    propertyInclude: 'propertyInclude',
    propertyImages: 'propertyImages',
    propertyDescription: 'propertyDescription',
    propertyBookingStatus: 'propertyBookingStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    pointsUsed: 'pointsUsed',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const WalletTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    points: 'points',
    reason: 'reason',
    meta: 'meta',
    createdAt: 'createdAt'
  };

  export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'PropertyType[]'
   */
  export type ListEnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType[]'>
    


  /**
   * Reference to a field of type 'PriceType'
   */
  export type EnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType'>
    


  /**
   * Reference to a field of type 'PriceType[]'
   */
  export type ListEnumPriceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WalletTransactionType'
   */
  export type EnumWalletTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WalletTransactionType'>
    


  /**
   * Reference to a field of type 'WalletTransactionType[]'
   */
  export type ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WalletTransactionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: UuidFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringNullableFilter<"Users"> | string | null
    point?: IntFilter<"Users"> | number
    fullName?: StringNullableFilter<"Users"> | string | null
    fcm_token?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    role?: Enumuser_roleFilter<"Users"> | $Enums.user_role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updateAt?: DateTimeFilter<"Users"> | Date | string
    booking?: BookingListRelationFilter
    wallet?: WalletTransactionListRelationFilter
    saveProperty?: SavePropertyListRelationFilter
    property?: PropertyListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    point?: SortOrder
    fullName?: SortOrderInput | SortOrder
    fcm_token?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    booking?: BookingOrderByRelationAggregateInput
    wallet?: WalletTransactionOrderByRelationAggregateInput
    saveProperty?: savePropertyOrderByRelationAggregateInput
    property?: PropertyOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    point?: IntFilter<"Users"> | number
    fullName?: StringNullableFilter<"Users"> | string | null
    fcm_token?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    role?: Enumuser_roleFilter<"Users"> | $Enums.user_role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updateAt?: DateTimeFilter<"Users"> | Date | string
    booking?: BookingListRelationFilter
    wallet?: WalletTransactionListRelationFilter
    saveProperty?: SavePropertyListRelationFilter
    property?: PropertyListRelationFilter
  }, "id" | "email" | "phone">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    point?: SortOrder
    fullName?: SortOrderInput | SortOrder
    fcm_token?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    point?: IntWithAggregatesFilter<"Users"> | number
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    fcm_token?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"Users"> | $Enums.user_role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type savePropertyWhereInput = {
    AND?: savePropertyWhereInput | savePropertyWhereInput[]
    OR?: savePropertyWhereInput[]
    NOT?: savePropertyWhereInput | savePropertyWhereInput[]
    id?: UuidFilter<"saveProperty"> | string
    userId?: UuidFilter<"saveProperty"> | string
    propertyId?: UuidFilter<"saveProperty"> | string
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type savePropertyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    User?: UsersOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type savePropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId?: string
    AND?: savePropertyWhereInput | savePropertyWhereInput[]
    OR?: savePropertyWhereInput[]
    NOT?: savePropertyWhereInput | savePropertyWhereInput[]
    userId?: UuidFilter<"saveProperty"> | string
    User?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id" | "propertyId">

  export type savePropertyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    _count?: savePropertyCountOrderByAggregateInput
    _max?: savePropertyMaxOrderByAggregateInput
    _min?: savePropertyMinOrderByAggregateInput
  }

  export type savePropertyScalarWhereWithAggregatesInput = {
    AND?: savePropertyScalarWhereWithAggregatesInput | savePropertyScalarWhereWithAggregatesInput[]
    OR?: savePropertyScalarWhereWithAggregatesInput[]
    NOT?: savePropertyScalarWhereWithAggregatesInput | savePropertyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"saveProperty"> | string
    userId?: UuidWithAggregatesFilter<"saveProperty"> | string
    propertyId?: UuidWithAggregatesFilter<"saveProperty"> | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: UuidFilter<"Property"> | string
    userId?: UuidFilter<"Property"> | string
    propertyCategory?: StringFilter<"Property"> | string
    gender?: StringNullableFilter<"Property"> | string | null
    propertySeat?: StringNullableFilter<"Property"> | string | null
    propertyDivision?: StringFilter<"Property"> | string
    propertyDistrict?: StringFilter<"Property"> | string
    propertyUpzila?: StringFilter<"Property"> | string
    propertySectorNo?: StringNullableFilter<"Property"> | string | null
    propertyRoadNo?: StringNullableFilter<"Property"> | string | null
    propertyHouseNo?: StringNullableFilter<"Property"> | string | null
    propertyShortAddress?: StringFilter<"Property"> | string
    propertyAvailable?: StringFilter<"Property"> | string
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    propertyBedroom?: StringFilter<"Property"> | string
    propertyBathroom?: StringFilter<"Property"> | string
    propertyBalcony?: StringNullableFilter<"Property"> | string | null
    propertyFloor?: StringNullableFilter<"Property"> | string | null
    propertySize?: StringNullableFilter<"Property"> | string | null
    propertyPrice?: StringFilter<"Property"> | string
    propertyPriceType?: EnumPriceTypeFilter<"Property"> | $Enums.PriceType
    propertyInclude?: StringNullableListFilter<"Property">
    propertyImages?: StringNullableListFilter<"Property">
    propertyDescription?: StringNullableFilter<"Property"> | string | null
    propertyBookingStatus?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    saveProperty?: XOR<SavePropertyNullableScalarRelationFilter, savePropertyWhereInput> | null
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyCategory?: SortOrder
    gender?: SortOrderInput | SortOrder
    propertySeat?: SortOrderInput | SortOrder
    propertyDivision?: SortOrder
    propertyDistrict?: SortOrder
    propertyUpzila?: SortOrder
    propertySectorNo?: SortOrderInput | SortOrder
    propertyRoadNo?: SortOrderInput | SortOrder
    propertyHouseNo?: SortOrderInput | SortOrder
    propertyShortAddress?: SortOrder
    propertyAvailable?: SortOrder
    propertyType?: SortOrder
    propertyBedroom?: SortOrder
    propertyBathroom?: SortOrder
    propertyBalcony?: SortOrderInput | SortOrder
    propertyFloor?: SortOrderInput | SortOrder
    propertySize?: SortOrderInput | SortOrder
    propertyPrice?: SortOrder
    propertyPriceType?: SortOrder
    propertyInclude?: SortOrder
    propertyImages?: SortOrder
    propertyDescription?: SortOrderInput | SortOrder
    propertyBookingStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
    saveProperty?: savePropertyOrderByWithRelationInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    userId?: UuidFilter<"Property"> | string
    propertyCategory?: StringFilter<"Property"> | string
    gender?: StringNullableFilter<"Property"> | string | null
    propertySeat?: StringNullableFilter<"Property"> | string | null
    propertyDivision?: StringFilter<"Property"> | string
    propertyDistrict?: StringFilter<"Property"> | string
    propertyUpzila?: StringFilter<"Property"> | string
    propertySectorNo?: StringNullableFilter<"Property"> | string | null
    propertyRoadNo?: StringNullableFilter<"Property"> | string | null
    propertyHouseNo?: StringNullableFilter<"Property"> | string | null
    propertyShortAddress?: StringFilter<"Property"> | string
    propertyAvailable?: StringFilter<"Property"> | string
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    propertyBedroom?: StringFilter<"Property"> | string
    propertyBathroom?: StringFilter<"Property"> | string
    propertyBalcony?: StringNullableFilter<"Property"> | string | null
    propertyFloor?: StringNullableFilter<"Property"> | string | null
    propertySize?: StringNullableFilter<"Property"> | string | null
    propertyPrice?: StringFilter<"Property"> | string
    propertyPriceType?: EnumPriceTypeFilter<"Property"> | $Enums.PriceType
    propertyInclude?: StringNullableListFilter<"Property">
    propertyImages?: StringNullableListFilter<"Property">
    propertyDescription?: StringNullableFilter<"Property"> | string | null
    propertyBookingStatus?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    saveProperty?: XOR<SavePropertyNullableScalarRelationFilter, savePropertyWhereInput> | null
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyCategory?: SortOrder
    gender?: SortOrderInput | SortOrder
    propertySeat?: SortOrderInput | SortOrder
    propertyDivision?: SortOrder
    propertyDistrict?: SortOrder
    propertyUpzila?: SortOrder
    propertySectorNo?: SortOrderInput | SortOrder
    propertyRoadNo?: SortOrderInput | SortOrder
    propertyHouseNo?: SortOrderInput | SortOrder
    propertyShortAddress?: SortOrder
    propertyAvailable?: SortOrder
    propertyType?: SortOrder
    propertyBedroom?: SortOrder
    propertyBathroom?: SortOrder
    propertyBalcony?: SortOrderInput | SortOrder
    propertyFloor?: SortOrderInput | SortOrder
    propertySize?: SortOrderInput | SortOrder
    propertyPrice?: SortOrder
    propertyPriceType?: SortOrder
    propertyInclude?: SortOrder
    propertyImages?: SortOrder
    propertyDescription?: SortOrderInput | SortOrder
    propertyBookingStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Property"> | string
    userId?: UuidWithAggregatesFilter<"Property"> | string
    propertyCategory?: StringWithAggregatesFilter<"Property"> | string
    gender?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertySeat?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyDivision?: StringWithAggregatesFilter<"Property"> | string
    propertyDistrict?: StringWithAggregatesFilter<"Property"> | string
    propertyUpzila?: StringWithAggregatesFilter<"Property"> | string
    propertySectorNo?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyRoadNo?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyHouseNo?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyShortAddress?: StringWithAggregatesFilter<"Property"> | string
    propertyAvailable?: StringWithAggregatesFilter<"Property"> | string
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    propertyBedroom?: StringWithAggregatesFilter<"Property"> | string
    propertyBathroom?: StringWithAggregatesFilter<"Property"> | string
    propertyBalcony?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyFloor?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertySize?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyPrice?: StringWithAggregatesFilter<"Property"> | string
    propertyPriceType?: EnumPriceTypeWithAggregatesFilter<"Property"> | $Enums.PriceType
    propertyInclude?: StringNullableListFilter<"Property">
    propertyImages?: StringNullableListFilter<"Property">
    propertyDescription?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyBookingStatus?: BoolWithAggregatesFilter<"Property"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: UuidFilter<"Booking"> | string
    userId?: UuidFilter<"Booking"> | string
    propertyId?: UuidFilter<"Booking"> | string
    pointsUsed?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    pointsUsed?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    propertyId?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: UuidFilter<"Booking"> | string
    pointsUsed?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id" | "propertyId">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    pointsUsed?: SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Booking"> | string
    userId?: UuidWithAggregatesFilter<"Booking"> | string
    propertyId?: UuidWithAggregatesFilter<"Booking"> | string
    pointsUsed?: IntWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type WalletTransactionWhereInput = {
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    id?: UuidFilter<"WalletTransaction"> | string
    userId?: UuidFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    points?: IntFilter<"WalletTransaction"> | number
    reason?: StringNullableFilter<"WalletTransaction"> | string | null
    meta?: JsonNullableFilter<"WalletTransaction">
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type WalletTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    reason?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type WalletTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    userId?: UuidFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    points?: IntFilter<"WalletTransaction"> | number
    reason?: StringNullableFilter<"WalletTransaction"> | string | null
    meta?: JsonNullableFilter<"WalletTransaction">
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type WalletTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    reason?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WalletTransactionCountOrderByAggregateInput
    _avg?: WalletTransactionAvgOrderByAggregateInput
    _max?: WalletTransactionMaxOrderByAggregateInput
    _min?: WalletTransactionMinOrderByAggregateInput
    _sum?: WalletTransactionSumOrderByAggregateInput
  }

  export type WalletTransactionScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WalletTransaction"> | string
    userId?: UuidWithAggregatesFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeWithAggregatesFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    points?: IntWithAggregatesFilter<"WalletTransaction"> | number
    reason?: StringNullableWithAggregatesFilter<"WalletTransaction"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"WalletTransaction">
    createdAt?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingCreateNestedManyWithoutUserInput
    wallet?: WalletTransactionCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyCreateNestedManyWithoutUserInput
    property?: PropertyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyUncheckedCreateNestedManyWithoutUserInput
    property?: PropertyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutUserNestedInput
    wallet?: WalletTransactionUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUpdateManyWithoutUserNestedInput
    property?: PropertyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUncheckedUpdateManyWithoutUserNestedInput
    property?: PropertyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savePropertyCreateInput = {
    id?: string
    User: UsersCreateNestedOneWithoutSavePropertyInput
    property: PropertyCreateNestedOneWithoutSavePropertyInput
  }

  export type savePropertyUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
  }

  export type savePropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    User?: UsersUpdateOneRequiredWithoutSavePropertyNestedInput
    property?: PropertyUpdateOneRequiredWithoutSavePropertyNestedInput
  }

  export type savePropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type savePropertyCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
  }

  export type savePropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type savePropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyCreateInput = {
    id?: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutPropertyInput
    booking?: BookingCreateNestedOneWithoutPropertyInput
    saveProperty?: savePropertyCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: string
    userId: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedOneWithoutPropertyInput
    saveProperty?: savePropertyUncheckedCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutPropertyNestedInput
    booking?: BookingUpdateOneWithoutPropertyNestedInput
    saveProperty?: savePropertyUpdateOneWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateOneWithoutPropertyNestedInput
    saveProperty?: savePropertyUncheckedUpdateOneWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: string
    userId: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    pointsUsed: number
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutBookingInput
    property: PropertyCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    propertyId: string
    pointsUsed: number
    createdAt?: Date | string
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    propertyId: string
    pointsUsed: number
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateInput = {
    id?: string
    type: $Enums.WalletTransactionType
    points: number
    reason?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutWalletInput
  }

  export type WalletTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.WalletTransactionType
    points: number
    reason?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.WalletTransactionType
    points: number
    reason?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
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

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type WalletTransactionListRelationFilter = {
    every?: WalletTransactionWhereInput
    some?: WalletTransactionWhereInput
    none?: WalletTransactionWhereInput
  }

  export type SavePropertyListRelationFilter = {
    every?: savePropertyWhereInput
    some?: savePropertyWhereInput
    none?: savePropertyWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type savePropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    point?: SortOrder
    fullName?: SortOrder
    fcm_token?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    point?: SortOrder
    fullName?: SortOrder
    fcm_token?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    point?: SortOrder
    fullName?: SortOrder
    fcm_token?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    point?: SortOrder
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

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type savePropertyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
  }

  export type savePropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
  }

  export type savePropertyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
  }

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type EnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type SavePropertyNullableScalarRelationFilter = {
    is?: savePropertyWhereInput | null
    isNot?: savePropertyWhereInput | null
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyCategory?: SortOrder
    gender?: SortOrder
    propertySeat?: SortOrder
    propertyDivision?: SortOrder
    propertyDistrict?: SortOrder
    propertyUpzila?: SortOrder
    propertySectorNo?: SortOrder
    propertyRoadNo?: SortOrder
    propertyHouseNo?: SortOrder
    propertyShortAddress?: SortOrder
    propertyAvailable?: SortOrder
    propertyType?: SortOrder
    propertyBedroom?: SortOrder
    propertyBathroom?: SortOrder
    propertyBalcony?: SortOrder
    propertyFloor?: SortOrder
    propertySize?: SortOrder
    propertyPrice?: SortOrder
    propertyPriceType?: SortOrder
    propertyInclude?: SortOrder
    propertyImages?: SortOrder
    propertyDescription?: SortOrder
    propertyBookingStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyCategory?: SortOrder
    gender?: SortOrder
    propertySeat?: SortOrder
    propertyDivision?: SortOrder
    propertyDistrict?: SortOrder
    propertyUpzila?: SortOrder
    propertySectorNo?: SortOrder
    propertyRoadNo?: SortOrder
    propertyHouseNo?: SortOrder
    propertyShortAddress?: SortOrder
    propertyAvailable?: SortOrder
    propertyType?: SortOrder
    propertyBedroom?: SortOrder
    propertyBathroom?: SortOrder
    propertyBalcony?: SortOrder
    propertyFloor?: SortOrder
    propertySize?: SortOrder
    propertyPrice?: SortOrder
    propertyPriceType?: SortOrder
    propertyDescription?: SortOrder
    propertyBookingStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyCategory?: SortOrder
    gender?: SortOrder
    propertySeat?: SortOrder
    propertyDivision?: SortOrder
    propertyDistrict?: SortOrder
    propertyUpzila?: SortOrder
    propertySectorNo?: SortOrder
    propertyRoadNo?: SortOrder
    propertyHouseNo?: SortOrder
    propertyShortAddress?: SortOrder
    propertyAvailable?: SortOrder
    propertyType?: SortOrder
    propertyBedroom?: SortOrder
    propertyBathroom?: SortOrder
    propertyBalcony?: SortOrder
    propertyFloor?: SortOrder
    propertySize?: SortOrder
    propertyPrice?: SortOrder
    propertyPriceType?: SortOrder
    propertyDescription?: SortOrder
    propertyBookingStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type EnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    pointsUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    pointsUsed?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    pointsUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    pointsUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    pointsUsed?: SortOrder
  }

  export type EnumWalletTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeFilter<$PrismaModel> | $Enums.WalletTransactionType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type WalletTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    meta?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type WalletTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type EnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.WalletTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WalletTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type savePropertyCreateNestedManyWithoutUserInput = {
    create?: XOR<savePropertyCreateWithoutUserInput, savePropertyUncheckedCreateWithoutUserInput> | savePropertyCreateWithoutUserInput[] | savePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savePropertyCreateOrConnectWithoutUserInput | savePropertyCreateOrConnectWithoutUserInput[]
    createMany?: savePropertyCreateManyUserInputEnvelope
    connect?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
  }

  export type PropertyCreateNestedManyWithoutUsersInput = {
    create?: XOR<PropertyCreateWithoutUsersInput, PropertyUncheckedCreateWithoutUsersInput> | PropertyCreateWithoutUsersInput[] | PropertyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUsersInput | PropertyCreateOrConnectWithoutUsersInput[]
    createMany?: PropertyCreateManyUsersInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type savePropertyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<savePropertyCreateWithoutUserInput, savePropertyUncheckedCreateWithoutUserInput> | savePropertyCreateWithoutUserInput[] | savePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savePropertyCreateOrConnectWithoutUserInput | savePropertyCreateOrConnectWithoutUserInput[]
    createMany?: savePropertyCreateManyUserInputEnvelope
    connect?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PropertyCreateWithoutUsersInput, PropertyUncheckedCreateWithoutUsersInput> | PropertyCreateWithoutUsersInput[] | PropertyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUsersInput | PropertyCreateOrConnectWithoutUsersInput[]
    createMany?: PropertyCreateManyUsersInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WalletTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutUserInput | WalletTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutUserInput | WalletTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutUserInput | WalletTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type savePropertyUpdateManyWithoutUserNestedInput = {
    create?: XOR<savePropertyCreateWithoutUserInput, savePropertyUncheckedCreateWithoutUserInput> | savePropertyCreateWithoutUserInput[] | savePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savePropertyCreateOrConnectWithoutUserInput | savePropertyCreateOrConnectWithoutUserInput[]
    upsert?: savePropertyUpsertWithWhereUniqueWithoutUserInput | savePropertyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: savePropertyCreateManyUserInputEnvelope
    set?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    disconnect?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    delete?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    connect?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    update?: savePropertyUpdateWithWhereUniqueWithoutUserInput | savePropertyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: savePropertyUpdateManyWithWhereWithoutUserInput | savePropertyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: savePropertyScalarWhereInput | savePropertyScalarWhereInput[]
  }

  export type PropertyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PropertyCreateWithoutUsersInput, PropertyUncheckedCreateWithoutUsersInput> | PropertyCreateWithoutUsersInput[] | PropertyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUsersInput | PropertyCreateOrConnectWithoutUsersInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutUsersInput | PropertyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PropertyCreateManyUsersInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutUsersInput | PropertyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutUsersInput | PropertyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WalletTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput> | WalletTransactionCreateWithoutUserInput[] | WalletTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutUserInput | WalletTransactionCreateOrConnectWithoutUserInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutUserInput | WalletTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletTransactionCreateManyUserInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutUserInput | WalletTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutUserInput | WalletTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type savePropertyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<savePropertyCreateWithoutUserInput, savePropertyUncheckedCreateWithoutUserInput> | savePropertyCreateWithoutUserInput[] | savePropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: savePropertyCreateOrConnectWithoutUserInput | savePropertyCreateOrConnectWithoutUserInput[]
    upsert?: savePropertyUpsertWithWhereUniqueWithoutUserInput | savePropertyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: savePropertyCreateManyUserInputEnvelope
    set?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    disconnect?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    delete?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    connect?: savePropertyWhereUniqueInput | savePropertyWhereUniqueInput[]
    update?: savePropertyUpdateWithWhereUniqueWithoutUserInput | savePropertyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: savePropertyUpdateManyWithWhereWithoutUserInput | savePropertyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: savePropertyScalarWhereInput | savePropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PropertyCreateWithoutUsersInput, PropertyUncheckedCreateWithoutUsersInput> | PropertyCreateWithoutUsersInput[] | PropertyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUsersInput | PropertyCreateOrConnectWithoutUsersInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutUsersInput | PropertyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PropertyCreateManyUsersInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutUsersInput | PropertyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutUsersInput | PropertyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutSavePropertyInput = {
    create?: XOR<UsersCreateWithoutSavePropertyInput, UsersUncheckedCreateWithoutSavePropertyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavePropertyInput
    connect?: UsersWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutSavePropertyInput = {
    create?: XOR<PropertyCreateWithoutSavePropertyInput, PropertyUncheckedCreateWithoutSavePropertyInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSavePropertyInput
    connect?: PropertyWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSavePropertyNestedInput = {
    create?: XOR<UsersCreateWithoutSavePropertyInput, UsersUncheckedCreateWithoutSavePropertyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSavePropertyInput
    upsert?: UsersUpsertWithoutSavePropertyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSavePropertyInput, UsersUpdateWithoutSavePropertyInput>, UsersUncheckedUpdateWithoutSavePropertyInput>
  }

  export type PropertyUpdateOneRequiredWithoutSavePropertyNestedInput = {
    create?: XOR<PropertyCreateWithoutSavePropertyInput, PropertyUncheckedCreateWithoutSavePropertyInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSavePropertyInput
    upsert?: PropertyUpsertWithoutSavePropertyInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutSavePropertyInput, PropertyUpdateWithoutSavePropertyInput>, PropertyUncheckedUpdateWithoutSavePropertyInput>
  }

  export type PropertyCreatepropertyIncludeInput = {
    set: string[]
  }

  export type PropertyCreatepropertyImagesInput = {
    set: string[]
  }

  export type UsersCreateNestedOneWithoutPropertyInput = {
    create?: XOR<UsersCreateWithoutPropertyInput, UsersUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPropertyInput
    connect?: UsersWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput
    connect?: BookingWhereUniqueInput
  }

  export type savePropertyCreateNestedOneWithoutPropertyInput = {
    create?: XOR<savePropertyCreateWithoutPropertyInput, savePropertyUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: savePropertyCreateOrConnectWithoutPropertyInput
    connect?: savePropertyWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedOneWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput
    connect?: BookingWhereUniqueInput
  }

  export type savePropertyUncheckedCreateNestedOneWithoutPropertyInput = {
    create?: XOR<savePropertyCreateWithoutPropertyInput, savePropertyUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: savePropertyCreateOrConnectWithoutPropertyInput
    connect?: savePropertyWhereUniqueInput
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type EnumPriceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriceType
  }

  export type PropertyUpdatepropertyIncludeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PropertyUpdatepropertyImagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<UsersCreateWithoutPropertyInput, UsersUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPropertyInput
    upsert?: UsersUpsertWithoutPropertyInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPropertyInput, UsersUpdateWithoutPropertyInput>, UsersUncheckedUpdateWithoutPropertyInput>
  }

  export type BookingUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput
    upsert?: BookingUpsertWithoutPropertyInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPropertyInput, BookingUpdateWithoutPropertyInput>, BookingUncheckedUpdateWithoutPropertyInput>
  }

  export type savePropertyUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<savePropertyCreateWithoutPropertyInput, savePropertyUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: savePropertyCreateOrConnectWithoutPropertyInput
    upsert?: savePropertyUpsertWithoutPropertyInput
    disconnect?: savePropertyWhereInput | boolean
    delete?: savePropertyWhereInput | boolean
    connect?: savePropertyWhereUniqueInput
    update?: XOR<XOR<savePropertyUpdateToOneWithWhereWithoutPropertyInput, savePropertyUpdateWithoutPropertyInput>, savePropertyUncheckedUpdateWithoutPropertyInput>
  }

  export type BookingUncheckedUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput
    upsert?: BookingUpsertWithoutPropertyInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPropertyInput, BookingUpdateWithoutPropertyInput>, BookingUncheckedUpdateWithoutPropertyInput>
  }

  export type savePropertyUncheckedUpdateOneWithoutPropertyNestedInput = {
    create?: XOR<savePropertyCreateWithoutPropertyInput, savePropertyUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: savePropertyCreateOrConnectWithoutPropertyInput
    upsert?: savePropertyUpsertWithoutPropertyInput
    disconnect?: savePropertyWhereInput | boolean
    delete?: savePropertyWhereInput | boolean
    connect?: savePropertyWhereUniqueInput
    update?: XOR<XOR<savePropertyUpdateToOneWithWhereWithoutPropertyInput, savePropertyUpdateWithoutPropertyInput>, savePropertyUncheckedUpdateWithoutPropertyInput>
  }

  export type UsersCreateNestedOneWithoutBookingInput = {
    create?: XOR<UsersCreateWithoutBookingInput, UsersUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingInput
    connect?: UsersWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutBookingInput = {
    create?: XOR<PropertyCreateWithoutBookingInput, PropertyUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingInput
    connect?: PropertyWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<UsersCreateWithoutBookingInput, UsersUncheckedCreateWithoutBookingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingInput
    upsert?: UsersUpsertWithoutBookingInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookingInput, UsersUpdateWithoutBookingInput>, UsersUncheckedUpdateWithoutBookingInput>
  }

  export type PropertyUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<PropertyCreateWithoutBookingInput, PropertyUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingInput
    upsert?: PropertyUpsertWithoutBookingInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutBookingInput, PropertyUpdateWithoutBookingInput>, PropertyUncheckedUpdateWithoutBookingInput>
  }

  export type UsersCreateNestedOneWithoutWalletInput = {
    create?: XOR<UsersCreateWithoutWalletInput, UsersUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWalletInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumWalletTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.WalletTransactionType
  }

  export type UsersUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UsersCreateWithoutWalletInput, UsersUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWalletInput
    upsert?: UsersUpsertWithoutWalletInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWalletInput, UsersUpdateWithoutWalletInput>, UsersUncheckedUpdateWithoutWalletInput>
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

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
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

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel>
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
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

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type NestedEnumPriceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeFilter<$PrismaModel> | $Enums.PriceType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PropertyType[] | ListEnumPropertyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceType | EnumPriceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PriceType[] | ListEnumPriceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPriceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWalletTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeFilter<$PrismaModel> | $Enums.WalletTransactionType
  }

  export type NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WalletTransactionType | EnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.WalletTransactionType[] | ListEnumWalletTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumWalletTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.WalletTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumWalletTransactionTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type BookingCreateWithoutUserInput = {
    id?: string
    pointsUsed: number
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
    pointsUsed: number
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransactionCreateWithoutUserInput = {
    id?: string
    type: $Enums.WalletTransactionType
    points: number
    reason?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WalletTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.WalletTransactionType
    points: number
    reason?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutUserInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput>
  }

  export type WalletTransactionCreateManyUserInputEnvelope = {
    data: WalletTransactionCreateManyUserInput | WalletTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type savePropertyCreateWithoutUserInput = {
    id?: string
    property: PropertyCreateNestedOneWithoutSavePropertyInput
  }

  export type savePropertyUncheckedCreateWithoutUserInput = {
    id?: string
    propertyId: string
  }

  export type savePropertyCreateOrConnectWithoutUserInput = {
    where: savePropertyWhereUniqueInput
    create: XOR<savePropertyCreateWithoutUserInput, savePropertyUncheckedCreateWithoutUserInput>
  }

  export type savePropertyCreateManyUserInputEnvelope = {
    data: savePropertyCreateManyUserInput | savePropertyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutUsersInput = {
    id?: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingCreateNestedOneWithoutPropertyInput
    saveProperty?: savePropertyCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutUsersInput = {
    id?: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedOneWithoutPropertyInput
    saveProperty?: savePropertyUncheckedCreateNestedOneWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutUsersInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutUsersInput, PropertyUncheckedCreateWithoutUsersInput>
  }

  export type PropertyCreateManyUsersInputEnvelope = {
    data: PropertyCreateManyUsersInput | PropertyCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: UuidFilter<"Booking"> | string
    userId?: UuidFilter<"Booking"> | string
    propertyId?: UuidFilter<"Booking"> | string
    pointsUsed?: IntFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutUserInput, WalletTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<WalletTransactionCreateWithoutUserInput, WalletTransactionUncheckedCreateWithoutUserInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutUserInput, WalletTransactionUncheckedUpdateWithoutUserInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutUserInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletTransactionScalarWhereInput = {
    AND?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    OR?: WalletTransactionScalarWhereInput[]
    NOT?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    id?: UuidFilter<"WalletTransaction"> | string
    userId?: UuidFilter<"WalletTransaction"> | string
    type?: EnumWalletTransactionTypeFilter<"WalletTransaction"> | $Enums.WalletTransactionType
    points?: IntFilter<"WalletTransaction"> | number
    reason?: StringNullableFilter<"WalletTransaction"> | string | null
    meta?: JsonNullableFilter<"WalletTransaction">
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
  }

  export type savePropertyUpsertWithWhereUniqueWithoutUserInput = {
    where: savePropertyWhereUniqueInput
    update: XOR<savePropertyUpdateWithoutUserInput, savePropertyUncheckedUpdateWithoutUserInput>
    create: XOR<savePropertyCreateWithoutUserInput, savePropertyUncheckedCreateWithoutUserInput>
  }

  export type savePropertyUpdateWithWhereUniqueWithoutUserInput = {
    where: savePropertyWhereUniqueInput
    data: XOR<savePropertyUpdateWithoutUserInput, savePropertyUncheckedUpdateWithoutUserInput>
  }

  export type savePropertyUpdateManyWithWhereWithoutUserInput = {
    where: savePropertyScalarWhereInput
    data: XOR<savePropertyUpdateManyMutationInput, savePropertyUncheckedUpdateManyWithoutUserInput>
  }

  export type savePropertyScalarWhereInput = {
    AND?: savePropertyScalarWhereInput | savePropertyScalarWhereInput[]
    OR?: savePropertyScalarWhereInput[]
    NOT?: savePropertyScalarWhereInput | savePropertyScalarWhereInput[]
    id?: UuidFilter<"saveProperty"> | string
    userId?: UuidFilter<"saveProperty"> | string
    propertyId?: UuidFilter<"saveProperty"> | string
  }

  export type PropertyUpsertWithWhereUniqueWithoutUsersInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutUsersInput, PropertyUncheckedUpdateWithoutUsersInput>
    create: XOR<PropertyCreateWithoutUsersInput, PropertyUncheckedCreateWithoutUsersInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutUsersInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutUsersInput, PropertyUncheckedUpdateWithoutUsersInput>
  }

  export type PropertyUpdateManyWithWhereWithoutUsersInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutUsersInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: UuidFilter<"Property"> | string
    userId?: UuidFilter<"Property"> | string
    propertyCategory?: StringFilter<"Property"> | string
    gender?: StringNullableFilter<"Property"> | string | null
    propertySeat?: StringNullableFilter<"Property"> | string | null
    propertyDivision?: StringFilter<"Property"> | string
    propertyDistrict?: StringFilter<"Property"> | string
    propertyUpzila?: StringFilter<"Property"> | string
    propertySectorNo?: StringNullableFilter<"Property"> | string | null
    propertyRoadNo?: StringNullableFilter<"Property"> | string | null
    propertyHouseNo?: StringNullableFilter<"Property"> | string | null
    propertyShortAddress?: StringFilter<"Property"> | string
    propertyAvailable?: StringFilter<"Property"> | string
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    propertyBedroom?: StringFilter<"Property"> | string
    propertyBathroom?: StringFilter<"Property"> | string
    propertyBalcony?: StringNullableFilter<"Property"> | string | null
    propertyFloor?: StringNullableFilter<"Property"> | string | null
    propertySize?: StringNullableFilter<"Property"> | string | null
    propertyPrice?: StringFilter<"Property"> | string
    propertyPriceType?: EnumPriceTypeFilter<"Property"> | $Enums.PriceType
    propertyInclude?: StringNullableListFilter<"Property">
    propertyImages?: StringNullableListFilter<"Property">
    propertyDescription?: StringNullableFilter<"Property"> | string | null
    propertyBookingStatus?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type UsersCreateWithoutSavePropertyInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingCreateNestedManyWithoutUserInput
    wallet?: WalletTransactionCreateNestedManyWithoutUserInput
    property?: PropertyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutSavePropertyInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
    property?: PropertyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutSavePropertyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSavePropertyInput, UsersUncheckedCreateWithoutSavePropertyInput>
  }

  export type PropertyCreateWithoutSavePropertyInput = {
    id?: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutPropertyInput
    booking?: BookingCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutSavePropertyInput = {
    id?: string
    userId: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    booking?: BookingUncheckedCreateNestedOneWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutSavePropertyInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutSavePropertyInput, PropertyUncheckedCreateWithoutSavePropertyInput>
  }

  export type UsersUpsertWithoutSavePropertyInput = {
    update: XOR<UsersUpdateWithoutSavePropertyInput, UsersUncheckedUpdateWithoutSavePropertyInput>
    create: XOR<UsersCreateWithoutSavePropertyInput, UsersUncheckedCreateWithoutSavePropertyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSavePropertyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSavePropertyInput, UsersUncheckedUpdateWithoutSavePropertyInput>
  }

  export type UsersUpdateWithoutSavePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutUserNestedInput
    wallet?: WalletTransactionUpdateManyWithoutUserNestedInput
    property?: PropertyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutSavePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
    property?: PropertyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PropertyUpsertWithoutSavePropertyInput = {
    update: XOR<PropertyUpdateWithoutSavePropertyInput, PropertyUncheckedUpdateWithoutSavePropertyInput>
    create: XOR<PropertyCreateWithoutSavePropertyInput, PropertyUncheckedCreateWithoutSavePropertyInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutSavePropertyInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutSavePropertyInput, PropertyUncheckedUpdateWithoutSavePropertyInput>
  }

  export type PropertyUpdateWithoutSavePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutPropertyNestedInput
    booking?: BookingUpdateOneWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutSavePropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateOneWithoutPropertyNestedInput
  }

  export type UsersCreateWithoutPropertyInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingCreateNestedManyWithoutUserInput
    wallet?: WalletTransactionCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutPropertyInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutPropertyInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPropertyInput, UsersUncheckedCreateWithoutPropertyInput>
  }

  export type BookingCreateWithoutPropertyInput = {
    id?: string
    pointsUsed: number
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
    pointsUsed: number
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type savePropertyCreateWithoutPropertyInput = {
    id?: string
    User: UsersCreateNestedOneWithoutSavePropertyInput
  }

  export type savePropertyUncheckedCreateWithoutPropertyInput = {
    id?: string
    userId: string
  }

  export type savePropertyCreateOrConnectWithoutPropertyInput = {
    where: savePropertyWhereUniqueInput
    create: XOR<savePropertyCreateWithoutPropertyInput, savePropertyUncheckedCreateWithoutPropertyInput>
  }

  export type UsersUpsertWithoutPropertyInput = {
    update: XOR<UsersUpdateWithoutPropertyInput, UsersUncheckedUpdateWithoutPropertyInput>
    create: XOR<UsersCreateWithoutPropertyInput, UsersUncheckedCreateWithoutPropertyInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPropertyInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPropertyInput, UsersUncheckedUpdateWithoutPropertyInput>
  }

  export type UsersUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutUserNestedInput
    wallet?: WalletTransactionUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithoutPropertyInput = {
    update: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPropertyInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
  }

  export type BookingUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savePropertyUpsertWithoutPropertyInput = {
    update: XOR<savePropertyUpdateWithoutPropertyInput, savePropertyUncheckedUpdateWithoutPropertyInput>
    create: XOR<savePropertyCreateWithoutPropertyInput, savePropertyUncheckedCreateWithoutPropertyInput>
    where?: savePropertyWhereInput
  }

  export type savePropertyUpdateToOneWithWhereWithoutPropertyInput = {
    where?: savePropertyWhereInput
    data: XOR<savePropertyUpdateWithoutPropertyInput, savePropertyUncheckedUpdateWithoutPropertyInput>
  }

  export type savePropertyUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    User?: UsersUpdateOneRequiredWithoutSavePropertyNestedInput
  }

  export type savePropertyUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateWithoutBookingInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    wallet?: WalletTransactionCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyCreateNestedManyWithoutUserInput
    property?: PropertyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutBookingInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    wallet?: WalletTransactionUncheckedCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyUncheckedCreateNestedManyWithoutUserInput
    property?: PropertyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutBookingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookingInput, UsersUncheckedCreateWithoutBookingInput>
  }

  export type PropertyCreateWithoutBookingInput = {
    id?: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutPropertyInput
    saveProperty?: savePropertyCreateNestedOneWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    saveProperty?: savePropertyUncheckedCreateNestedOneWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutBookingInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutBookingInput, PropertyUncheckedCreateWithoutBookingInput>
  }

  export type UsersUpsertWithoutBookingInput = {
    update: XOR<UsersUpdateWithoutBookingInput, UsersUncheckedUpdateWithoutBookingInput>
    create: XOR<UsersCreateWithoutBookingInput, UsersUncheckedCreateWithoutBookingInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookingInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookingInput, UsersUncheckedUpdateWithoutBookingInput>
  }

  export type UsersUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletTransactionUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUpdateManyWithoutUserNestedInput
    property?: PropertyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletTransactionUncheckedUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUncheckedUpdateManyWithoutUserNestedInput
    property?: PropertyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PropertyUpsertWithoutBookingInput = {
    update: XOR<PropertyUpdateWithoutBookingInput, PropertyUncheckedUpdateWithoutBookingInput>
    create: XOR<PropertyCreateWithoutBookingInput, PropertyUncheckedCreateWithoutBookingInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutBookingInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutBookingInput, PropertyUncheckedUpdateWithoutBookingInput>
  }

  export type PropertyUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutPropertyNestedInput
    saveProperty?: savePropertyUpdateOneWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveProperty?: savePropertyUncheckedUpdateOneWithoutPropertyNestedInput
  }

  export type UsersCreateWithoutWalletInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyCreateNestedManyWithoutUserInput
    property?: PropertyCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutWalletInput = {
    id?: string
    email: string
    phone?: string | null
    point?: number
    fullName?: string | null
    fcm_token?: string | null
    avatar?: string | null
    role?: $Enums.user_role
    createdAt?: Date | string
    updateAt?: Date | string
    booking?: BookingUncheckedCreateNestedManyWithoutUserInput
    saveProperty?: savePropertyUncheckedCreateNestedManyWithoutUserInput
    property?: PropertyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutWalletInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWalletInput, UsersUncheckedCreateWithoutWalletInput>
  }

  export type UsersUpsertWithoutWalletInput = {
    update: XOR<UsersUpdateWithoutWalletInput, UsersUncheckedUpdateWithoutWalletInput>
    create: XOR<UsersCreateWithoutWalletInput, UsersUncheckedCreateWithoutWalletInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWalletInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWalletInput, UsersUncheckedUpdateWithoutWalletInput>
  }

  export type UsersUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUpdateManyWithoutUserNestedInput
    property?: PropertyUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    point?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    fcm_token?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateManyWithoutUserNestedInput
    saveProperty?: savePropertyUncheckedUpdateManyWithoutUserNestedInput
    property?: PropertyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: string
    propertyId: string
    pointsUsed: number
    createdAt?: Date | string
  }

  export type WalletTransactionCreateManyUserInput = {
    id?: string
    type: $Enums.WalletTransactionType
    points: number
    reason?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type savePropertyCreateManyUserInput = {
    id?: string
    propertyId: string
  }

  export type PropertyCreateManyUsersInput = {
    id?: string
    propertyCategory: string
    gender?: string | null
    propertySeat?: string | null
    propertyDivision: string
    propertyDistrict: string
    propertyUpzila: string
    propertySectorNo?: string | null
    propertyRoadNo?: string | null
    propertyHouseNo?: string | null
    propertyShortAddress: string
    propertyAvailable: string
    propertyType: $Enums.PropertyType
    propertyBedroom: string
    propertyBathroom: string
    propertyBalcony?: string | null
    propertyFloor?: string | null
    propertySize?: string | null
    propertyPrice: string
    propertyPriceType: $Enums.PriceType
    propertyInclude?: PropertyCreatepropertyIncludeInput | string[]
    propertyImages?: PropertyCreatepropertyImagesInput | string[]
    propertyDescription?: string | null
    propertyBookingStatus: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    pointsUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumWalletTransactionTypeFieldUpdateOperationsInput | $Enums.WalletTransactionType
    points?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type savePropertyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutSavePropertyNestedInput
  }

  export type savePropertyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type savePropertyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutPropertyNestedInput
    saveProperty?: savePropertyUpdateOneWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUncheckedUpdateOneWithoutPropertyNestedInput
    saveProperty?: savePropertyUncheckedUpdateOneWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyCategory?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    propertySeat?: NullableStringFieldUpdateOperationsInput | string | null
    propertyDivision?: StringFieldUpdateOperationsInput | string
    propertyDistrict?: StringFieldUpdateOperationsInput | string
    propertyUpzila?: StringFieldUpdateOperationsInput | string
    propertySectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyRoadNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyHouseNo?: NullableStringFieldUpdateOperationsInput | string | null
    propertyShortAddress?: StringFieldUpdateOperationsInput | string
    propertyAvailable?: StringFieldUpdateOperationsInput | string
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    propertyBedroom?: StringFieldUpdateOperationsInput | string
    propertyBathroom?: StringFieldUpdateOperationsInput | string
    propertyBalcony?: NullableStringFieldUpdateOperationsInput | string | null
    propertyFloor?: NullableStringFieldUpdateOperationsInput | string | null
    propertySize?: NullableStringFieldUpdateOperationsInput | string | null
    propertyPrice?: StringFieldUpdateOperationsInput | string
    propertyPriceType?: EnumPriceTypeFieldUpdateOperationsInput | $Enums.PriceType
    propertyInclude?: PropertyUpdatepropertyIncludeInput | string[]
    propertyImages?: PropertyUpdatepropertyImagesInput | string[]
    propertyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    propertyBookingStatus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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