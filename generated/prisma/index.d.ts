
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Facility
 * 
 */
export type Facility = $Result.DefaultSelection<Prisma.$FacilityPayload>
/**
 * Model FacilityPatient
 * 
 */
export type FacilityPatient = $Result.DefaultSelection<Prisma.$FacilityPatientPayload>
/**
 * Model Encounter
 * 
 */
export type Encounter = $Result.DefaultSelection<Prisma.$EncounterPayload>
/**
 * Model MasterPatient
 * 
 */
export type MasterPatient = $Result.DefaultSelection<Prisma.$MasterPatientPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  UNKNOWN: 'UNKNOWN'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const BloodType: {
  A_POSITIVE: 'A_POSITIVE',
  A_NEGATIVE: 'A_NEGATIVE',
  B_POSITIVE: 'B_POSITIVE',
  B_NEGATIVE: 'B_NEGATIVE',
  AB_POSITIVE: 'AB_POSITIVE',
  AB_NEGATIVE: 'AB_NEGATIVE',
  O_POSITIVE: 'O_POSITIVE',
  O_NEGATIVE: 'O_NEGATIVE',
  UNKNOWN: 'UNKNOWN'
};

export type BloodType = (typeof BloodType)[keyof typeof BloodType]


export const MasterPatientStatus: {
  ACTIVE: 'ACTIVE',
  DECEASED: 'DECEASED',
  MERGED: 'MERGED',
  DUPLICATE: 'DUPLICATE',
  INACTIVE: 'INACTIVE'
};

export type MasterPatientStatus = (typeof MasterPatientStatus)[keyof typeof MasterPatientStatus]


export const MatchStatus: {
  PENDING: 'PENDING',
  AUTO_MATCHED: 'AUTO_MATCHED',
  MANUAL_MATCHED: 'MANUAL_MATCHED',
  NO_MATCH: 'NO_MATCH',
  REVIEW: 'REVIEW',
  REJECTED: 'REJECTED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const MatchMethod: {
  NATIONAL_ID: 'NATIONAL_ID',
  IPRS: 'IPRS',
  PROBABILISTIC: 'PROBABILISTIC',
  MANUAL: 'MANUAL'
};

export type MatchMethod = (typeof MatchMethod)[keyof typeof MatchMethod]


export const FacilityType: {
  PUBLIC_HOSPITAL: 'PUBLIC_HOSPITAL',
  PRIVATE_HOSPITAL: 'PRIVATE_HOSPITAL',
  CLINIC: 'CLINIC',
  HEALTH_CENTRE: 'HEALTH_CENTRE',
  DISPENSARY: 'DISPENSARY',
  LABORATORY: 'LABORATORY'
};

export type FacilityType = (typeof FacilityType)[keyof typeof FacilityType]


export const EncounterType: {
  OUTPATIENT: 'OUTPATIENT',
  INPATIENT: 'INPATIENT',
  EMERGENCY: 'EMERGENCY',
  VIRTUAL: 'VIRTUAL',
  HOME_VISIT: 'HOME_VISIT',
  DAY_CASE: 'DAY_CASE'
};

export type EncounterType = (typeof EncounterType)[keyof typeof EncounterType]


export const EncounterStatus: {
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED',
  UNKNOWN: 'UNKNOWN'
};

export type EncounterStatus = (typeof EncounterStatus)[keyof typeof EncounterStatus]


export const DiagnosisType: {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  COMORBIDITY: 'COMORBIDITY',
  DISCHARGE: 'DISCHARGE',
  REFERRAL: 'REFERRAL'
};

export type DiagnosisType = (typeof DiagnosisType)[keyof typeof DiagnosisType]


export const DiagnosisStatus: {
  ACTIVE: 'ACTIVE',
  RESOLVED: 'RESOLVED',
  CHRONIC: 'CHRONIC',
  RULED_OUT: 'RULED_OUT',
  REMISSION: 'REMISSION'
};

export type DiagnosisStatus = (typeof DiagnosisStatus)[keyof typeof DiagnosisStatus]


export const LabCategory: {
  HEMATOLOGY: 'HEMATOLOGY',
  BIOCHEMISTRY: 'BIOCHEMISTRY',
  MICROBIOLOGY: 'MICROBIOLOGY',
  IMMUNOLOGY: 'IMMUNOLOGY',
  PATHOLOGY: 'PATHOLOGY',
  IMAGING: 'IMAGING',
  OTHER: 'OTHER'
};

export type LabCategory = (typeof LabCategory)[keyof typeof LabCategory]


export const LabResultStatus: {
  FINAL: 'FINAL',
  PRELIMINARY: 'PRELIMINARY',
  CORRECTED: 'CORRECTED',
  CANCELLED: 'CANCELLED',
  ENTERED_IN_ERROR: 'ENTERED_IN_ERROR'
};

export type LabResultStatus = (typeof LabResultStatus)[keyof typeof LabResultStatus]


export const MedicationStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  STOPPED: 'STOPPED',
  ON_HOLD: 'ON_HOLD',
  UNKNOWN: 'UNKNOWN'
};

export type MedicationStatus = (typeof MedicationStatus)[keyof typeof MedicationStatus]


export const SyncStatus: {
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PARTIAL: 'PARTIAL'
};

export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type BloodType = $Enums.BloodType

export const BloodType: typeof $Enums.BloodType

export type MasterPatientStatus = $Enums.MasterPatientStatus

export const MasterPatientStatus: typeof $Enums.MasterPatientStatus

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type MatchMethod = $Enums.MatchMethod

export const MatchMethod: typeof $Enums.MatchMethod

export type FacilityType = $Enums.FacilityType

export const FacilityType: typeof $Enums.FacilityType

export type EncounterType = $Enums.EncounterType

export const EncounterType: typeof $Enums.EncounterType

export type EncounterStatus = $Enums.EncounterStatus

export const EncounterStatus: typeof $Enums.EncounterStatus

export type DiagnosisType = $Enums.DiagnosisType

export const DiagnosisType: typeof $Enums.DiagnosisType

export type DiagnosisStatus = $Enums.DiagnosisStatus

export const DiagnosisStatus: typeof $Enums.DiagnosisStatus

export type LabCategory = $Enums.LabCategory

export const LabCategory: typeof $Enums.LabCategory

export type LabResultStatus = $Enums.LabResultStatus

export const LabResultStatus: typeof $Enums.LabResultStatus

export type MedicationStatus = $Enums.MedicationStatus

export const MedicationStatus: typeof $Enums.MedicationStatus

export type SyncStatus = $Enums.SyncStatus

export const SyncStatus: typeof $Enums.SyncStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Facilities
 * const facilities = await prisma.facility.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Facilities
   * const facilities = await prisma.facility.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.facility`: Exposes CRUD operations for the **Facility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facilities
    * const facilities = await prisma.facility.findMany()
    * ```
    */
  get facility(): Prisma.FacilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facilityPatient`: Exposes CRUD operations for the **FacilityPatient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacilityPatients
    * const facilityPatients = await prisma.facilityPatient.findMany()
    * ```
    */
  get facilityPatient(): Prisma.FacilityPatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.encounter`: Exposes CRUD operations for the **Encounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Encounters
    * const encounters = await prisma.encounter.findMany()
    * ```
    */
  get encounter(): Prisma.EncounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.masterPatient`: Exposes CRUD operations for the **MasterPatient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterPatients
    * const masterPatients = await prisma.masterPatient.findMany()
    * ```
    */
  get masterPatient(): Prisma.MasterPatientDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Facility: 'Facility',
    FacilityPatient: 'FacilityPatient',
    Encounter: 'Encounter',
    MasterPatient: 'MasterPatient'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "facility" | "facilityPatient" | "encounter" | "masterPatient"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Facility: {
        payload: Prisma.$FacilityPayload<ExtArgs>
        fields: Prisma.FacilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findFirst: {
            args: Prisma.FacilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          findMany: {
            args: Prisma.FacilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          create: {
            args: Prisma.FacilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          createMany: {
            args: Prisma.FacilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          delete: {
            args: Prisma.FacilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          update: {
            args: Prisma.FacilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          deleteMany: {
            args: Prisma.FacilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>[]
          }
          upsert: {
            args: Prisma.FacilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPayload>
          }
          aggregate: {
            args: Prisma.FacilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacility>
          }
          groupBy: {
            args: Prisma.FacilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityCountAggregateOutputType> | number
          }
        }
      }
      FacilityPatient: {
        payload: Prisma.$FacilityPatientPayload<ExtArgs>
        fields: Prisma.FacilityPatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacilityPatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacilityPatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>
          }
          findFirst: {
            args: Prisma.FacilityPatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacilityPatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>
          }
          findMany: {
            args: Prisma.FacilityPatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>[]
          }
          create: {
            args: Prisma.FacilityPatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>
          }
          createMany: {
            args: Prisma.FacilityPatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacilityPatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>[]
          }
          delete: {
            args: Prisma.FacilityPatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>
          }
          update: {
            args: Prisma.FacilityPatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>
          }
          deleteMany: {
            args: Prisma.FacilityPatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacilityPatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacilityPatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>[]
          }
          upsert: {
            args: Prisma.FacilityPatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacilityPatientPayload>
          }
          aggregate: {
            args: Prisma.FacilityPatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacilityPatient>
          }
          groupBy: {
            args: Prisma.FacilityPatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacilityPatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacilityPatientCountArgs<ExtArgs>
            result: $Utils.Optional<FacilityPatientCountAggregateOutputType> | number
          }
        }
      }
      Encounter: {
        payload: Prisma.$EncounterPayload<ExtArgs>
        fields: Prisma.EncounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EncounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EncounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>
          }
          findFirst: {
            args: Prisma.EncounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EncounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>
          }
          findMany: {
            args: Prisma.EncounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>[]
          }
          create: {
            args: Prisma.EncounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>
          }
          createMany: {
            args: Prisma.EncounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EncounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>[]
          }
          delete: {
            args: Prisma.EncounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>
          }
          update: {
            args: Prisma.EncounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>
          }
          deleteMany: {
            args: Prisma.EncounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EncounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EncounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>[]
          }
          upsert: {
            args: Prisma.EncounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncounterPayload>
          }
          aggregate: {
            args: Prisma.EncounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEncounter>
          }
          groupBy: {
            args: Prisma.EncounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<EncounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.EncounterCountArgs<ExtArgs>
            result: $Utils.Optional<EncounterCountAggregateOutputType> | number
          }
        }
      }
      MasterPatient: {
        payload: Prisma.$MasterPatientPayload<ExtArgs>
        fields: Prisma.MasterPatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterPatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterPatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>
          }
          findFirst: {
            args: Prisma.MasterPatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterPatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>
          }
          findMany: {
            args: Prisma.MasterPatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>[]
          }
          create: {
            args: Prisma.MasterPatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>
          }
          createMany: {
            args: Prisma.MasterPatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterPatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>[]
          }
          delete: {
            args: Prisma.MasterPatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>
          }
          update: {
            args: Prisma.MasterPatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>
          }
          deleteMany: {
            args: Prisma.MasterPatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterPatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MasterPatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>[]
          }
          upsert: {
            args: Prisma.MasterPatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterPatientPayload>
          }
          aggregate: {
            args: Prisma.MasterPatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterPatient>
          }
          groupBy: {
            args: Prisma.MasterPatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterPatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterPatientCountArgs<ExtArgs>
            result: $Utils.Optional<MasterPatientCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    facility?: FacilityOmit
    facilityPatient?: FacilityPatientOmit
    encounter?: EncounterOmit
    masterPatient?: MasterPatientOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type FacilityCountOutputType
   */

  export type FacilityCountOutputType = {
    patients: number
  }

  export type FacilityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | FacilityCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityCountOutputType
     */
    select?: FacilityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityCountOutputType without action
   */
  export type FacilityCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityPatientWhereInput
  }


  /**
   * Count Type FacilityPatientCountOutputType
   */

  export type FacilityPatientCountOutputType = {
    encounters: number
  }

  export type FacilityPatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encounters?: boolean | FacilityPatientCountOutputTypeCountEncountersArgs
  }

  // Custom InputTypes
  /**
   * FacilityPatientCountOutputType without action
   */
  export type FacilityPatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatientCountOutputType
     */
    select?: FacilityPatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacilityPatientCountOutputType without action
   */
  export type FacilityPatientCountOutputTypeCountEncountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncounterWhereInput
  }


  /**
   * Count Type MasterPatientCountOutputType
   */

  export type MasterPatientCountOutputType = {
    sourcePatients: number
    encounters: number
  }

  export type MasterPatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourcePatients?: boolean | MasterPatientCountOutputTypeCountSourcePatientsArgs
    encounters?: boolean | MasterPatientCountOutputTypeCountEncountersArgs
  }

  // Custom InputTypes
  /**
   * MasterPatientCountOutputType without action
   */
  export type MasterPatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatientCountOutputType
     */
    select?: MasterPatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterPatientCountOutputType without action
   */
  export type MasterPatientCountOutputTypeCountSourcePatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityPatientWhereInput
  }

  /**
   * MasterPatientCountOutputType without action
   */
  export type MasterPatientCountOutputTypeCountEncountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncounterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Facility
   */

  export type AggregateFacility = {
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  export type FacilityMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    type: $Enums.FacilityType | null
    county: string | null
    isActive: boolean | null
    lastSyncAt: Date | null
    createdAt: Date | null
  }

  export type FacilityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    type: $Enums.FacilityType | null
    county: string | null
    isActive: boolean | null
    lastSyncAt: Date | null
    createdAt: Date | null
  }

  export type FacilityCountAggregateOutputType = {
    id: number
    name: number
    code: number
    type: number
    county: number
    isActive: number
    lastSyncAt: number
    createdAt: number
    _all: number
  }


  export type FacilityMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    county?: true
    isActive?: true
    lastSyncAt?: true
    createdAt?: true
  }

  export type FacilityMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    county?: true
    isActive?: true
    lastSyncAt?: true
    createdAt?: true
  }

  export type FacilityCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    type?: true
    county?: true
    isActive?: true
    lastSyncAt?: true
    createdAt?: true
    _all?: true
  }

  export type FacilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facility to aggregate.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facilities
    **/
    _count?: true | FacilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityMaxAggregateInputType
  }

  export type GetFacilityAggregateType<T extends FacilityAggregateArgs> = {
        [P in keyof T & keyof AggregateFacility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacility[P]>
      : GetScalarType<T[P], AggregateFacility[P]>
  }




  export type FacilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityWhereInput
    orderBy?: FacilityOrderByWithAggregationInput | FacilityOrderByWithAggregationInput[]
    by: FacilityScalarFieldEnum[] | FacilityScalarFieldEnum
    having?: FacilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityCountAggregateInputType | true
    _min?: FacilityMinAggregateInputType
    _max?: FacilityMaxAggregateInputType
  }

  export type FacilityGroupByOutputType = {
    id: string
    name: string
    code: string
    type: $Enums.FacilityType
    county: string
    isActive: boolean
    lastSyncAt: Date | null
    createdAt: Date
    _count: FacilityCountAggregateOutputType | null
    _min: FacilityMinAggregateOutputType | null
    _max: FacilityMaxAggregateOutputType | null
  }

  type GetFacilityGroupByPayload<T extends FacilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityGroupByOutputType[P]>
        }
      >
    >


  export type FacilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    county?: boolean
    isActive?: boolean
    lastSyncAt?: boolean
    createdAt?: boolean
    patients?: boolean | Facility$patientsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    county?: boolean
    isActive?: boolean
    lastSyncAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    county?: boolean
    isActive?: boolean
    lastSyncAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["facility"]>

  export type FacilitySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    type?: boolean
    county?: boolean
    isActive?: boolean
    lastSyncAt?: boolean
    createdAt?: boolean
  }

  export type FacilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "type" | "county" | "isActive" | "lastSyncAt" | "createdAt", ExtArgs["result"]["facility"]>
  export type FacilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | Facility$patientsArgs<ExtArgs>
    _count?: boolean | FacilityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FacilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FacilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Facility"
    objects: {
      patients: Prisma.$FacilityPatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      type: $Enums.FacilityType
      county: string
      isActive: boolean
      lastSyncAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["facility"]>
    composites: {}
  }

  type FacilityGetPayload<S extends boolean | null | undefined | FacilityDefaultArgs> = $Result.GetResult<Prisma.$FacilityPayload, S>

  type FacilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityCountAggregateInputType | true
    }

  export interface FacilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facility'], meta: { name: 'Facility' } }
    /**
     * Find zero or one Facility that matches the filter.
     * @param {FacilityFindUniqueArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityFindUniqueArgs>(args: SelectSubset<T, FacilityFindUniqueArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityFindUniqueOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityFindFirstArgs>(args?: SelectSubset<T, FacilityFindFirstArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindFirstOrThrowArgs} args - Arguments to find a Facility
     * @example
     * // Get one Facility
     * const facility = await prisma.facility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facilities
     * const facilities = await prisma.facility.findMany()
     * 
     * // Get first 10 Facilities
     * const facilities = await prisma.facility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityWithIdOnly = await prisma.facility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityFindManyArgs>(args?: SelectSubset<T, FacilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facility.
     * @param {FacilityCreateArgs} args - Arguments to create a Facility.
     * @example
     * // Create one Facility
     * const Facility = await prisma.facility.create({
     *   data: {
     *     // ... data to create a Facility
     *   }
     * })
     * 
     */
    create<T extends FacilityCreateArgs>(args: SelectSubset<T, FacilityCreateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facilities.
     * @param {FacilityCreateManyArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityCreateManyArgs>(args?: SelectSubset<T, FacilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facilities and returns the data saved in the database.
     * @param {FacilityCreateManyAndReturnArgs} args - Arguments to create many Facilities.
     * @example
     * // Create many Facilities
     * const facility = await prisma.facility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facility.
     * @param {FacilityDeleteArgs} args - Arguments to delete one Facility.
     * @example
     * // Delete one Facility
     * const Facility = await prisma.facility.delete({
     *   where: {
     *     // ... filter to delete one Facility
     *   }
     * })
     * 
     */
    delete<T extends FacilityDeleteArgs>(args: SelectSubset<T, FacilityDeleteArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facility.
     * @param {FacilityUpdateArgs} args - Arguments to update one Facility.
     * @example
     * // Update one Facility
     * const facility = await prisma.facility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityUpdateArgs>(args: SelectSubset<T, FacilityUpdateArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facilities.
     * @param {FacilityDeleteManyArgs} args - Arguments to filter Facilities to delete.
     * @example
     * // Delete a few Facilities
     * const { count } = await prisma.facility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityDeleteManyArgs>(args?: SelectSubset<T, FacilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityUpdateManyArgs>(args: SelectSubset<T, FacilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facilities and returns the data updated in the database.
     * @param {FacilityUpdateManyAndReturnArgs} args - Arguments to update many Facilities.
     * @example
     * // Update many Facilities
     * const facility = await prisma.facility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facilities and only return the `id`
     * const facilityWithIdOnly = await prisma.facility.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facility.
     * @param {FacilityUpsertArgs} args - Arguments to update or create a Facility.
     * @example
     * // Update or create a Facility
     * const facility = await prisma.facility.upsert({
     *   create: {
     *     // ... data to create a Facility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facility we want to update
     *   }
     * })
     */
    upsert<T extends FacilityUpsertArgs>(args: SelectSubset<T, FacilityUpsertArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityCountArgs} args - Arguments to filter Facilities to count.
     * @example
     * // Count the number of Facilities
     * const count = await prisma.facility.count({
     *   where: {
     *     // ... the filter for the Facilities we want to count
     *   }
     * })
    **/
    count<T extends FacilityCountArgs>(
      args?: Subset<T, FacilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityAggregateArgs>(args: Subset<T, FacilityAggregateArgs>): Prisma.PrismaPromise<GetFacilityAggregateType<T>>

    /**
     * Group by Facility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityGroupByArgs} args - Group by arguments.
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
      T extends FacilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityGroupByArgs['orderBy'] }
        : { orderBy?: FacilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facility model
   */
  readonly fields: FacilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends Facility$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Facility$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Facility model
   */
  interface FacilityFieldRefs {
    readonly id: FieldRef<"Facility", 'String'>
    readonly name: FieldRef<"Facility", 'String'>
    readonly code: FieldRef<"Facility", 'String'>
    readonly type: FieldRef<"Facility", 'FacilityType'>
    readonly county: FieldRef<"Facility", 'String'>
    readonly isActive: FieldRef<"Facility", 'Boolean'>
    readonly lastSyncAt: FieldRef<"Facility", 'DateTime'>
    readonly createdAt: FieldRef<"Facility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Facility findUnique
   */
  export type FacilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findUniqueOrThrow
   */
  export type FacilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility findFirst
   */
  export type FacilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findFirstOrThrow
   */
  export type FacilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facility to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility findMany
   */
  export type FacilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter, which Facilities to fetch.
     */
    where?: FacilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facilities to fetch.
     */
    orderBy?: FacilityOrderByWithRelationInput | FacilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facilities.
     */
    cursor?: FacilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facilities.
     */
    distinct?: FacilityScalarFieldEnum | FacilityScalarFieldEnum[]
  }

  /**
   * Facility create
   */
  export type FacilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Facility.
     */
    data: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
  }

  /**
   * Facility createMany
   */
  export type FacilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility createManyAndReturn
   */
  export type FacilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to create many Facilities.
     */
    data: FacilityCreateManyInput | FacilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Facility update
   */
  export type FacilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Facility.
     */
    data: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
    /**
     * Choose, which Facility to update.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility updateMany
   */
  export type FacilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility updateManyAndReturn
   */
  export type FacilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * The data used to update Facilities.
     */
    data: XOR<FacilityUpdateManyMutationInput, FacilityUncheckedUpdateManyInput>
    /**
     * Filter which Facilities to update
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to update.
     */
    limit?: number
  }

  /**
   * Facility upsert
   */
  export type FacilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Facility to update in case it exists.
     */
    where: FacilityWhereUniqueInput
    /**
     * In case the Facility found by the `where` argument doesn't exist, create a new Facility with this data.
     */
    create: XOR<FacilityCreateInput, FacilityUncheckedCreateInput>
    /**
     * In case the Facility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityUpdateInput, FacilityUncheckedUpdateInput>
  }

  /**
   * Facility delete
   */
  export type FacilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
    /**
     * Filter which Facility to delete.
     */
    where: FacilityWhereUniqueInput
  }

  /**
   * Facility deleteMany
   */
  export type FacilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facilities to delete
     */
    where?: FacilityWhereInput
    /**
     * Limit how many Facilities to delete.
     */
    limit?: number
  }

  /**
   * Facility.patients
   */
  export type Facility$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    where?: FacilityPatientWhereInput
    orderBy?: FacilityPatientOrderByWithRelationInput | FacilityPatientOrderByWithRelationInput[]
    cursor?: FacilityPatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityPatientScalarFieldEnum | FacilityPatientScalarFieldEnum[]
  }

  /**
   * Facility without action
   */
  export type FacilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facility
     */
    select?: FacilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Facility
     */
    omit?: FacilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityInclude<ExtArgs> | null
  }


  /**
   * Model FacilityPatient
   */

  export type AggregateFacilityPatient = {
    _count: FacilityPatientCountAggregateOutputType | null
    _min: FacilityPatientMinAggregateOutputType | null
    _max: FacilityPatientMaxAggregateOutputType | null
  }

  export type FacilityPatientMinAggregateOutputType = {
    id: string | null
    facilityId: string | null
    masterPatientId: string | null
    externalId: string | null
  }

  export type FacilityPatientMaxAggregateOutputType = {
    id: string | null
    facilityId: string | null
    masterPatientId: string | null
    externalId: string | null
  }

  export type FacilityPatientCountAggregateOutputType = {
    id: number
    facilityId: number
    masterPatientId: number
    externalId: number
    _all: number
  }


  export type FacilityPatientMinAggregateInputType = {
    id?: true
    facilityId?: true
    masterPatientId?: true
    externalId?: true
  }

  export type FacilityPatientMaxAggregateInputType = {
    id?: true
    facilityId?: true
    masterPatientId?: true
    externalId?: true
  }

  export type FacilityPatientCountAggregateInputType = {
    id?: true
    facilityId?: true
    masterPatientId?: true
    externalId?: true
    _all?: true
  }

  export type FacilityPatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityPatient to aggregate.
     */
    where?: FacilityPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPatients to fetch.
     */
    orderBy?: FacilityPatientOrderByWithRelationInput | FacilityPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacilityPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacilityPatients
    **/
    _count?: true | FacilityPatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacilityPatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacilityPatientMaxAggregateInputType
  }

  export type GetFacilityPatientAggregateType<T extends FacilityPatientAggregateArgs> = {
        [P in keyof T & keyof AggregateFacilityPatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacilityPatient[P]>
      : GetScalarType<T[P], AggregateFacilityPatient[P]>
  }




  export type FacilityPatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacilityPatientWhereInput
    orderBy?: FacilityPatientOrderByWithAggregationInput | FacilityPatientOrderByWithAggregationInput[]
    by: FacilityPatientScalarFieldEnum[] | FacilityPatientScalarFieldEnum
    having?: FacilityPatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacilityPatientCountAggregateInputType | true
    _min?: FacilityPatientMinAggregateInputType
    _max?: FacilityPatientMaxAggregateInputType
  }

  export type FacilityPatientGroupByOutputType = {
    id: string
    facilityId: string
    masterPatientId: string | null
    externalId: string
    _count: FacilityPatientCountAggregateOutputType | null
    _min: FacilityPatientMinAggregateOutputType | null
    _max: FacilityPatientMaxAggregateOutputType | null
  }

  type GetFacilityPatientGroupByPayload<T extends FacilityPatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacilityPatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacilityPatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacilityPatientGroupByOutputType[P]>
            : GetScalarType<T[P], FacilityPatientGroupByOutputType[P]>
        }
      >
    >


  export type FacilityPatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    masterPatientId?: boolean
    externalId?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    masterPatient?: boolean | FacilityPatient$masterPatientArgs<ExtArgs>
    encounters?: boolean | FacilityPatient$encountersArgs<ExtArgs>
    _count?: boolean | FacilityPatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facilityPatient"]>

  export type FacilityPatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    masterPatientId?: boolean
    externalId?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    masterPatient?: boolean | FacilityPatient$masterPatientArgs<ExtArgs>
  }, ExtArgs["result"]["facilityPatient"]>

  export type FacilityPatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facilityId?: boolean
    masterPatientId?: boolean
    externalId?: boolean
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    masterPatient?: boolean | FacilityPatient$masterPatientArgs<ExtArgs>
  }, ExtArgs["result"]["facilityPatient"]>

  export type FacilityPatientSelectScalar = {
    id?: boolean
    facilityId?: boolean
    masterPatientId?: boolean
    externalId?: boolean
  }

  export type FacilityPatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facilityId" | "masterPatientId" | "externalId", ExtArgs["result"]["facilityPatient"]>
  export type FacilityPatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    masterPatient?: boolean | FacilityPatient$masterPatientArgs<ExtArgs>
    encounters?: boolean | FacilityPatient$encountersArgs<ExtArgs>
    _count?: boolean | FacilityPatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacilityPatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    masterPatient?: boolean | FacilityPatient$masterPatientArgs<ExtArgs>
  }
  export type FacilityPatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facility?: boolean | FacilityDefaultArgs<ExtArgs>
    masterPatient?: boolean | FacilityPatient$masterPatientArgs<ExtArgs>
  }

  export type $FacilityPatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacilityPatient"
    objects: {
      facility: Prisma.$FacilityPayload<ExtArgs>
      masterPatient: Prisma.$MasterPatientPayload<ExtArgs> | null
      encounters: Prisma.$EncounterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facilityId: string
      masterPatientId: string | null
      externalId: string
    }, ExtArgs["result"]["facilityPatient"]>
    composites: {}
  }

  type FacilityPatientGetPayload<S extends boolean | null | undefined | FacilityPatientDefaultArgs> = $Result.GetResult<Prisma.$FacilityPatientPayload, S>

  type FacilityPatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacilityPatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacilityPatientCountAggregateInputType | true
    }

  export interface FacilityPatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacilityPatient'], meta: { name: 'FacilityPatient' } }
    /**
     * Find zero or one FacilityPatient that matches the filter.
     * @param {FacilityPatientFindUniqueArgs} args - Arguments to find a FacilityPatient
     * @example
     * // Get one FacilityPatient
     * const facilityPatient = await prisma.facilityPatient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacilityPatientFindUniqueArgs>(args: SelectSubset<T, FacilityPatientFindUniqueArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FacilityPatient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacilityPatientFindUniqueOrThrowArgs} args - Arguments to find a FacilityPatient
     * @example
     * // Get one FacilityPatient
     * const facilityPatient = await prisma.facilityPatient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacilityPatientFindUniqueOrThrowArgs>(args: SelectSubset<T, FacilityPatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityPatient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientFindFirstArgs} args - Arguments to find a FacilityPatient
     * @example
     * // Get one FacilityPatient
     * const facilityPatient = await prisma.facilityPatient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacilityPatientFindFirstArgs>(args?: SelectSubset<T, FacilityPatientFindFirstArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FacilityPatient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientFindFirstOrThrowArgs} args - Arguments to find a FacilityPatient
     * @example
     * // Get one FacilityPatient
     * const facilityPatient = await prisma.facilityPatient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacilityPatientFindFirstOrThrowArgs>(args?: SelectSubset<T, FacilityPatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FacilityPatients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacilityPatients
     * const facilityPatients = await prisma.facilityPatient.findMany()
     * 
     * // Get first 10 FacilityPatients
     * const facilityPatients = await prisma.facilityPatient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facilityPatientWithIdOnly = await prisma.facilityPatient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacilityPatientFindManyArgs>(args?: SelectSubset<T, FacilityPatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FacilityPatient.
     * @param {FacilityPatientCreateArgs} args - Arguments to create a FacilityPatient.
     * @example
     * // Create one FacilityPatient
     * const FacilityPatient = await prisma.facilityPatient.create({
     *   data: {
     *     // ... data to create a FacilityPatient
     *   }
     * })
     * 
     */
    create<T extends FacilityPatientCreateArgs>(args: SelectSubset<T, FacilityPatientCreateArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FacilityPatients.
     * @param {FacilityPatientCreateManyArgs} args - Arguments to create many FacilityPatients.
     * @example
     * // Create many FacilityPatients
     * const facilityPatient = await prisma.facilityPatient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacilityPatientCreateManyArgs>(args?: SelectSubset<T, FacilityPatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacilityPatients and returns the data saved in the database.
     * @param {FacilityPatientCreateManyAndReturnArgs} args - Arguments to create many FacilityPatients.
     * @example
     * // Create many FacilityPatients
     * const facilityPatient = await prisma.facilityPatient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacilityPatients and only return the `id`
     * const facilityPatientWithIdOnly = await prisma.facilityPatient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacilityPatientCreateManyAndReturnArgs>(args?: SelectSubset<T, FacilityPatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FacilityPatient.
     * @param {FacilityPatientDeleteArgs} args - Arguments to delete one FacilityPatient.
     * @example
     * // Delete one FacilityPatient
     * const FacilityPatient = await prisma.facilityPatient.delete({
     *   where: {
     *     // ... filter to delete one FacilityPatient
     *   }
     * })
     * 
     */
    delete<T extends FacilityPatientDeleteArgs>(args: SelectSubset<T, FacilityPatientDeleteArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FacilityPatient.
     * @param {FacilityPatientUpdateArgs} args - Arguments to update one FacilityPatient.
     * @example
     * // Update one FacilityPatient
     * const facilityPatient = await prisma.facilityPatient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacilityPatientUpdateArgs>(args: SelectSubset<T, FacilityPatientUpdateArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FacilityPatients.
     * @param {FacilityPatientDeleteManyArgs} args - Arguments to filter FacilityPatients to delete.
     * @example
     * // Delete a few FacilityPatients
     * const { count } = await prisma.facilityPatient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacilityPatientDeleteManyArgs>(args?: SelectSubset<T, FacilityPatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityPatients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacilityPatients
     * const facilityPatient = await prisma.facilityPatient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacilityPatientUpdateManyArgs>(args: SelectSubset<T, FacilityPatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacilityPatients and returns the data updated in the database.
     * @param {FacilityPatientUpdateManyAndReturnArgs} args - Arguments to update many FacilityPatients.
     * @example
     * // Update many FacilityPatients
     * const facilityPatient = await prisma.facilityPatient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FacilityPatients and only return the `id`
     * const facilityPatientWithIdOnly = await prisma.facilityPatient.updateManyAndReturn({
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
    updateManyAndReturn<T extends FacilityPatientUpdateManyAndReturnArgs>(args: SelectSubset<T, FacilityPatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FacilityPatient.
     * @param {FacilityPatientUpsertArgs} args - Arguments to update or create a FacilityPatient.
     * @example
     * // Update or create a FacilityPatient
     * const facilityPatient = await prisma.facilityPatient.upsert({
     *   create: {
     *     // ... data to create a FacilityPatient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacilityPatient we want to update
     *   }
     * })
     */
    upsert<T extends FacilityPatientUpsertArgs>(args: SelectSubset<T, FacilityPatientUpsertArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FacilityPatients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientCountArgs} args - Arguments to filter FacilityPatients to count.
     * @example
     * // Count the number of FacilityPatients
     * const count = await prisma.facilityPatient.count({
     *   where: {
     *     // ... the filter for the FacilityPatients we want to count
     *   }
     * })
    **/
    count<T extends FacilityPatientCountArgs>(
      args?: Subset<T, FacilityPatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacilityPatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacilityPatient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacilityPatientAggregateArgs>(args: Subset<T, FacilityPatientAggregateArgs>): Prisma.PrismaPromise<GetFacilityPatientAggregateType<T>>

    /**
     * Group by FacilityPatient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacilityPatientGroupByArgs} args - Group by arguments.
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
      T extends FacilityPatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacilityPatientGroupByArgs['orderBy'] }
        : { orderBy?: FacilityPatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacilityPatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacilityPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacilityPatient model
   */
  readonly fields: FacilityPatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacilityPatient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacilityPatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facility<T extends FacilityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityDefaultArgs<ExtArgs>>): Prisma__FacilityClient<$Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    masterPatient<T extends FacilityPatient$masterPatientArgs<ExtArgs> = {}>(args?: Subset<T, FacilityPatient$masterPatientArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    encounters<T extends FacilityPatient$encountersArgs<ExtArgs> = {}>(args?: Subset<T, FacilityPatient$encountersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FacilityPatient model
   */
  interface FacilityPatientFieldRefs {
    readonly id: FieldRef<"FacilityPatient", 'String'>
    readonly facilityId: FieldRef<"FacilityPatient", 'String'>
    readonly masterPatientId: FieldRef<"FacilityPatient", 'String'>
    readonly externalId: FieldRef<"FacilityPatient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FacilityPatient findUnique
   */
  export type FacilityPatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPatient to fetch.
     */
    where: FacilityPatientWhereUniqueInput
  }

  /**
   * FacilityPatient findUniqueOrThrow
   */
  export type FacilityPatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPatient to fetch.
     */
    where: FacilityPatientWhereUniqueInput
  }

  /**
   * FacilityPatient findFirst
   */
  export type FacilityPatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPatient to fetch.
     */
    where?: FacilityPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPatients to fetch.
     */
    orderBy?: FacilityPatientOrderByWithRelationInput | FacilityPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityPatients.
     */
    cursor?: FacilityPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityPatients.
     */
    distinct?: FacilityPatientScalarFieldEnum | FacilityPatientScalarFieldEnum[]
  }

  /**
   * FacilityPatient findFirstOrThrow
   */
  export type FacilityPatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPatient to fetch.
     */
    where?: FacilityPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPatients to fetch.
     */
    orderBy?: FacilityPatientOrderByWithRelationInput | FacilityPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacilityPatients.
     */
    cursor?: FacilityPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityPatients.
     */
    distinct?: FacilityPatientScalarFieldEnum | FacilityPatientScalarFieldEnum[]
  }

  /**
   * FacilityPatient findMany
   */
  export type FacilityPatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * Filter, which FacilityPatients to fetch.
     */
    where?: FacilityPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacilityPatients to fetch.
     */
    orderBy?: FacilityPatientOrderByWithRelationInput | FacilityPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacilityPatients.
     */
    cursor?: FacilityPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacilityPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacilityPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacilityPatients.
     */
    distinct?: FacilityPatientScalarFieldEnum | FacilityPatientScalarFieldEnum[]
  }

  /**
   * FacilityPatient create
   */
  export type FacilityPatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * The data needed to create a FacilityPatient.
     */
    data: XOR<FacilityPatientCreateInput, FacilityPatientUncheckedCreateInput>
  }

  /**
   * FacilityPatient createMany
   */
  export type FacilityPatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacilityPatients.
     */
    data: FacilityPatientCreateManyInput | FacilityPatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacilityPatient createManyAndReturn
   */
  export type FacilityPatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * The data used to create many FacilityPatients.
     */
    data: FacilityPatientCreateManyInput | FacilityPatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityPatient update
   */
  export type FacilityPatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * The data needed to update a FacilityPatient.
     */
    data: XOR<FacilityPatientUpdateInput, FacilityPatientUncheckedUpdateInput>
    /**
     * Choose, which FacilityPatient to update.
     */
    where: FacilityPatientWhereUniqueInput
  }

  /**
   * FacilityPatient updateMany
   */
  export type FacilityPatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacilityPatients.
     */
    data: XOR<FacilityPatientUpdateManyMutationInput, FacilityPatientUncheckedUpdateManyInput>
    /**
     * Filter which FacilityPatients to update
     */
    where?: FacilityPatientWhereInput
    /**
     * Limit how many FacilityPatients to update.
     */
    limit?: number
  }

  /**
   * FacilityPatient updateManyAndReturn
   */
  export type FacilityPatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * The data used to update FacilityPatients.
     */
    data: XOR<FacilityPatientUpdateManyMutationInput, FacilityPatientUncheckedUpdateManyInput>
    /**
     * Filter which FacilityPatients to update
     */
    where?: FacilityPatientWhereInput
    /**
     * Limit how many FacilityPatients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacilityPatient upsert
   */
  export type FacilityPatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * The filter to search for the FacilityPatient to update in case it exists.
     */
    where: FacilityPatientWhereUniqueInput
    /**
     * In case the FacilityPatient found by the `where` argument doesn't exist, create a new FacilityPatient with this data.
     */
    create: XOR<FacilityPatientCreateInput, FacilityPatientUncheckedCreateInput>
    /**
     * In case the FacilityPatient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacilityPatientUpdateInput, FacilityPatientUncheckedUpdateInput>
  }

  /**
   * FacilityPatient delete
   */
  export type FacilityPatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    /**
     * Filter which FacilityPatient to delete.
     */
    where: FacilityPatientWhereUniqueInput
  }

  /**
   * FacilityPatient deleteMany
   */
  export type FacilityPatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacilityPatients to delete
     */
    where?: FacilityPatientWhereInput
    /**
     * Limit how many FacilityPatients to delete.
     */
    limit?: number
  }

  /**
   * FacilityPatient.masterPatient
   */
  export type FacilityPatient$masterPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    where?: MasterPatientWhereInput
  }

  /**
   * FacilityPatient.encounters
   */
  export type FacilityPatient$encountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    where?: EncounterWhereInput
    orderBy?: EncounterOrderByWithRelationInput | EncounterOrderByWithRelationInput[]
    cursor?: EncounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncounterScalarFieldEnum | EncounterScalarFieldEnum[]
  }

  /**
   * FacilityPatient without action
   */
  export type FacilityPatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
  }


  /**
   * Model Encounter
   */

  export type AggregateEncounter = {
    _count: EncounterCountAggregateOutputType | null
    _min: EncounterMinAggregateOutputType | null
    _max: EncounterMaxAggregateOutputType | null
  }

  export type EncounterMinAggregateOutputType = {
    id: string | null
    masterPatientId: string | null
    facilityPatientId: string | null
    encounterDate: Date | null
  }

  export type EncounterMaxAggregateOutputType = {
    id: string | null
    masterPatientId: string | null
    facilityPatientId: string | null
    encounterDate: Date | null
  }

  export type EncounterCountAggregateOutputType = {
    id: number
    masterPatientId: number
    facilityPatientId: number
    encounterDate: number
    _all: number
  }


  export type EncounterMinAggregateInputType = {
    id?: true
    masterPatientId?: true
    facilityPatientId?: true
    encounterDate?: true
  }

  export type EncounterMaxAggregateInputType = {
    id?: true
    masterPatientId?: true
    facilityPatientId?: true
    encounterDate?: true
  }

  export type EncounterCountAggregateInputType = {
    id?: true
    masterPatientId?: true
    facilityPatientId?: true
    encounterDate?: true
    _all?: true
  }

  export type EncounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encounter to aggregate.
     */
    where?: EncounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encounters to fetch.
     */
    orderBy?: EncounterOrderByWithRelationInput | EncounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EncounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Encounters
    **/
    _count?: true | EncounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EncounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EncounterMaxAggregateInputType
  }

  export type GetEncounterAggregateType<T extends EncounterAggregateArgs> = {
        [P in keyof T & keyof AggregateEncounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEncounter[P]>
      : GetScalarType<T[P], AggregateEncounter[P]>
  }




  export type EncounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncounterWhereInput
    orderBy?: EncounterOrderByWithAggregationInput | EncounterOrderByWithAggregationInput[]
    by: EncounterScalarFieldEnum[] | EncounterScalarFieldEnum
    having?: EncounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EncounterCountAggregateInputType | true
    _min?: EncounterMinAggregateInputType
    _max?: EncounterMaxAggregateInputType
  }

  export type EncounterGroupByOutputType = {
    id: string
    masterPatientId: string
    facilityPatientId: string
    encounterDate: Date
    _count: EncounterCountAggregateOutputType | null
    _min: EncounterMinAggregateOutputType | null
    _max: EncounterMaxAggregateOutputType | null
  }

  type GetEncounterGroupByPayload<T extends EncounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EncounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EncounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EncounterGroupByOutputType[P]>
            : GetScalarType<T[P], EncounterGroupByOutputType[P]>
        }
      >
    >


  export type EncounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    masterPatientId?: boolean
    facilityPatientId?: boolean
    encounterDate?: boolean
    masterPatient?: boolean | MasterPatientDefaultArgs<ExtArgs>
    facilityPatient?: boolean | FacilityPatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encounter"]>

  export type EncounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    masterPatientId?: boolean
    facilityPatientId?: boolean
    encounterDate?: boolean
    masterPatient?: boolean | MasterPatientDefaultArgs<ExtArgs>
    facilityPatient?: boolean | FacilityPatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encounter"]>

  export type EncounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    masterPatientId?: boolean
    facilityPatientId?: boolean
    encounterDate?: boolean
    masterPatient?: boolean | MasterPatientDefaultArgs<ExtArgs>
    facilityPatient?: boolean | FacilityPatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encounter"]>

  export type EncounterSelectScalar = {
    id?: boolean
    masterPatientId?: boolean
    facilityPatientId?: boolean
    encounterDate?: boolean
  }

  export type EncounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "masterPatientId" | "facilityPatientId" | "encounterDate", ExtArgs["result"]["encounter"]>
  export type EncounterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterPatient?: boolean | MasterPatientDefaultArgs<ExtArgs>
    facilityPatient?: boolean | FacilityPatientDefaultArgs<ExtArgs>
  }
  export type EncounterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterPatient?: boolean | MasterPatientDefaultArgs<ExtArgs>
    facilityPatient?: boolean | FacilityPatientDefaultArgs<ExtArgs>
  }
  export type EncounterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterPatient?: boolean | MasterPatientDefaultArgs<ExtArgs>
    facilityPatient?: boolean | FacilityPatientDefaultArgs<ExtArgs>
  }

  export type $EncounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Encounter"
    objects: {
      masterPatient: Prisma.$MasterPatientPayload<ExtArgs>
      facilityPatient: Prisma.$FacilityPatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      masterPatientId: string
      facilityPatientId: string
      encounterDate: Date
    }, ExtArgs["result"]["encounter"]>
    composites: {}
  }

  type EncounterGetPayload<S extends boolean | null | undefined | EncounterDefaultArgs> = $Result.GetResult<Prisma.$EncounterPayload, S>

  type EncounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EncounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EncounterCountAggregateInputType | true
    }

  export interface EncounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Encounter'], meta: { name: 'Encounter' } }
    /**
     * Find zero or one Encounter that matches the filter.
     * @param {EncounterFindUniqueArgs} args - Arguments to find a Encounter
     * @example
     * // Get one Encounter
     * const encounter = await prisma.encounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EncounterFindUniqueArgs>(args: SelectSubset<T, EncounterFindUniqueArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Encounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EncounterFindUniqueOrThrowArgs} args - Arguments to find a Encounter
     * @example
     * // Get one Encounter
     * const encounter = await prisma.encounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EncounterFindUniqueOrThrowArgs>(args: SelectSubset<T, EncounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterFindFirstArgs} args - Arguments to find a Encounter
     * @example
     * // Get one Encounter
     * const encounter = await prisma.encounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EncounterFindFirstArgs>(args?: SelectSubset<T, EncounterFindFirstArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterFindFirstOrThrowArgs} args - Arguments to find a Encounter
     * @example
     * // Get one Encounter
     * const encounter = await prisma.encounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EncounterFindFirstOrThrowArgs>(args?: SelectSubset<T, EncounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Encounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Encounters
     * const encounters = await prisma.encounter.findMany()
     * 
     * // Get first 10 Encounters
     * const encounters = await prisma.encounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const encounterWithIdOnly = await prisma.encounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EncounterFindManyArgs>(args?: SelectSubset<T, EncounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Encounter.
     * @param {EncounterCreateArgs} args - Arguments to create a Encounter.
     * @example
     * // Create one Encounter
     * const Encounter = await prisma.encounter.create({
     *   data: {
     *     // ... data to create a Encounter
     *   }
     * })
     * 
     */
    create<T extends EncounterCreateArgs>(args: SelectSubset<T, EncounterCreateArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Encounters.
     * @param {EncounterCreateManyArgs} args - Arguments to create many Encounters.
     * @example
     * // Create many Encounters
     * const encounter = await prisma.encounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EncounterCreateManyArgs>(args?: SelectSubset<T, EncounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Encounters and returns the data saved in the database.
     * @param {EncounterCreateManyAndReturnArgs} args - Arguments to create many Encounters.
     * @example
     * // Create many Encounters
     * const encounter = await prisma.encounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Encounters and only return the `id`
     * const encounterWithIdOnly = await prisma.encounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EncounterCreateManyAndReturnArgs>(args?: SelectSubset<T, EncounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Encounter.
     * @param {EncounterDeleteArgs} args - Arguments to delete one Encounter.
     * @example
     * // Delete one Encounter
     * const Encounter = await prisma.encounter.delete({
     *   where: {
     *     // ... filter to delete one Encounter
     *   }
     * })
     * 
     */
    delete<T extends EncounterDeleteArgs>(args: SelectSubset<T, EncounterDeleteArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Encounter.
     * @param {EncounterUpdateArgs} args - Arguments to update one Encounter.
     * @example
     * // Update one Encounter
     * const encounter = await prisma.encounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EncounterUpdateArgs>(args: SelectSubset<T, EncounterUpdateArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Encounters.
     * @param {EncounterDeleteManyArgs} args - Arguments to filter Encounters to delete.
     * @example
     * // Delete a few Encounters
     * const { count } = await prisma.encounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EncounterDeleteManyArgs>(args?: SelectSubset<T, EncounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Encounters
     * const encounter = await prisma.encounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EncounterUpdateManyArgs>(args: SelectSubset<T, EncounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encounters and returns the data updated in the database.
     * @param {EncounterUpdateManyAndReturnArgs} args - Arguments to update many Encounters.
     * @example
     * // Update many Encounters
     * const encounter = await prisma.encounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Encounters and only return the `id`
     * const encounterWithIdOnly = await prisma.encounter.updateManyAndReturn({
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
    updateManyAndReturn<T extends EncounterUpdateManyAndReturnArgs>(args: SelectSubset<T, EncounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Encounter.
     * @param {EncounterUpsertArgs} args - Arguments to update or create a Encounter.
     * @example
     * // Update or create a Encounter
     * const encounter = await prisma.encounter.upsert({
     *   create: {
     *     // ... data to create a Encounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Encounter we want to update
     *   }
     * })
     */
    upsert<T extends EncounterUpsertArgs>(args: SelectSubset<T, EncounterUpsertArgs<ExtArgs>>): Prisma__EncounterClient<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Encounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterCountArgs} args - Arguments to filter Encounters to count.
     * @example
     * // Count the number of Encounters
     * const count = await prisma.encounter.count({
     *   where: {
     *     // ... the filter for the Encounters we want to count
     *   }
     * })
    **/
    count<T extends EncounterCountArgs>(
      args?: Subset<T, EncounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EncounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Encounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EncounterAggregateArgs>(args: Subset<T, EncounterAggregateArgs>): Prisma.PrismaPromise<GetEncounterAggregateType<T>>

    /**
     * Group by Encounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncounterGroupByArgs} args - Group by arguments.
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
      T extends EncounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EncounterGroupByArgs['orderBy'] }
        : { orderBy?: EncounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EncounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Encounter model
   */
  readonly fields: EncounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Encounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EncounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    masterPatient<T extends MasterPatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterPatientDefaultArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    facilityPatient<T extends FacilityPatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacilityPatientDefaultArgs<ExtArgs>>): Prisma__FacilityPatientClient<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Encounter model
   */
  interface EncounterFieldRefs {
    readonly id: FieldRef<"Encounter", 'String'>
    readonly masterPatientId: FieldRef<"Encounter", 'String'>
    readonly facilityPatientId: FieldRef<"Encounter", 'String'>
    readonly encounterDate: FieldRef<"Encounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Encounter findUnique
   */
  export type EncounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * Filter, which Encounter to fetch.
     */
    where: EncounterWhereUniqueInput
  }

  /**
   * Encounter findUniqueOrThrow
   */
  export type EncounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * Filter, which Encounter to fetch.
     */
    where: EncounterWhereUniqueInput
  }

  /**
   * Encounter findFirst
   */
  export type EncounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * Filter, which Encounter to fetch.
     */
    where?: EncounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encounters to fetch.
     */
    orderBy?: EncounterOrderByWithRelationInput | EncounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encounters.
     */
    cursor?: EncounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encounters.
     */
    distinct?: EncounterScalarFieldEnum | EncounterScalarFieldEnum[]
  }

  /**
   * Encounter findFirstOrThrow
   */
  export type EncounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * Filter, which Encounter to fetch.
     */
    where?: EncounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encounters to fetch.
     */
    orderBy?: EncounterOrderByWithRelationInput | EncounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encounters.
     */
    cursor?: EncounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encounters.
     */
    distinct?: EncounterScalarFieldEnum | EncounterScalarFieldEnum[]
  }

  /**
   * Encounter findMany
   */
  export type EncounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * Filter, which Encounters to fetch.
     */
    where?: EncounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encounters to fetch.
     */
    orderBy?: EncounterOrderByWithRelationInput | EncounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Encounters.
     */
    cursor?: EncounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encounters.
     */
    distinct?: EncounterScalarFieldEnum | EncounterScalarFieldEnum[]
  }

  /**
   * Encounter create
   */
  export type EncounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * The data needed to create a Encounter.
     */
    data: XOR<EncounterCreateInput, EncounterUncheckedCreateInput>
  }

  /**
   * Encounter createMany
   */
  export type EncounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Encounters.
     */
    data: EncounterCreateManyInput | EncounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Encounter createManyAndReturn
   */
  export type EncounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * The data used to create many Encounters.
     */
    data: EncounterCreateManyInput | EncounterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encounter update
   */
  export type EncounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * The data needed to update a Encounter.
     */
    data: XOR<EncounterUpdateInput, EncounterUncheckedUpdateInput>
    /**
     * Choose, which Encounter to update.
     */
    where: EncounterWhereUniqueInput
  }

  /**
   * Encounter updateMany
   */
  export type EncounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Encounters.
     */
    data: XOR<EncounterUpdateManyMutationInput, EncounterUncheckedUpdateManyInput>
    /**
     * Filter which Encounters to update
     */
    where?: EncounterWhereInput
    /**
     * Limit how many Encounters to update.
     */
    limit?: number
  }

  /**
   * Encounter updateManyAndReturn
   */
  export type EncounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * The data used to update Encounters.
     */
    data: XOR<EncounterUpdateManyMutationInput, EncounterUncheckedUpdateManyInput>
    /**
     * Filter which Encounters to update
     */
    where?: EncounterWhereInput
    /**
     * Limit how many Encounters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encounter upsert
   */
  export type EncounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * The filter to search for the Encounter to update in case it exists.
     */
    where: EncounterWhereUniqueInput
    /**
     * In case the Encounter found by the `where` argument doesn't exist, create a new Encounter with this data.
     */
    create: XOR<EncounterCreateInput, EncounterUncheckedCreateInput>
    /**
     * In case the Encounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EncounterUpdateInput, EncounterUncheckedUpdateInput>
  }

  /**
   * Encounter delete
   */
  export type EncounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    /**
     * Filter which Encounter to delete.
     */
    where: EncounterWhereUniqueInput
  }

  /**
   * Encounter deleteMany
   */
  export type EncounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encounters to delete
     */
    where?: EncounterWhereInput
    /**
     * Limit how many Encounters to delete.
     */
    limit?: number
  }

  /**
   * Encounter without action
   */
  export type EncounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
  }


  /**
   * Model MasterPatient
   */

  export type AggregateMasterPatient = {
    _count: MasterPatientCountAggregateOutputType | null
    _min: MasterPatientMinAggregateOutputType | null
    _max: MasterPatientMaxAggregateOutputType | null
  }

  export type MasterPatientMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dob: Date | null
    gender: string | null
  }

  export type MasterPatientMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    dob: Date | null
    gender: string | null
  }

  export type MasterPatientCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    dob: number
    gender: number
    _all: number
  }


  export type MasterPatientMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dob?: true
    gender?: true
  }

  export type MasterPatientMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dob?: true
    gender?: true
  }

  export type MasterPatientCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    dob?: true
    gender?: true
    _all?: true
  }

  export type MasterPatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterPatient to aggregate.
     */
    where?: MasterPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPatients to fetch.
     */
    orderBy?: MasterPatientOrderByWithRelationInput | MasterPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterPatients
    **/
    _count?: true | MasterPatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterPatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterPatientMaxAggregateInputType
  }

  export type GetMasterPatientAggregateType<T extends MasterPatientAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterPatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterPatient[P]>
      : GetScalarType<T[P], AggregateMasterPatient[P]>
  }




  export type MasterPatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterPatientWhereInput
    orderBy?: MasterPatientOrderByWithAggregationInput | MasterPatientOrderByWithAggregationInput[]
    by: MasterPatientScalarFieldEnum[] | MasterPatientScalarFieldEnum
    having?: MasterPatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterPatientCountAggregateInputType | true
    _min?: MasterPatientMinAggregateInputType
    _max?: MasterPatientMaxAggregateInputType
  }

  export type MasterPatientGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    dob: Date | null
    gender: string | null
    _count: MasterPatientCountAggregateOutputType | null
    _min: MasterPatientMinAggregateOutputType | null
    _max: MasterPatientMaxAggregateOutputType | null
  }

  type GetMasterPatientGroupByPayload<T extends MasterPatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterPatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterPatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterPatientGroupByOutputType[P]>
            : GetScalarType<T[P], MasterPatientGroupByOutputType[P]>
        }
      >
    >


  export type MasterPatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    gender?: boolean
    sourcePatients?: boolean | MasterPatient$sourcePatientsArgs<ExtArgs>
    encounters?: boolean | MasterPatient$encountersArgs<ExtArgs>
    _count?: boolean | MasterPatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterPatient"]>

  export type MasterPatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    gender?: boolean
  }, ExtArgs["result"]["masterPatient"]>

  export type MasterPatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    gender?: boolean
  }, ExtArgs["result"]["masterPatient"]>

  export type MasterPatientSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    dob?: boolean
    gender?: boolean
  }

  export type MasterPatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "dob" | "gender", ExtArgs["result"]["masterPatient"]>
  export type MasterPatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourcePatients?: boolean | MasterPatient$sourcePatientsArgs<ExtArgs>
    encounters?: boolean | MasterPatient$encountersArgs<ExtArgs>
    _count?: boolean | MasterPatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MasterPatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MasterPatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MasterPatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterPatient"
    objects: {
      sourcePatients: Prisma.$FacilityPatientPayload<ExtArgs>[]
      encounters: Prisma.$EncounterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      dob: Date | null
      gender: string | null
    }, ExtArgs["result"]["masterPatient"]>
    composites: {}
  }

  type MasterPatientGetPayload<S extends boolean | null | undefined | MasterPatientDefaultArgs> = $Result.GetResult<Prisma.$MasterPatientPayload, S>

  type MasterPatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MasterPatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MasterPatientCountAggregateInputType | true
    }

  export interface MasterPatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterPatient'], meta: { name: 'MasterPatient' } }
    /**
     * Find zero or one MasterPatient that matches the filter.
     * @param {MasterPatientFindUniqueArgs} args - Arguments to find a MasterPatient
     * @example
     * // Get one MasterPatient
     * const masterPatient = await prisma.masterPatient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterPatientFindUniqueArgs>(args: SelectSubset<T, MasterPatientFindUniqueArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MasterPatient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterPatientFindUniqueOrThrowArgs} args - Arguments to find a MasterPatient
     * @example
     * // Get one MasterPatient
     * const masterPatient = await prisma.masterPatient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterPatientFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterPatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterPatient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientFindFirstArgs} args - Arguments to find a MasterPatient
     * @example
     * // Get one MasterPatient
     * const masterPatient = await prisma.masterPatient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterPatientFindFirstArgs>(args?: SelectSubset<T, MasterPatientFindFirstArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MasterPatient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientFindFirstOrThrowArgs} args - Arguments to find a MasterPatient
     * @example
     * // Get one MasterPatient
     * const masterPatient = await prisma.masterPatient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterPatientFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterPatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MasterPatients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterPatients
     * const masterPatients = await prisma.masterPatient.findMany()
     * 
     * // Get first 10 MasterPatients
     * const masterPatients = await prisma.masterPatient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterPatientWithIdOnly = await prisma.masterPatient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterPatientFindManyArgs>(args?: SelectSubset<T, MasterPatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MasterPatient.
     * @param {MasterPatientCreateArgs} args - Arguments to create a MasterPatient.
     * @example
     * // Create one MasterPatient
     * const MasterPatient = await prisma.masterPatient.create({
     *   data: {
     *     // ... data to create a MasterPatient
     *   }
     * })
     * 
     */
    create<T extends MasterPatientCreateArgs>(args: SelectSubset<T, MasterPatientCreateArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MasterPatients.
     * @param {MasterPatientCreateManyArgs} args - Arguments to create many MasterPatients.
     * @example
     * // Create many MasterPatients
     * const masterPatient = await prisma.masterPatient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterPatientCreateManyArgs>(args?: SelectSubset<T, MasterPatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterPatients and returns the data saved in the database.
     * @param {MasterPatientCreateManyAndReturnArgs} args - Arguments to create many MasterPatients.
     * @example
     * // Create many MasterPatients
     * const masterPatient = await prisma.masterPatient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterPatients and only return the `id`
     * const masterPatientWithIdOnly = await prisma.masterPatient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterPatientCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterPatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MasterPatient.
     * @param {MasterPatientDeleteArgs} args - Arguments to delete one MasterPatient.
     * @example
     * // Delete one MasterPatient
     * const MasterPatient = await prisma.masterPatient.delete({
     *   where: {
     *     // ... filter to delete one MasterPatient
     *   }
     * })
     * 
     */
    delete<T extends MasterPatientDeleteArgs>(args: SelectSubset<T, MasterPatientDeleteArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MasterPatient.
     * @param {MasterPatientUpdateArgs} args - Arguments to update one MasterPatient.
     * @example
     * // Update one MasterPatient
     * const masterPatient = await prisma.masterPatient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterPatientUpdateArgs>(args: SelectSubset<T, MasterPatientUpdateArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MasterPatients.
     * @param {MasterPatientDeleteManyArgs} args - Arguments to filter MasterPatients to delete.
     * @example
     * // Delete a few MasterPatients
     * const { count } = await prisma.masterPatient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterPatientDeleteManyArgs>(args?: SelectSubset<T, MasterPatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterPatients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterPatients
     * const masterPatient = await prisma.masterPatient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterPatientUpdateManyArgs>(args: SelectSubset<T, MasterPatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterPatients and returns the data updated in the database.
     * @param {MasterPatientUpdateManyAndReturnArgs} args - Arguments to update many MasterPatients.
     * @example
     * // Update many MasterPatients
     * const masterPatient = await prisma.masterPatient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MasterPatients and only return the `id`
     * const masterPatientWithIdOnly = await prisma.masterPatient.updateManyAndReturn({
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
    updateManyAndReturn<T extends MasterPatientUpdateManyAndReturnArgs>(args: SelectSubset<T, MasterPatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MasterPatient.
     * @param {MasterPatientUpsertArgs} args - Arguments to update or create a MasterPatient.
     * @example
     * // Update or create a MasterPatient
     * const masterPatient = await prisma.masterPatient.upsert({
     *   create: {
     *     // ... data to create a MasterPatient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterPatient we want to update
     *   }
     * })
     */
    upsert<T extends MasterPatientUpsertArgs>(args: SelectSubset<T, MasterPatientUpsertArgs<ExtArgs>>): Prisma__MasterPatientClient<$Result.GetResult<Prisma.$MasterPatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MasterPatients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientCountArgs} args - Arguments to filter MasterPatients to count.
     * @example
     * // Count the number of MasterPatients
     * const count = await prisma.masterPatient.count({
     *   where: {
     *     // ... the filter for the MasterPatients we want to count
     *   }
     * })
    **/
    count<T extends MasterPatientCountArgs>(
      args?: Subset<T, MasterPatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterPatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterPatient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterPatientAggregateArgs>(args: Subset<T, MasterPatientAggregateArgs>): Prisma.PrismaPromise<GetMasterPatientAggregateType<T>>

    /**
     * Group by MasterPatient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterPatientGroupByArgs} args - Group by arguments.
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
      T extends MasterPatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterPatientGroupByArgs['orderBy'] }
        : { orderBy?: MasterPatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterPatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterPatient model
   */
  readonly fields: MasterPatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterPatient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterPatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourcePatients<T extends MasterPatient$sourcePatientsArgs<ExtArgs> = {}>(args?: Subset<T, MasterPatient$sourcePatientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacilityPatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    encounters<T extends MasterPatient$encountersArgs<ExtArgs> = {}>(args?: Subset<T, MasterPatient$encountersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MasterPatient model
   */
  interface MasterPatientFieldRefs {
    readonly id: FieldRef<"MasterPatient", 'String'>
    readonly firstName: FieldRef<"MasterPatient", 'String'>
    readonly lastName: FieldRef<"MasterPatient", 'String'>
    readonly dob: FieldRef<"MasterPatient", 'DateTime'>
    readonly gender: FieldRef<"MasterPatient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MasterPatient findUnique
   */
  export type MasterPatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * Filter, which MasterPatient to fetch.
     */
    where: MasterPatientWhereUniqueInput
  }

  /**
   * MasterPatient findUniqueOrThrow
   */
  export type MasterPatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * Filter, which MasterPatient to fetch.
     */
    where: MasterPatientWhereUniqueInput
  }

  /**
   * MasterPatient findFirst
   */
  export type MasterPatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * Filter, which MasterPatient to fetch.
     */
    where?: MasterPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPatients to fetch.
     */
    orderBy?: MasterPatientOrderByWithRelationInput | MasterPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterPatients.
     */
    cursor?: MasterPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterPatients.
     */
    distinct?: MasterPatientScalarFieldEnum | MasterPatientScalarFieldEnum[]
  }

  /**
   * MasterPatient findFirstOrThrow
   */
  export type MasterPatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * Filter, which MasterPatient to fetch.
     */
    where?: MasterPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPatients to fetch.
     */
    orderBy?: MasterPatientOrderByWithRelationInput | MasterPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterPatients.
     */
    cursor?: MasterPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterPatients.
     */
    distinct?: MasterPatientScalarFieldEnum | MasterPatientScalarFieldEnum[]
  }

  /**
   * MasterPatient findMany
   */
  export type MasterPatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * Filter, which MasterPatients to fetch.
     */
    where?: MasterPatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterPatients to fetch.
     */
    orderBy?: MasterPatientOrderByWithRelationInput | MasterPatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterPatients.
     */
    cursor?: MasterPatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterPatients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterPatients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterPatients.
     */
    distinct?: MasterPatientScalarFieldEnum | MasterPatientScalarFieldEnum[]
  }

  /**
   * MasterPatient create
   */
  export type MasterPatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterPatient.
     */
    data: XOR<MasterPatientCreateInput, MasterPatientUncheckedCreateInput>
  }

  /**
   * MasterPatient createMany
   */
  export type MasterPatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterPatients.
     */
    data: MasterPatientCreateManyInput | MasterPatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterPatient createManyAndReturn
   */
  export type MasterPatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * The data used to create many MasterPatients.
     */
    data: MasterPatientCreateManyInput | MasterPatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterPatient update
   */
  export type MasterPatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterPatient.
     */
    data: XOR<MasterPatientUpdateInput, MasterPatientUncheckedUpdateInput>
    /**
     * Choose, which MasterPatient to update.
     */
    where: MasterPatientWhereUniqueInput
  }

  /**
   * MasterPatient updateMany
   */
  export type MasterPatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterPatients.
     */
    data: XOR<MasterPatientUpdateManyMutationInput, MasterPatientUncheckedUpdateManyInput>
    /**
     * Filter which MasterPatients to update
     */
    where?: MasterPatientWhereInput
    /**
     * Limit how many MasterPatients to update.
     */
    limit?: number
  }

  /**
   * MasterPatient updateManyAndReturn
   */
  export type MasterPatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * The data used to update MasterPatients.
     */
    data: XOR<MasterPatientUpdateManyMutationInput, MasterPatientUncheckedUpdateManyInput>
    /**
     * Filter which MasterPatients to update
     */
    where?: MasterPatientWhereInput
    /**
     * Limit how many MasterPatients to update.
     */
    limit?: number
  }

  /**
   * MasterPatient upsert
   */
  export type MasterPatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterPatient to update in case it exists.
     */
    where: MasterPatientWhereUniqueInput
    /**
     * In case the MasterPatient found by the `where` argument doesn't exist, create a new MasterPatient with this data.
     */
    create: XOR<MasterPatientCreateInput, MasterPatientUncheckedCreateInput>
    /**
     * In case the MasterPatient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterPatientUpdateInput, MasterPatientUncheckedUpdateInput>
  }

  /**
   * MasterPatient delete
   */
  export type MasterPatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
    /**
     * Filter which MasterPatient to delete.
     */
    where: MasterPatientWhereUniqueInput
  }

  /**
   * MasterPatient deleteMany
   */
  export type MasterPatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterPatients to delete
     */
    where?: MasterPatientWhereInput
    /**
     * Limit how many MasterPatients to delete.
     */
    limit?: number
  }

  /**
   * MasterPatient.sourcePatients
   */
  export type MasterPatient$sourcePatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacilityPatient
     */
    select?: FacilityPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FacilityPatient
     */
    omit?: FacilityPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacilityPatientInclude<ExtArgs> | null
    where?: FacilityPatientWhereInput
    orderBy?: FacilityPatientOrderByWithRelationInput | FacilityPatientOrderByWithRelationInput[]
    cursor?: FacilityPatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacilityPatientScalarFieldEnum | FacilityPatientScalarFieldEnum[]
  }

  /**
   * MasterPatient.encounters
   */
  export type MasterPatient$encountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encounter
     */
    select?: EncounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encounter
     */
    omit?: EncounterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncounterInclude<ExtArgs> | null
    where?: EncounterWhereInput
    orderBy?: EncounterOrderByWithRelationInput | EncounterOrderByWithRelationInput[]
    cursor?: EncounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncounterScalarFieldEnum | EncounterScalarFieldEnum[]
  }

  /**
   * MasterPatient without action
   */
  export type MasterPatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterPatient
     */
    select?: MasterPatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MasterPatient
     */
    omit?: MasterPatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterPatientInclude<ExtArgs> | null
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


  export const FacilityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    type: 'type',
    county: 'county',
    isActive: 'isActive',
    lastSyncAt: 'lastSyncAt',
    createdAt: 'createdAt'
  };

  export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum]


  export const FacilityPatientScalarFieldEnum: {
    id: 'id',
    facilityId: 'facilityId',
    masterPatientId: 'masterPatientId',
    externalId: 'externalId'
  };

  export type FacilityPatientScalarFieldEnum = (typeof FacilityPatientScalarFieldEnum)[keyof typeof FacilityPatientScalarFieldEnum]


  export const EncounterScalarFieldEnum: {
    id: 'id',
    masterPatientId: 'masterPatientId',
    facilityPatientId: 'facilityPatientId',
    encounterDate: 'encounterDate'
  };

  export type EncounterScalarFieldEnum = (typeof EncounterScalarFieldEnum)[keyof typeof EncounterScalarFieldEnum]


  export const MasterPatientScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    dob: 'dob',
    gender: 'gender'
  };

  export type MasterPatientScalarFieldEnum = (typeof MasterPatientScalarFieldEnum)[keyof typeof MasterPatientScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'FacilityType'
   */
  export type EnumFacilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityType'>
    


  /**
   * Reference to a field of type 'FacilityType[]'
   */
  export type ListEnumFacilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type FacilityWhereInput = {
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    id?: UuidFilter<"Facility"> | string
    name?: StringFilter<"Facility"> | string
    code?: StringFilter<"Facility"> | string
    type?: EnumFacilityTypeFilter<"Facility"> | $Enums.FacilityType
    county?: StringFilter<"Facility"> | string
    isActive?: BoolFilter<"Facility"> | boolean
    lastSyncAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    patients?: FacilityPatientListRelationFilter
  }

  export type FacilityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    county?: SortOrder
    isActive?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    patients?: FacilityPatientOrderByRelationAggregateInput
  }

  export type FacilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: FacilityWhereInput | FacilityWhereInput[]
    OR?: FacilityWhereInput[]
    NOT?: FacilityWhereInput | FacilityWhereInput[]
    name?: StringFilter<"Facility"> | string
    type?: EnumFacilityTypeFilter<"Facility"> | $Enums.FacilityType
    county?: StringFilter<"Facility"> | string
    isActive?: BoolFilter<"Facility"> | boolean
    lastSyncAt?: DateTimeNullableFilter<"Facility"> | Date | string | null
    createdAt?: DateTimeFilter<"Facility"> | Date | string
    patients?: FacilityPatientListRelationFilter
  }, "id" | "code">

  export type FacilityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    county?: SortOrder
    isActive?: SortOrder
    lastSyncAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FacilityCountOrderByAggregateInput
    _max?: FacilityMaxOrderByAggregateInput
    _min?: FacilityMinOrderByAggregateInput
  }

  export type FacilityScalarWhereWithAggregatesInput = {
    AND?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    OR?: FacilityScalarWhereWithAggregatesInput[]
    NOT?: FacilityScalarWhereWithAggregatesInput | FacilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Facility"> | string
    name?: StringWithAggregatesFilter<"Facility"> | string
    code?: StringWithAggregatesFilter<"Facility"> | string
    type?: EnumFacilityTypeWithAggregatesFilter<"Facility"> | $Enums.FacilityType
    county?: StringWithAggregatesFilter<"Facility"> | string
    isActive?: BoolWithAggregatesFilter<"Facility"> | boolean
    lastSyncAt?: DateTimeNullableWithAggregatesFilter<"Facility"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Facility"> | Date | string
  }

  export type FacilityPatientWhereInput = {
    AND?: FacilityPatientWhereInput | FacilityPatientWhereInput[]
    OR?: FacilityPatientWhereInput[]
    NOT?: FacilityPatientWhereInput | FacilityPatientWhereInput[]
    id?: UuidFilter<"FacilityPatient"> | string
    facilityId?: UuidFilter<"FacilityPatient"> | string
    masterPatientId?: UuidNullableFilter<"FacilityPatient"> | string | null
    externalId?: StringFilter<"FacilityPatient"> | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
    masterPatient?: XOR<MasterPatientNullableScalarRelationFilter, MasterPatientWhereInput> | null
    encounters?: EncounterListRelationFilter
  }

  export type FacilityPatientOrderByWithRelationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    masterPatientId?: SortOrderInput | SortOrder
    externalId?: SortOrder
    facility?: FacilityOrderByWithRelationInput
    masterPatient?: MasterPatientOrderByWithRelationInput
    encounters?: EncounterOrderByRelationAggregateInput
  }

  export type FacilityPatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacilityPatientWhereInput | FacilityPatientWhereInput[]
    OR?: FacilityPatientWhereInput[]
    NOT?: FacilityPatientWhereInput | FacilityPatientWhereInput[]
    facilityId?: UuidFilter<"FacilityPatient"> | string
    masterPatientId?: UuidNullableFilter<"FacilityPatient"> | string | null
    externalId?: StringFilter<"FacilityPatient"> | string
    facility?: XOR<FacilityScalarRelationFilter, FacilityWhereInput>
    masterPatient?: XOR<MasterPatientNullableScalarRelationFilter, MasterPatientWhereInput> | null
    encounters?: EncounterListRelationFilter
  }, "id">

  export type FacilityPatientOrderByWithAggregationInput = {
    id?: SortOrder
    facilityId?: SortOrder
    masterPatientId?: SortOrderInput | SortOrder
    externalId?: SortOrder
    _count?: FacilityPatientCountOrderByAggregateInput
    _max?: FacilityPatientMaxOrderByAggregateInput
    _min?: FacilityPatientMinOrderByAggregateInput
  }

  export type FacilityPatientScalarWhereWithAggregatesInput = {
    AND?: FacilityPatientScalarWhereWithAggregatesInput | FacilityPatientScalarWhereWithAggregatesInput[]
    OR?: FacilityPatientScalarWhereWithAggregatesInput[]
    NOT?: FacilityPatientScalarWhereWithAggregatesInput | FacilityPatientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FacilityPatient"> | string
    facilityId?: UuidWithAggregatesFilter<"FacilityPatient"> | string
    masterPatientId?: UuidNullableWithAggregatesFilter<"FacilityPatient"> | string | null
    externalId?: StringWithAggregatesFilter<"FacilityPatient"> | string
  }

  export type EncounterWhereInput = {
    AND?: EncounterWhereInput | EncounterWhereInput[]
    OR?: EncounterWhereInput[]
    NOT?: EncounterWhereInput | EncounterWhereInput[]
    id?: UuidFilter<"Encounter"> | string
    masterPatientId?: UuidFilter<"Encounter"> | string
    facilityPatientId?: UuidFilter<"Encounter"> | string
    encounterDate?: DateTimeFilter<"Encounter"> | Date | string
    masterPatient?: XOR<MasterPatientScalarRelationFilter, MasterPatientWhereInput>
    facilityPatient?: XOR<FacilityPatientScalarRelationFilter, FacilityPatientWhereInput>
  }

  export type EncounterOrderByWithRelationInput = {
    id?: SortOrder
    masterPatientId?: SortOrder
    facilityPatientId?: SortOrder
    encounterDate?: SortOrder
    masterPatient?: MasterPatientOrderByWithRelationInput
    facilityPatient?: FacilityPatientOrderByWithRelationInput
  }

  export type EncounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EncounterWhereInput | EncounterWhereInput[]
    OR?: EncounterWhereInput[]
    NOT?: EncounterWhereInput | EncounterWhereInput[]
    masterPatientId?: UuidFilter<"Encounter"> | string
    facilityPatientId?: UuidFilter<"Encounter"> | string
    encounterDate?: DateTimeFilter<"Encounter"> | Date | string
    masterPatient?: XOR<MasterPatientScalarRelationFilter, MasterPatientWhereInput>
    facilityPatient?: XOR<FacilityPatientScalarRelationFilter, FacilityPatientWhereInput>
  }, "id">

  export type EncounterOrderByWithAggregationInput = {
    id?: SortOrder
    masterPatientId?: SortOrder
    facilityPatientId?: SortOrder
    encounterDate?: SortOrder
    _count?: EncounterCountOrderByAggregateInput
    _max?: EncounterMaxOrderByAggregateInput
    _min?: EncounterMinOrderByAggregateInput
  }

  export type EncounterScalarWhereWithAggregatesInput = {
    AND?: EncounterScalarWhereWithAggregatesInput | EncounterScalarWhereWithAggregatesInput[]
    OR?: EncounterScalarWhereWithAggregatesInput[]
    NOT?: EncounterScalarWhereWithAggregatesInput | EncounterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Encounter"> | string
    masterPatientId?: UuidWithAggregatesFilter<"Encounter"> | string
    facilityPatientId?: UuidWithAggregatesFilter<"Encounter"> | string
    encounterDate?: DateTimeWithAggregatesFilter<"Encounter"> | Date | string
  }

  export type MasterPatientWhereInput = {
    AND?: MasterPatientWhereInput | MasterPatientWhereInput[]
    OR?: MasterPatientWhereInput[]
    NOT?: MasterPatientWhereInput | MasterPatientWhereInput[]
    id?: UuidFilter<"MasterPatient"> | string
    firstName?: StringFilter<"MasterPatient"> | string
    lastName?: StringFilter<"MasterPatient"> | string
    dob?: DateTimeNullableFilter<"MasterPatient"> | Date | string | null
    gender?: StringNullableFilter<"MasterPatient"> | string | null
    sourcePatients?: FacilityPatientListRelationFilter
    encounters?: EncounterListRelationFilter
  }

  export type MasterPatientOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    sourcePatients?: FacilityPatientOrderByRelationAggregateInput
    encounters?: EncounterOrderByRelationAggregateInput
  }

  export type MasterPatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MasterPatientWhereInput | MasterPatientWhereInput[]
    OR?: MasterPatientWhereInput[]
    NOT?: MasterPatientWhereInput | MasterPatientWhereInput[]
    firstName?: StringFilter<"MasterPatient"> | string
    lastName?: StringFilter<"MasterPatient"> | string
    dob?: DateTimeNullableFilter<"MasterPatient"> | Date | string | null
    gender?: StringNullableFilter<"MasterPatient"> | string | null
    sourcePatients?: FacilityPatientListRelationFilter
    encounters?: EncounterListRelationFilter
  }, "id">

  export type MasterPatientOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: MasterPatientCountOrderByAggregateInput
    _max?: MasterPatientMaxOrderByAggregateInput
    _min?: MasterPatientMinOrderByAggregateInput
  }

  export type MasterPatientScalarWhereWithAggregatesInput = {
    AND?: MasterPatientScalarWhereWithAggregatesInput | MasterPatientScalarWhereWithAggregatesInput[]
    OR?: MasterPatientScalarWhereWithAggregatesInput[]
    NOT?: MasterPatientScalarWhereWithAggregatesInput | MasterPatientScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MasterPatient"> | string
    firstName?: StringWithAggregatesFilter<"MasterPatient"> | string
    lastName?: StringWithAggregatesFilter<"MasterPatient"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"MasterPatient"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"MasterPatient"> | string | null
  }

  export type FacilityCreateInput = {
    id?: string
    name: string
    code: string
    type: $Enums.FacilityType
    county: string
    isActive?: boolean
    lastSyncAt?: Date | string | null
    createdAt?: Date | string
    patients?: FacilityPatientCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    type: $Enums.FacilityType
    county: string
    isActive?: boolean
    lastSyncAt?: Date | string | null
    createdAt?: Date | string
    patients?: FacilityPatientUncheckedCreateNestedManyWithoutFacilityInput
  }

  export type FacilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    county?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: FacilityPatientUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    county?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: FacilityPatientUncheckedUpdateManyWithoutFacilityNestedInput
  }

  export type FacilityCreateManyInput = {
    id?: string
    name: string
    code: string
    type: $Enums.FacilityType
    county: string
    isActive?: boolean
    lastSyncAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FacilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    county?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    county?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPatientCreateInput = {
    id?: string
    externalId: string
    facility: FacilityCreateNestedOneWithoutPatientsInput
    masterPatient?: MasterPatientCreateNestedOneWithoutSourcePatientsInput
    encounters?: EncounterCreateNestedManyWithoutFacilityPatientInput
  }

  export type FacilityPatientUncheckedCreateInput = {
    id?: string
    facilityId: string
    masterPatientId?: string | null
    externalId: string
    encounters?: EncounterUncheckedCreateNestedManyWithoutFacilityPatientInput
  }

  export type FacilityPatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    facility?: FacilityUpdateOneRequiredWithoutPatientsNestedInput
    masterPatient?: MasterPatientUpdateOneWithoutSourcePatientsNestedInput
    encounters?: EncounterUpdateManyWithoutFacilityPatientNestedInput
  }

  export type FacilityPatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    masterPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    encounters?: EncounterUncheckedUpdateManyWithoutFacilityPatientNestedInput
  }

  export type FacilityPatientCreateManyInput = {
    id?: string
    facilityId: string
    masterPatientId?: string | null
    externalId: string
  }

  export type FacilityPatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type FacilityPatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    masterPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type EncounterCreateInput = {
    id?: string
    encounterDate?: Date | string
    masterPatient: MasterPatientCreateNestedOneWithoutEncountersInput
    facilityPatient: FacilityPatientCreateNestedOneWithoutEncountersInput
  }

  export type EncounterUncheckedCreateInput = {
    id?: string
    masterPatientId: string
    facilityPatientId: string
    encounterDate?: Date | string
  }

  export type EncounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    masterPatient?: MasterPatientUpdateOneRequiredWithoutEncountersNestedInput
    facilityPatient?: FacilityPatientUpdateOneRequiredWithoutEncountersNestedInput
  }

  export type EncounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPatientId?: StringFieldUpdateOperationsInput | string
    facilityPatientId?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncounterCreateManyInput = {
    id?: string
    masterPatientId: string
    facilityPatientId: string
    encounterDate?: Date | string
  }

  export type EncounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPatientId?: StringFieldUpdateOperationsInput | string
    facilityPatientId?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterPatientCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
    sourcePatients?: FacilityPatientCreateNestedManyWithoutMasterPatientInput
    encounters?: EncounterCreateNestedManyWithoutMasterPatientInput
  }

  export type MasterPatientUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
    sourcePatients?: FacilityPatientUncheckedCreateNestedManyWithoutMasterPatientInput
    encounters?: EncounterUncheckedCreateNestedManyWithoutMasterPatientInput
  }

  export type MasterPatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePatients?: FacilityPatientUpdateManyWithoutMasterPatientNestedInput
    encounters?: EncounterUpdateManyWithoutMasterPatientNestedInput
  }

  export type MasterPatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePatients?: FacilityPatientUncheckedUpdateManyWithoutMasterPatientNestedInput
    encounters?: EncounterUncheckedUpdateManyWithoutMasterPatientNestedInput
  }

  export type MasterPatientCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
  }

  export type MasterPatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MasterPatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumFacilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeFilter<$PrismaModel> | $Enums.FacilityType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type FacilityPatientListRelationFilter = {
    every?: FacilityPatientWhereInput
    some?: FacilityPatientWhereInput
    none?: FacilityPatientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacilityPatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    county?: SortOrder
    isActive?: SortOrder
    lastSyncAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    county?: SortOrder
    isActive?: SortOrder
    lastSyncAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FacilityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    type?: SortOrder
    county?: SortOrder
    isActive?: SortOrder
    lastSyncAt?: SortOrder
    createdAt?: SortOrder
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

  export type EnumFacilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacilityTypeFilter<$PrismaModel>
    _max?: NestedEnumFacilityTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type FacilityScalarRelationFilter = {
    is?: FacilityWhereInput
    isNot?: FacilityWhereInput
  }

  export type MasterPatientNullableScalarRelationFilter = {
    is?: MasterPatientWhereInput | null
    isNot?: MasterPatientWhereInput | null
  }

  export type EncounterListRelationFilter = {
    every?: EncounterWhereInput
    some?: EncounterWhereInput
    none?: EncounterWhereInput
  }

  export type EncounterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacilityPatientCountOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    masterPatientId?: SortOrder
    externalId?: SortOrder
  }

  export type FacilityPatientMaxOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    masterPatientId?: SortOrder
    externalId?: SortOrder
  }

  export type FacilityPatientMinOrderByAggregateInput = {
    id?: SortOrder
    facilityId?: SortOrder
    masterPatientId?: SortOrder
    externalId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MasterPatientScalarRelationFilter = {
    is?: MasterPatientWhereInput
    isNot?: MasterPatientWhereInput
  }

  export type FacilityPatientScalarRelationFilter = {
    is?: FacilityPatientWhereInput
    isNot?: FacilityPatientWhereInput
  }

  export type EncounterCountOrderByAggregateInput = {
    id?: SortOrder
    masterPatientId?: SortOrder
    facilityPatientId?: SortOrder
    encounterDate?: SortOrder
  }

  export type EncounterMaxOrderByAggregateInput = {
    id?: SortOrder
    masterPatientId?: SortOrder
    facilityPatientId?: SortOrder
    encounterDate?: SortOrder
  }

  export type EncounterMinOrderByAggregateInput = {
    id?: SortOrder
    masterPatientId?: SortOrder
    facilityPatientId?: SortOrder
    encounterDate?: SortOrder
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

  export type MasterPatientCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
  }

  export type MasterPatientMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
  }

  export type MasterPatientMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
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

  export type FacilityPatientCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityPatientCreateWithoutFacilityInput, FacilityPatientUncheckedCreateWithoutFacilityInput> | FacilityPatientCreateWithoutFacilityInput[] | FacilityPatientUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutFacilityInput | FacilityPatientCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityPatientCreateManyFacilityInputEnvelope
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
  }

  export type FacilityPatientUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: XOR<FacilityPatientCreateWithoutFacilityInput, FacilityPatientUncheckedCreateWithoutFacilityInput> | FacilityPatientCreateWithoutFacilityInput[] | FacilityPatientUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutFacilityInput | FacilityPatientCreateOrConnectWithoutFacilityInput[]
    createMany?: FacilityPatientCreateManyFacilityInputEnvelope
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumFacilityTypeFieldUpdateOperationsInput = {
    set?: $Enums.FacilityType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FacilityPatientUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityPatientCreateWithoutFacilityInput, FacilityPatientUncheckedCreateWithoutFacilityInput> | FacilityPatientCreateWithoutFacilityInput[] | FacilityPatientUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutFacilityInput | FacilityPatientCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityPatientUpsertWithWhereUniqueWithoutFacilityInput | FacilityPatientUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityPatientCreateManyFacilityInputEnvelope
    set?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    disconnect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    delete?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    update?: FacilityPatientUpdateWithWhereUniqueWithoutFacilityInput | FacilityPatientUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityPatientUpdateManyWithWhereWithoutFacilityInput | FacilityPatientUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityPatientScalarWhereInput | FacilityPatientScalarWhereInput[]
  }

  export type FacilityPatientUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: XOR<FacilityPatientCreateWithoutFacilityInput, FacilityPatientUncheckedCreateWithoutFacilityInput> | FacilityPatientCreateWithoutFacilityInput[] | FacilityPatientUncheckedCreateWithoutFacilityInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutFacilityInput | FacilityPatientCreateOrConnectWithoutFacilityInput[]
    upsert?: FacilityPatientUpsertWithWhereUniqueWithoutFacilityInput | FacilityPatientUpsertWithWhereUniqueWithoutFacilityInput[]
    createMany?: FacilityPatientCreateManyFacilityInputEnvelope
    set?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    disconnect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    delete?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    update?: FacilityPatientUpdateWithWhereUniqueWithoutFacilityInput | FacilityPatientUpdateWithWhereUniqueWithoutFacilityInput[]
    updateMany?: FacilityPatientUpdateManyWithWhereWithoutFacilityInput | FacilityPatientUpdateManyWithWhereWithoutFacilityInput[]
    deleteMany?: FacilityPatientScalarWhereInput | FacilityPatientScalarWhereInput[]
  }

  export type FacilityCreateNestedOneWithoutPatientsInput = {
    create?: XOR<FacilityCreateWithoutPatientsInput, FacilityUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutPatientsInput
    connect?: FacilityWhereUniqueInput
  }

  export type MasterPatientCreateNestedOneWithoutSourcePatientsInput = {
    create?: XOR<MasterPatientCreateWithoutSourcePatientsInput, MasterPatientUncheckedCreateWithoutSourcePatientsInput>
    connectOrCreate?: MasterPatientCreateOrConnectWithoutSourcePatientsInput
    connect?: MasterPatientWhereUniqueInput
  }

  export type EncounterCreateNestedManyWithoutFacilityPatientInput = {
    create?: XOR<EncounterCreateWithoutFacilityPatientInput, EncounterUncheckedCreateWithoutFacilityPatientInput> | EncounterCreateWithoutFacilityPatientInput[] | EncounterUncheckedCreateWithoutFacilityPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutFacilityPatientInput | EncounterCreateOrConnectWithoutFacilityPatientInput[]
    createMany?: EncounterCreateManyFacilityPatientInputEnvelope
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
  }

  export type EncounterUncheckedCreateNestedManyWithoutFacilityPatientInput = {
    create?: XOR<EncounterCreateWithoutFacilityPatientInput, EncounterUncheckedCreateWithoutFacilityPatientInput> | EncounterCreateWithoutFacilityPatientInput[] | EncounterUncheckedCreateWithoutFacilityPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutFacilityPatientInput | EncounterCreateOrConnectWithoutFacilityPatientInput[]
    createMany?: EncounterCreateManyFacilityPatientInputEnvelope
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
  }

  export type FacilityUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<FacilityCreateWithoutPatientsInput, FacilityUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: FacilityCreateOrConnectWithoutPatientsInput
    upsert?: FacilityUpsertWithoutPatientsInput
    connect?: FacilityWhereUniqueInput
    update?: XOR<XOR<FacilityUpdateToOneWithWhereWithoutPatientsInput, FacilityUpdateWithoutPatientsInput>, FacilityUncheckedUpdateWithoutPatientsInput>
  }

  export type MasterPatientUpdateOneWithoutSourcePatientsNestedInput = {
    create?: XOR<MasterPatientCreateWithoutSourcePatientsInput, MasterPatientUncheckedCreateWithoutSourcePatientsInput>
    connectOrCreate?: MasterPatientCreateOrConnectWithoutSourcePatientsInput
    upsert?: MasterPatientUpsertWithoutSourcePatientsInput
    disconnect?: MasterPatientWhereInput | boolean
    delete?: MasterPatientWhereInput | boolean
    connect?: MasterPatientWhereUniqueInput
    update?: XOR<XOR<MasterPatientUpdateToOneWithWhereWithoutSourcePatientsInput, MasterPatientUpdateWithoutSourcePatientsInput>, MasterPatientUncheckedUpdateWithoutSourcePatientsInput>
  }

  export type EncounterUpdateManyWithoutFacilityPatientNestedInput = {
    create?: XOR<EncounterCreateWithoutFacilityPatientInput, EncounterUncheckedCreateWithoutFacilityPatientInput> | EncounterCreateWithoutFacilityPatientInput[] | EncounterUncheckedCreateWithoutFacilityPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutFacilityPatientInput | EncounterCreateOrConnectWithoutFacilityPatientInput[]
    upsert?: EncounterUpsertWithWhereUniqueWithoutFacilityPatientInput | EncounterUpsertWithWhereUniqueWithoutFacilityPatientInput[]
    createMany?: EncounterCreateManyFacilityPatientInputEnvelope
    set?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    disconnect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    delete?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    update?: EncounterUpdateWithWhereUniqueWithoutFacilityPatientInput | EncounterUpdateWithWhereUniqueWithoutFacilityPatientInput[]
    updateMany?: EncounterUpdateManyWithWhereWithoutFacilityPatientInput | EncounterUpdateManyWithWhereWithoutFacilityPatientInput[]
    deleteMany?: EncounterScalarWhereInput | EncounterScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EncounterUncheckedUpdateManyWithoutFacilityPatientNestedInput = {
    create?: XOR<EncounterCreateWithoutFacilityPatientInput, EncounterUncheckedCreateWithoutFacilityPatientInput> | EncounterCreateWithoutFacilityPatientInput[] | EncounterUncheckedCreateWithoutFacilityPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutFacilityPatientInput | EncounterCreateOrConnectWithoutFacilityPatientInput[]
    upsert?: EncounterUpsertWithWhereUniqueWithoutFacilityPatientInput | EncounterUpsertWithWhereUniqueWithoutFacilityPatientInput[]
    createMany?: EncounterCreateManyFacilityPatientInputEnvelope
    set?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    disconnect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    delete?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    update?: EncounterUpdateWithWhereUniqueWithoutFacilityPatientInput | EncounterUpdateWithWhereUniqueWithoutFacilityPatientInput[]
    updateMany?: EncounterUpdateManyWithWhereWithoutFacilityPatientInput | EncounterUpdateManyWithWhereWithoutFacilityPatientInput[]
    deleteMany?: EncounterScalarWhereInput | EncounterScalarWhereInput[]
  }

  export type MasterPatientCreateNestedOneWithoutEncountersInput = {
    create?: XOR<MasterPatientCreateWithoutEncountersInput, MasterPatientUncheckedCreateWithoutEncountersInput>
    connectOrCreate?: MasterPatientCreateOrConnectWithoutEncountersInput
    connect?: MasterPatientWhereUniqueInput
  }

  export type FacilityPatientCreateNestedOneWithoutEncountersInput = {
    create?: XOR<FacilityPatientCreateWithoutEncountersInput, FacilityPatientUncheckedCreateWithoutEncountersInput>
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutEncountersInput
    connect?: FacilityPatientWhereUniqueInput
  }

  export type MasterPatientUpdateOneRequiredWithoutEncountersNestedInput = {
    create?: XOR<MasterPatientCreateWithoutEncountersInput, MasterPatientUncheckedCreateWithoutEncountersInput>
    connectOrCreate?: MasterPatientCreateOrConnectWithoutEncountersInput
    upsert?: MasterPatientUpsertWithoutEncountersInput
    connect?: MasterPatientWhereUniqueInput
    update?: XOR<XOR<MasterPatientUpdateToOneWithWhereWithoutEncountersInput, MasterPatientUpdateWithoutEncountersInput>, MasterPatientUncheckedUpdateWithoutEncountersInput>
  }

  export type FacilityPatientUpdateOneRequiredWithoutEncountersNestedInput = {
    create?: XOR<FacilityPatientCreateWithoutEncountersInput, FacilityPatientUncheckedCreateWithoutEncountersInput>
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutEncountersInput
    upsert?: FacilityPatientUpsertWithoutEncountersInput
    connect?: FacilityPatientWhereUniqueInput
    update?: XOR<XOR<FacilityPatientUpdateToOneWithWhereWithoutEncountersInput, FacilityPatientUpdateWithoutEncountersInput>, FacilityPatientUncheckedUpdateWithoutEncountersInput>
  }

  export type FacilityPatientCreateNestedManyWithoutMasterPatientInput = {
    create?: XOR<FacilityPatientCreateWithoutMasterPatientInput, FacilityPatientUncheckedCreateWithoutMasterPatientInput> | FacilityPatientCreateWithoutMasterPatientInput[] | FacilityPatientUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutMasterPatientInput | FacilityPatientCreateOrConnectWithoutMasterPatientInput[]
    createMany?: FacilityPatientCreateManyMasterPatientInputEnvelope
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
  }

  export type EncounterCreateNestedManyWithoutMasterPatientInput = {
    create?: XOR<EncounterCreateWithoutMasterPatientInput, EncounterUncheckedCreateWithoutMasterPatientInput> | EncounterCreateWithoutMasterPatientInput[] | EncounterUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutMasterPatientInput | EncounterCreateOrConnectWithoutMasterPatientInput[]
    createMany?: EncounterCreateManyMasterPatientInputEnvelope
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
  }

  export type FacilityPatientUncheckedCreateNestedManyWithoutMasterPatientInput = {
    create?: XOR<FacilityPatientCreateWithoutMasterPatientInput, FacilityPatientUncheckedCreateWithoutMasterPatientInput> | FacilityPatientCreateWithoutMasterPatientInput[] | FacilityPatientUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutMasterPatientInput | FacilityPatientCreateOrConnectWithoutMasterPatientInput[]
    createMany?: FacilityPatientCreateManyMasterPatientInputEnvelope
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
  }

  export type EncounterUncheckedCreateNestedManyWithoutMasterPatientInput = {
    create?: XOR<EncounterCreateWithoutMasterPatientInput, EncounterUncheckedCreateWithoutMasterPatientInput> | EncounterCreateWithoutMasterPatientInput[] | EncounterUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutMasterPatientInput | EncounterCreateOrConnectWithoutMasterPatientInput[]
    createMany?: EncounterCreateManyMasterPatientInputEnvelope
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
  }

  export type FacilityPatientUpdateManyWithoutMasterPatientNestedInput = {
    create?: XOR<FacilityPatientCreateWithoutMasterPatientInput, FacilityPatientUncheckedCreateWithoutMasterPatientInput> | FacilityPatientCreateWithoutMasterPatientInput[] | FacilityPatientUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutMasterPatientInput | FacilityPatientCreateOrConnectWithoutMasterPatientInput[]
    upsert?: FacilityPatientUpsertWithWhereUniqueWithoutMasterPatientInput | FacilityPatientUpsertWithWhereUniqueWithoutMasterPatientInput[]
    createMany?: FacilityPatientCreateManyMasterPatientInputEnvelope
    set?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    disconnect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    delete?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    update?: FacilityPatientUpdateWithWhereUniqueWithoutMasterPatientInput | FacilityPatientUpdateWithWhereUniqueWithoutMasterPatientInput[]
    updateMany?: FacilityPatientUpdateManyWithWhereWithoutMasterPatientInput | FacilityPatientUpdateManyWithWhereWithoutMasterPatientInput[]
    deleteMany?: FacilityPatientScalarWhereInput | FacilityPatientScalarWhereInput[]
  }

  export type EncounterUpdateManyWithoutMasterPatientNestedInput = {
    create?: XOR<EncounterCreateWithoutMasterPatientInput, EncounterUncheckedCreateWithoutMasterPatientInput> | EncounterCreateWithoutMasterPatientInput[] | EncounterUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutMasterPatientInput | EncounterCreateOrConnectWithoutMasterPatientInput[]
    upsert?: EncounterUpsertWithWhereUniqueWithoutMasterPatientInput | EncounterUpsertWithWhereUniqueWithoutMasterPatientInput[]
    createMany?: EncounterCreateManyMasterPatientInputEnvelope
    set?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    disconnect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    delete?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    update?: EncounterUpdateWithWhereUniqueWithoutMasterPatientInput | EncounterUpdateWithWhereUniqueWithoutMasterPatientInput[]
    updateMany?: EncounterUpdateManyWithWhereWithoutMasterPatientInput | EncounterUpdateManyWithWhereWithoutMasterPatientInput[]
    deleteMany?: EncounterScalarWhereInput | EncounterScalarWhereInput[]
  }

  export type FacilityPatientUncheckedUpdateManyWithoutMasterPatientNestedInput = {
    create?: XOR<FacilityPatientCreateWithoutMasterPatientInput, FacilityPatientUncheckedCreateWithoutMasterPatientInput> | FacilityPatientCreateWithoutMasterPatientInput[] | FacilityPatientUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: FacilityPatientCreateOrConnectWithoutMasterPatientInput | FacilityPatientCreateOrConnectWithoutMasterPatientInput[]
    upsert?: FacilityPatientUpsertWithWhereUniqueWithoutMasterPatientInput | FacilityPatientUpsertWithWhereUniqueWithoutMasterPatientInput[]
    createMany?: FacilityPatientCreateManyMasterPatientInputEnvelope
    set?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    disconnect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    delete?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    connect?: FacilityPatientWhereUniqueInput | FacilityPatientWhereUniqueInput[]
    update?: FacilityPatientUpdateWithWhereUniqueWithoutMasterPatientInput | FacilityPatientUpdateWithWhereUniqueWithoutMasterPatientInput[]
    updateMany?: FacilityPatientUpdateManyWithWhereWithoutMasterPatientInput | FacilityPatientUpdateManyWithWhereWithoutMasterPatientInput[]
    deleteMany?: FacilityPatientScalarWhereInput | FacilityPatientScalarWhereInput[]
  }

  export type EncounterUncheckedUpdateManyWithoutMasterPatientNestedInput = {
    create?: XOR<EncounterCreateWithoutMasterPatientInput, EncounterUncheckedCreateWithoutMasterPatientInput> | EncounterCreateWithoutMasterPatientInput[] | EncounterUncheckedCreateWithoutMasterPatientInput[]
    connectOrCreate?: EncounterCreateOrConnectWithoutMasterPatientInput | EncounterCreateOrConnectWithoutMasterPatientInput[]
    upsert?: EncounterUpsertWithWhereUniqueWithoutMasterPatientInput | EncounterUpsertWithWhereUniqueWithoutMasterPatientInput[]
    createMany?: EncounterCreateManyMasterPatientInputEnvelope
    set?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    disconnect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    delete?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    connect?: EncounterWhereUniqueInput | EncounterWhereUniqueInput[]
    update?: EncounterUpdateWithWhereUniqueWithoutMasterPatientInput | EncounterUpdateWithWhereUniqueWithoutMasterPatientInput[]
    updateMany?: EncounterUpdateManyWithWhereWithoutMasterPatientInput | EncounterUpdateManyWithWhereWithoutMasterPatientInput[]
    deleteMany?: EncounterScalarWhereInput | EncounterScalarWhereInput[]
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

  export type NestedEnumFacilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeFilter<$PrismaModel> | $Enums.FacilityType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | EnumFacilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FacilityType[] | ListEnumFacilityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFacilityTypeFilter<$PrismaModel>
    _max?: NestedEnumFacilityTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FacilityPatientCreateWithoutFacilityInput = {
    id?: string
    externalId: string
    masterPatient?: MasterPatientCreateNestedOneWithoutSourcePatientsInput
    encounters?: EncounterCreateNestedManyWithoutFacilityPatientInput
  }

  export type FacilityPatientUncheckedCreateWithoutFacilityInput = {
    id?: string
    masterPatientId?: string | null
    externalId: string
    encounters?: EncounterUncheckedCreateNestedManyWithoutFacilityPatientInput
  }

  export type FacilityPatientCreateOrConnectWithoutFacilityInput = {
    where: FacilityPatientWhereUniqueInput
    create: XOR<FacilityPatientCreateWithoutFacilityInput, FacilityPatientUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityPatientCreateManyFacilityInputEnvelope = {
    data: FacilityPatientCreateManyFacilityInput | FacilityPatientCreateManyFacilityInput[]
    skipDuplicates?: boolean
  }

  export type FacilityPatientUpsertWithWhereUniqueWithoutFacilityInput = {
    where: FacilityPatientWhereUniqueInput
    update: XOR<FacilityPatientUpdateWithoutFacilityInput, FacilityPatientUncheckedUpdateWithoutFacilityInput>
    create: XOR<FacilityPatientCreateWithoutFacilityInput, FacilityPatientUncheckedCreateWithoutFacilityInput>
  }

  export type FacilityPatientUpdateWithWhereUniqueWithoutFacilityInput = {
    where: FacilityPatientWhereUniqueInput
    data: XOR<FacilityPatientUpdateWithoutFacilityInput, FacilityPatientUncheckedUpdateWithoutFacilityInput>
  }

  export type FacilityPatientUpdateManyWithWhereWithoutFacilityInput = {
    where: FacilityPatientScalarWhereInput
    data: XOR<FacilityPatientUpdateManyMutationInput, FacilityPatientUncheckedUpdateManyWithoutFacilityInput>
  }

  export type FacilityPatientScalarWhereInput = {
    AND?: FacilityPatientScalarWhereInput | FacilityPatientScalarWhereInput[]
    OR?: FacilityPatientScalarWhereInput[]
    NOT?: FacilityPatientScalarWhereInput | FacilityPatientScalarWhereInput[]
    id?: UuidFilter<"FacilityPatient"> | string
    facilityId?: UuidFilter<"FacilityPatient"> | string
    masterPatientId?: UuidNullableFilter<"FacilityPatient"> | string | null
    externalId?: StringFilter<"FacilityPatient"> | string
  }

  export type FacilityCreateWithoutPatientsInput = {
    id?: string
    name: string
    code: string
    type: $Enums.FacilityType
    county: string
    isActive?: boolean
    lastSyncAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FacilityUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    code: string
    type: $Enums.FacilityType
    county: string
    isActive?: boolean
    lastSyncAt?: Date | string | null
    createdAt?: Date | string
  }

  export type FacilityCreateOrConnectWithoutPatientsInput = {
    where: FacilityWhereUniqueInput
    create: XOR<FacilityCreateWithoutPatientsInput, FacilityUncheckedCreateWithoutPatientsInput>
  }

  export type MasterPatientCreateWithoutSourcePatientsInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
    encounters?: EncounterCreateNestedManyWithoutMasterPatientInput
  }

  export type MasterPatientUncheckedCreateWithoutSourcePatientsInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
    encounters?: EncounterUncheckedCreateNestedManyWithoutMasterPatientInput
  }

  export type MasterPatientCreateOrConnectWithoutSourcePatientsInput = {
    where: MasterPatientWhereUniqueInput
    create: XOR<MasterPatientCreateWithoutSourcePatientsInput, MasterPatientUncheckedCreateWithoutSourcePatientsInput>
  }

  export type EncounterCreateWithoutFacilityPatientInput = {
    id?: string
    encounterDate?: Date | string
    masterPatient: MasterPatientCreateNestedOneWithoutEncountersInput
  }

  export type EncounterUncheckedCreateWithoutFacilityPatientInput = {
    id?: string
    masterPatientId: string
    encounterDate?: Date | string
  }

  export type EncounterCreateOrConnectWithoutFacilityPatientInput = {
    where: EncounterWhereUniqueInput
    create: XOR<EncounterCreateWithoutFacilityPatientInput, EncounterUncheckedCreateWithoutFacilityPatientInput>
  }

  export type EncounterCreateManyFacilityPatientInputEnvelope = {
    data: EncounterCreateManyFacilityPatientInput | EncounterCreateManyFacilityPatientInput[]
    skipDuplicates?: boolean
  }

  export type FacilityUpsertWithoutPatientsInput = {
    update: XOR<FacilityUpdateWithoutPatientsInput, FacilityUncheckedUpdateWithoutPatientsInput>
    create: XOR<FacilityCreateWithoutPatientsInput, FacilityUncheckedCreateWithoutPatientsInput>
    where?: FacilityWhereInput
  }

  export type FacilityUpdateToOneWithWhereWithoutPatientsInput = {
    where?: FacilityWhereInput
    data: XOR<FacilityUpdateWithoutPatientsInput, FacilityUncheckedUpdateWithoutPatientsInput>
  }

  export type FacilityUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    county?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumFacilityTypeFieldUpdateOperationsInput | $Enums.FacilityType
    county?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterPatientUpsertWithoutSourcePatientsInput = {
    update: XOR<MasterPatientUpdateWithoutSourcePatientsInput, MasterPatientUncheckedUpdateWithoutSourcePatientsInput>
    create: XOR<MasterPatientCreateWithoutSourcePatientsInput, MasterPatientUncheckedCreateWithoutSourcePatientsInput>
    where?: MasterPatientWhereInput
  }

  export type MasterPatientUpdateToOneWithWhereWithoutSourcePatientsInput = {
    where?: MasterPatientWhereInput
    data: XOR<MasterPatientUpdateWithoutSourcePatientsInput, MasterPatientUncheckedUpdateWithoutSourcePatientsInput>
  }

  export type MasterPatientUpdateWithoutSourcePatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    encounters?: EncounterUpdateManyWithoutMasterPatientNestedInput
  }

  export type MasterPatientUncheckedUpdateWithoutSourcePatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    encounters?: EncounterUncheckedUpdateManyWithoutMasterPatientNestedInput
  }

  export type EncounterUpsertWithWhereUniqueWithoutFacilityPatientInput = {
    where: EncounterWhereUniqueInput
    update: XOR<EncounterUpdateWithoutFacilityPatientInput, EncounterUncheckedUpdateWithoutFacilityPatientInput>
    create: XOR<EncounterCreateWithoutFacilityPatientInput, EncounterUncheckedCreateWithoutFacilityPatientInput>
  }

  export type EncounterUpdateWithWhereUniqueWithoutFacilityPatientInput = {
    where: EncounterWhereUniqueInput
    data: XOR<EncounterUpdateWithoutFacilityPatientInput, EncounterUncheckedUpdateWithoutFacilityPatientInput>
  }

  export type EncounterUpdateManyWithWhereWithoutFacilityPatientInput = {
    where: EncounterScalarWhereInput
    data: XOR<EncounterUpdateManyMutationInput, EncounterUncheckedUpdateManyWithoutFacilityPatientInput>
  }

  export type EncounterScalarWhereInput = {
    AND?: EncounterScalarWhereInput | EncounterScalarWhereInput[]
    OR?: EncounterScalarWhereInput[]
    NOT?: EncounterScalarWhereInput | EncounterScalarWhereInput[]
    id?: UuidFilter<"Encounter"> | string
    masterPatientId?: UuidFilter<"Encounter"> | string
    facilityPatientId?: UuidFilter<"Encounter"> | string
    encounterDate?: DateTimeFilter<"Encounter"> | Date | string
  }

  export type MasterPatientCreateWithoutEncountersInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
    sourcePatients?: FacilityPatientCreateNestedManyWithoutMasterPatientInput
  }

  export type MasterPatientUncheckedCreateWithoutEncountersInput = {
    id?: string
    firstName: string
    lastName: string
    dob?: Date | string | null
    gender?: string | null
    sourcePatients?: FacilityPatientUncheckedCreateNestedManyWithoutMasterPatientInput
  }

  export type MasterPatientCreateOrConnectWithoutEncountersInput = {
    where: MasterPatientWhereUniqueInput
    create: XOR<MasterPatientCreateWithoutEncountersInput, MasterPatientUncheckedCreateWithoutEncountersInput>
  }

  export type FacilityPatientCreateWithoutEncountersInput = {
    id?: string
    externalId: string
    facility: FacilityCreateNestedOneWithoutPatientsInput
    masterPatient?: MasterPatientCreateNestedOneWithoutSourcePatientsInput
  }

  export type FacilityPatientUncheckedCreateWithoutEncountersInput = {
    id?: string
    facilityId: string
    masterPatientId?: string | null
    externalId: string
  }

  export type FacilityPatientCreateOrConnectWithoutEncountersInput = {
    where: FacilityPatientWhereUniqueInput
    create: XOR<FacilityPatientCreateWithoutEncountersInput, FacilityPatientUncheckedCreateWithoutEncountersInput>
  }

  export type MasterPatientUpsertWithoutEncountersInput = {
    update: XOR<MasterPatientUpdateWithoutEncountersInput, MasterPatientUncheckedUpdateWithoutEncountersInput>
    create: XOR<MasterPatientCreateWithoutEncountersInput, MasterPatientUncheckedCreateWithoutEncountersInput>
    where?: MasterPatientWhereInput
  }

  export type MasterPatientUpdateToOneWithWhereWithoutEncountersInput = {
    where?: MasterPatientWhereInput
    data: XOR<MasterPatientUpdateWithoutEncountersInput, MasterPatientUncheckedUpdateWithoutEncountersInput>
  }

  export type MasterPatientUpdateWithoutEncountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePatients?: FacilityPatientUpdateManyWithoutMasterPatientNestedInput
  }

  export type MasterPatientUncheckedUpdateWithoutEncountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    sourcePatients?: FacilityPatientUncheckedUpdateManyWithoutMasterPatientNestedInput
  }

  export type FacilityPatientUpsertWithoutEncountersInput = {
    update: XOR<FacilityPatientUpdateWithoutEncountersInput, FacilityPatientUncheckedUpdateWithoutEncountersInput>
    create: XOR<FacilityPatientCreateWithoutEncountersInput, FacilityPatientUncheckedCreateWithoutEncountersInput>
    where?: FacilityPatientWhereInput
  }

  export type FacilityPatientUpdateToOneWithWhereWithoutEncountersInput = {
    where?: FacilityPatientWhereInput
    data: XOR<FacilityPatientUpdateWithoutEncountersInput, FacilityPatientUncheckedUpdateWithoutEncountersInput>
  }

  export type FacilityPatientUpdateWithoutEncountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    facility?: FacilityUpdateOneRequiredWithoutPatientsNestedInput
    masterPatient?: MasterPatientUpdateOneWithoutSourcePatientsNestedInput
  }

  export type FacilityPatientUncheckedUpdateWithoutEncountersInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    masterPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type FacilityPatientCreateWithoutMasterPatientInput = {
    id?: string
    externalId: string
    facility: FacilityCreateNestedOneWithoutPatientsInput
    encounters?: EncounterCreateNestedManyWithoutFacilityPatientInput
  }

  export type FacilityPatientUncheckedCreateWithoutMasterPatientInput = {
    id?: string
    facilityId: string
    externalId: string
    encounters?: EncounterUncheckedCreateNestedManyWithoutFacilityPatientInput
  }

  export type FacilityPatientCreateOrConnectWithoutMasterPatientInput = {
    where: FacilityPatientWhereUniqueInput
    create: XOR<FacilityPatientCreateWithoutMasterPatientInput, FacilityPatientUncheckedCreateWithoutMasterPatientInput>
  }

  export type FacilityPatientCreateManyMasterPatientInputEnvelope = {
    data: FacilityPatientCreateManyMasterPatientInput | FacilityPatientCreateManyMasterPatientInput[]
    skipDuplicates?: boolean
  }

  export type EncounterCreateWithoutMasterPatientInput = {
    id?: string
    encounterDate?: Date | string
    facilityPatient: FacilityPatientCreateNestedOneWithoutEncountersInput
  }

  export type EncounterUncheckedCreateWithoutMasterPatientInput = {
    id?: string
    facilityPatientId: string
    encounterDate?: Date | string
  }

  export type EncounterCreateOrConnectWithoutMasterPatientInput = {
    where: EncounterWhereUniqueInput
    create: XOR<EncounterCreateWithoutMasterPatientInput, EncounterUncheckedCreateWithoutMasterPatientInput>
  }

  export type EncounterCreateManyMasterPatientInputEnvelope = {
    data: EncounterCreateManyMasterPatientInput | EncounterCreateManyMasterPatientInput[]
    skipDuplicates?: boolean
  }

  export type FacilityPatientUpsertWithWhereUniqueWithoutMasterPatientInput = {
    where: FacilityPatientWhereUniqueInput
    update: XOR<FacilityPatientUpdateWithoutMasterPatientInput, FacilityPatientUncheckedUpdateWithoutMasterPatientInput>
    create: XOR<FacilityPatientCreateWithoutMasterPatientInput, FacilityPatientUncheckedCreateWithoutMasterPatientInput>
  }

  export type FacilityPatientUpdateWithWhereUniqueWithoutMasterPatientInput = {
    where: FacilityPatientWhereUniqueInput
    data: XOR<FacilityPatientUpdateWithoutMasterPatientInput, FacilityPatientUncheckedUpdateWithoutMasterPatientInput>
  }

  export type FacilityPatientUpdateManyWithWhereWithoutMasterPatientInput = {
    where: FacilityPatientScalarWhereInput
    data: XOR<FacilityPatientUpdateManyMutationInput, FacilityPatientUncheckedUpdateManyWithoutMasterPatientInput>
  }

  export type EncounterUpsertWithWhereUniqueWithoutMasterPatientInput = {
    where: EncounterWhereUniqueInput
    update: XOR<EncounterUpdateWithoutMasterPatientInput, EncounterUncheckedUpdateWithoutMasterPatientInput>
    create: XOR<EncounterCreateWithoutMasterPatientInput, EncounterUncheckedCreateWithoutMasterPatientInput>
  }

  export type EncounterUpdateWithWhereUniqueWithoutMasterPatientInput = {
    where: EncounterWhereUniqueInput
    data: XOR<EncounterUpdateWithoutMasterPatientInput, EncounterUncheckedUpdateWithoutMasterPatientInput>
  }

  export type EncounterUpdateManyWithWhereWithoutMasterPatientInput = {
    where: EncounterScalarWhereInput
    data: XOR<EncounterUpdateManyMutationInput, EncounterUncheckedUpdateManyWithoutMasterPatientInput>
  }

  export type FacilityPatientCreateManyFacilityInput = {
    id?: string
    masterPatientId?: string | null
    externalId: string
  }

  export type FacilityPatientUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    masterPatient?: MasterPatientUpdateOneWithoutSourcePatientsNestedInput
    encounters?: EncounterUpdateManyWithoutFacilityPatientNestedInput
  }

  export type FacilityPatientUncheckedUpdateWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
    encounters?: EncounterUncheckedUpdateManyWithoutFacilityPatientNestedInput
  }

  export type FacilityPatientUncheckedUpdateManyWithoutFacilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPatientId?: NullableStringFieldUpdateOperationsInput | string | null
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type EncounterCreateManyFacilityPatientInput = {
    id?: string
    masterPatientId: string
    encounterDate?: Date | string
  }

  export type EncounterUpdateWithoutFacilityPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    masterPatient?: MasterPatientUpdateOneRequiredWithoutEncountersNestedInput
  }

  export type EncounterUncheckedUpdateWithoutFacilityPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPatientId?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncounterUncheckedUpdateManyWithoutFacilityPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    masterPatientId?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacilityPatientCreateManyMasterPatientInput = {
    id?: string
    facilityId: string
    externalId: string
  }

  export type EncounterCreateManyMasterPatientInput = {
    id?: string
    facilityPatientId: string
    encounterDate?: Date | string
  }

  export type FacilityPatientUpdateWithoutMasterPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    facility?: FacilityUpdateOneRequiredWithoutPatientsNestedInput
    encounters?: EncounterUpdateManyWithoutFacilityPatientNestedInput
  }

  export type FacilityPatientUncheckedUpdateWithoutMasterPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
    encounters?: EncounterUncheckedUpdateManyWithoutFacilityPatientNestedInput
  }

  export type FacilityPatientUncheckedUpdateManyWithoutMasterPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityId?: StringFieldUpdateOperationsInput | string
    externalId?: StringFieldUpdateOperationsInput | string
  }

  export type EncounterUpdateWithoutMasterPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
    facilityPatient?: FacilityPatientUpdateOneRequiredWithoutEncountersNestedInput
  }

  export type EncounterUncheckedUpdateWithoutMasterPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityPatientId?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncounterUncheckedUpdateManyWithoutMasterPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    facilityPatientId?: StringFieldUpdateOperationsInput | string
    encounterDate?: DateTimeFieldUpdateOperationsInput | Date | string
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