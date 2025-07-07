
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
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model InterventionProposal
 * 
 */
export type InterventionProposal = $Result.DefaultSelection<Prisma.$InterventionProposalPayload>
/**
 * Model MediaFeedback
 * 
 */
export type MediaFeedback = $Result.DefaultSelection<Prisma.$MediaFeedbackPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model Testimonial
 * 
 */
export type Testimonial = $Result.DefaultSelection<Prisma.$TestimonialPayload>
/**
 * Model Thematic
 * 
 */
export type Thematic = $Result.DefaultSelection<Prisma.$ThematicPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VolunteerApplication
 * 
 */
export type VolunteerApplication = $Result.DefaultSelection<Prisma.$VolunteerApplicationPayload>
/**
 * Model VolunteerAssignment
 * 
 */
export type VolunteerAssignment = $Result.DefaultSelection<Prisma.$VolunteerAssignmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProposalStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus]


export const Domain: {
  IT: 'IT',
  MARKETING: 'MARKETING',
  DESIGN: 'DESIGN',
  EDUCATION: 'EDUCATION',
  HEALTH: 'HEALTH',
  OTHER: 'OTHER'
};

export type Domain = (typeof Domain)[keyof typeof Domain]


export const ResourceType: {
  ARTICLE: 'ARTICLE',
  GUIDE: 'GUIDE',
  RECOMMENDATION: 'RECOMMENDATION',
  PORTRAIT: 'PORTRAIT'
};

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]


export const UserStatus: {
  ADMIN: 'ADMIN',
  VISITOR: 'VISITOR',
  VOLUNTEER: 'VOLUNTEER',
  MEMBER: 'MEMBER',
  PROFESSIONAL: 'PROFESSIONAL'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const VolunteerRole: {
  ACCUEIL: 'ACCUEIL',
  LOGISTIQUE: 'LOGISTIQUE',
  SOUTIEN: 'SOUTIEN',
  COMMUNICATION: 'COMMUNICATION',
  AUTRE: 'AUTRE'
};

export type VolunteerRole = (typeof VolunteerRole)[keyof typeof VolunteerRole]


export const AssignmentStatus: {
  ASSIGNED: 'ASSIGNED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]

}

export type ProposalStatus = $Enums.ProposalStatus

export const ProposalStatus: typeof $Enums.ProposalStatus

export type Domain = $Enums.Domain

export const Domain: typeof $Enums.Domain

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type VolunteerRole = $Enums.VolunteerRole

export const VolunteerRole: typeof $Enums.VolunteerRole

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Donations
 * const donations = await prisma.donation.findMany()
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
   * // Fetch zero or more Donations
   * const donations = await prisma.donation.findMany()
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
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interventionProposal`: Exposes CRUD operations for the **InterventionProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InterventionProposals
    * const interventionProposals = await prisma.interventionProposal.findMany()
    * ```
    */
  get interventionProposal(): Prisma.InterventionProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaFeedback`: Exposes CRUD operations for the **MediaFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaFeedbacks
    * const mediaFeedbacks = await prisma.mediaFeedback.findMany()
    * ```
    */
  get mediaFeedback(): Prisma.MediaFeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testimonial`: Exposes CRUD operations for the **Testimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testimonials
    * const testimonials = await prisma.testimonial.findMany()
    * ```
    */
  get testimonial(): Prisma.TestimonialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thematic`: Exposes CRUD operations for the **Thematic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thematics
    * const thematics = await prisma.thematic.findMany()
    * ```
    */
  get thematic(): Prisma.ThematicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerApplication`: Exposes CRUD operations for the **VolunteerApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerApplications
    * const volunteerApplications = await prisma.volunteerApplication.findMany()
    * ```
    */
  get volunteerApplication(): Prisma.VolunteerApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerAssignment`: Exposes CRUD operations for the **VolunteerAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerAssignments
    * const volunteerAssignments = await prisma.volunteerAssignment.findMany()
    * ```
    */
  get volunteerAssignment(): Prisma.VolunteerAssignmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    Donation: 'Donation',
    Event: 'Event',
    InterventionProposal: 'InterventionProposal',
    MediaFeedback: 'MediaFeedback',
    Registration: 'Registration',
    Resource: 'Resource',
    Testimonial: 'Testimonial',
    Thematic: 'Thematic',
    User: 'User',
    VolunteerApplication: 'VolunteerApplication',
    VolunteerAssignment: 'VolunteerAssignment'
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
      modelProps: "donation" | "event" | "interventionProposal" | "mediaFeedback" | "registration" | "resource" | "testimonial" | "thematic" | "user" | "volunteerApplication" | "volunteerAssignment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      InterventionProposal: {
        payload: Prisma.$InterventionProposalPayload<ExtArgs>
        fields: Prisma.InterventionProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterventionProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterventionProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>
          }
          findFirst: {
            args: Prisma.InterventionProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterventionProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>
          }
          findMany: {
            args: Prisma.InterventionProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>[]
          }
          create: {
            args: Prisma.InterventionProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>
          }
          createMany: {
            args: Prisma.InterventionProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InterventionProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>
          }
          update: {
            args: Prisma.InterventionProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>
          }
          deleteMany: {
            args: Prisma.InterventionProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterventionProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InterventionProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterventionProposalPayload>
          }
          aggregate: {
            args: Prisma.InterventionProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterventionProposal>
          }
          groupBy: {
            args: Prisma.InterventionProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterventionProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterventionProposalCountArgs<ExtArgs>
            result: $Utils.Optional<InterventionProposalCountAggregateOutputType> | number
          }
        }
      }
      MediaFeedback: {
        payload: Prisma.$MediaFeedbackPayload<ExtArgs>
        fields: Prisma.MediaFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>
          }
          findFirst: {
            args: Prisma.MediaFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>
          }
          findMany: {
            args: Prisma.MediaFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>[]
          }
          create: {
            args: Prisma.MediaFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>
          }
          createMany: {
            args: Prisma.MediaFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>
          }
          update: {
            args: Prisma.MediaFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.MediaFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFeedbackPayload>
          }
          aggregate: {
            args: Prisma.MediaFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaFeedback>
          }
          groupBy: {
            args: Prisma.MediaFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<MediaFeedbackCountAggregateOutputType> | number
          }
        }
      }
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      Testimonial: {
        payload: Prisma.$TestimonialPayload<ExtArgs>
        fields: Prisma.TestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findFirst: {
            args: Prisma.TestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          findMany: {
            args: Prisma.TestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>[]
          }
          create: {
            args: Prisma.TestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          createMany: {
            args: Prisma.TestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          update: {
            args: Prisma.TestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          deleteMany: {
            args: Prisma.TestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestimonialPayload>
          }
          aggregate: {
            args: Prisma.TestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestimonial>
          }
          groupBy: {
            args: Prisma.TestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<TestimonialCountAggregateOutputType> | number
          }
        }
      }
      Thematic: {
        payload: Prisma.$ThematicPayload<ExtArgs>
        fields: Prisma.ThematicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThematicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThematicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>
          }
          findFirst: {
            args: Prisma.ThematicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThematicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>
          }
          findMany: {
            args: Prisma.ThematicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>[]
          }
          create: {
            args: Prisma.ThematicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>
          }
          createMany: {
            args: Prisma.ThematicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ThematicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>
          }
          update: {
            args: Prisma.ThematicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>
          }
          deleteMany: {
            args: Prisma.ThematicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThematicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ThematicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThematicPayload>
          }
          aggregate: {
            args: Prisma.ThematicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThematic>
          }
          groupBy: {
            args: Prisma.ThematicGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThematicGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThematicCountArgs<ExtArgs>
            result: $Utils.Optional<ThematicCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VolunteerApplication: {
        payload: Prisma.$VolunteerApplicationPayload<ExtArgs>
        fields: Prisma.VolunteerApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          findFirst: {
            args: Prisma.VolunteerApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          findMany: {
            args: Prisma.VolunteerApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>[]
          }
          create: {
            args: Prisma.VolunteerApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          createMany: {
            args: Prisma.VolunteerApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VolunteerApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          update: {
            args: Prisma.VolunteerApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VolunteerApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerApplicationPayload>
          }
          aggregate: {
            args: Prisma.VolunteerApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerApplication>
          }
          groupBy: {
            args: Prisma.VolunteerApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerApplicationCountAggregateOutputType> | number
          }
        }
      }
      VolunteerAssignment: {
        payload: Prisma.$VolunteerAssignmentPayload<ExtArgs>
        fields: Prisma.VolunteerAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>
          }
          findFirst: {
            args: Prisma.VolunteerAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>
          }
          findMany: {
            args: Prisma.VolunteerAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>[]
          }
          create: {
            args: Prisma.VolunteerAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>
          }
          createMany: {
            args: Prisma.VolunteerAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VolunteerAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>
          }
          update: {
            args: Prisma.VolunteerAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VolunteerAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAssignmentPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerAssignment>
          }
          groupBy: {
            args: Prisma.VolunteerAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerAssignmentCountAggregateOutputType> | number
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
    donation?: DonationOmit
    event?: EventOmit
    interventionProposal?: InterventionProposalOmit
    mediaFeedback?: MediaFeedbackOmit
    registration?: RegistrationOmit
    resource?: ResourceOmit
    testimonial?: TestimonialOmit
    thematic?: ThematicOmit
    user?: UserOmit
    volunteerApplication?: VolunteerApplicationOmit
    volunteerAssignment?: VolunteerAssignmentOmit
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
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    volunteerAssignments: number
    registrations: number
    volunteers: number
    employees: number
    thematics: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteerAssignments?: boolean | EventCountOutputTypeCountVolunteerAssignmentsArgs
    registrations?: boolean | EventCountOutputTypeCountRegistrationsArgs
    volunteers?: boolean | EventCountOutputTypeCountVolunteersArgs
    employees?: boolean | EventCountOutputTypeCountEmployeesArgs
    thematics?: boolean | EventCountOutputTypeCountThematicsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVolunteerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerAssignmentWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVolunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountThematicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThematicWhereInput
  }


  /**
   * Count Type ThematicCountOutputType
   */

  export type ThematicCountOutputType = {
    events: number
  }

  export type ThematicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ThematicCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ThematicCountOutputType without action
   */
  export type ThematicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThematicCountOutputType
     */
    select?: ThematicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThematicCountOutputType without action
   */
  export type ThematicCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    registrations: number
    createdEvents: number
    resources: number
    testimonials: number
    donations: number
    volunteerAssignments: number
    volunteerInEvents: number
    employeeInEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs
    resources?: boolean | UserCountOutputTypeCountResourcesArgs
    testimonials?: boolean | UserCountOutputTypeCountTestimonialsArgs
    donations?: boolean | UserCountOutputTypeCountDonationsArgs
    volunteerAssignments?: boolean | UserCountOutputTypeCountVolunteerAssignmentsArgs
    volunteerInEvents?: boolean | UserCountOutputTypeCountVolunteerInEventsArgs
    employeeInEvents?: boolean | UserCountOutputTypeCountEmployeeInEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVolunteerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVolunteerInEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeInEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    email: string | null
    userId: number | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    email: string | null
    userId: number | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    email: number
    userId: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    email?: true
    userId?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    email?: true
    userId?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    email?: true
    userId?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    amount: number
    date: Date
    email: string
    userId: number
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    email?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>



  export type DonationSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    email?: boolean
    userId?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "email" | "userId", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      date: Date
      email: string
      userId: number
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
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
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly amount: FieldRef<"Donation", 'Float'>
    readonly date: FieldRef<"Donation", 'DateTime'>
    readonly email: FieldRef<"Donation", 'String'>
    readonly userId: FieldRef<"Donation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    date: Date | null
    location: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    location: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    createdAt?: true
    createdById?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    createdAt?: true
    createdById?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    location?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    title: string
    description: string
    date: Date
    location: string
    createdAt: Date
    createdById: number
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    volunteerAssignments?: boolean | Event$volunteerAssignmentsArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    volunteers?: boolean | Event$volunteersArgs<ExtArgs>
    employees?: boolean | Event$employeesArgs<ExtArgs>
    thematics?: boolean | Event$thematicsArgs<ExtArgs>
    mediaFeedback?: boolean | Event$mediaFeedbackArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    location?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "location" | "createdAt" | "createdById", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    volunteerAssignments?: boolean | Event$volunteerAssignmentsArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    volunteers?: boolean | Event$volunteersArgs<ExtArgs>
    employees?: boolean | Event$employeesArgs<ExtArgs>
    thematics?: boolean | Event$thematicsArgs<ExtArgs>
    mediaFeedback?: boolean | Event$mediaFeedbackArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      volunteerAssignments: Prisma.$VolunteerAssignmentPayload<ExtArgs>[]
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      volunteers: Prisma.$UserPayload<ExtArgs>[]
      employees: Prisma.$UserPayload<ExtArgs>[]
      thematics: Prisma.$ThematicPayload<ExtArgs>[]
      mediaFeedback: Prisma.$MediaFeedbackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      date: Date
      location: string
      createdAt: Date
      createdById: number
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteerAssignments<T extends Event$volunteerAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Event$volunteerAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends Event$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteers<T extends Event$volunteersArgs<ExtArgs> = {}>(args?: Subset<T, Event$volunteersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employees<T extends Event$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Event$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thematics<T extends Event$thematicsArgs<ExtArgs> = {}>(args?: Subset<T, Event$thematicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaFeedback<T extends Event$mediaFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, Event$mediaFeedbackArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly createdById: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.volunteerAssignments
   */
  export type Event$volunteerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    where?: VolunteerAssignmentWhereInput
    orderBy?: VolunteerAssignmentOrderByWithRelationInput | VolunteerAssignmentOrderByWithRelationInput[]
    cursor?: VolunteerAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerAssignmentScalarFieldEnum | VolunteerAssignmentScalarFieldEnum[]
  }

  /**
   * Event.registrations
   */
  export type Event$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Event.volunteers
   */
  export type Event$volunteersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Event.employees
   */
  export type Event$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Event.thematics
   */
  export type Event$thematicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    where?: ThematicWhereInput
    orderBy?: ThematicOrderByWithRelationInput | ThematicOrderByWithRelationInput[]
    cursor?: ThematicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThematicScalarFieldEnum | ThematicScalarFieldEnum[]
  }

  /**
   * Event.mediaFeedback
   */
  export type Event$mediaFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    where?: MediaFeedbackWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model InterventionProposal
   */

  export type AggregateInterventionProposal = {
    _count: InterventionProposalCountAggregateOutputType | null
    _avg: InterventionProposalAvgAggregateOutputType | null
    _sum: InterventionProposalSumAggregateOutputType | null
    _min: InterventionProposalMinAggregateOutputType | null
    _max: InterventionProposalMaxAggregateOutputType | null
  }

  export type InterventionProposalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type InterventionProposalSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type InterventionProposalMinAggregateOutputType = {
    id: number | null
    jobTitle: string | null
    description: string | null
    domain: $Enums.Domain | null
    status: $Enums.ProposalStatus | null
    createdAt: Date | null
    userId: number | null
  }

  export type InterventionProposalMaxAggregateOutputType = {
    id: number | null
    jobTitle: string | null
    description: string | null
    domain: $Enums.Domain | null
    status: $Enums.ProposalStatus | null
    createdAt: Date | null
    userId: number | null
  }

  export type InterventionProposalCountAggregateOutputType = {
    id: number
    jobTitle: number
    description: number
    domain: number
    status: number
    createdAt: number
    userId: number
    _all: number
  }


  export type InterventionProposalAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InterventionProposalSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InterventionProposalMinAggregateInputType = {
    id?: true
    jobTitle?: true
    description?: true
    domain?: true
    status?: true
    createdAt?: true
    userId?: true
  }

  export type InterventionProposalMaxAggregateInputType = {
    id?: true
    jobTitle?: true
    description?: true
    domain?: true
    status?: true
    createdAt?: true
    userId?: true
  }

  export type InterventionProposalCountAggregateInputType = {
    id?: true
    jobTitle?: true
    description?: true
    domain?: true
    status?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type InterventionProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterventionProposal to aggregate.
     */
    where?: InterventionProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterventionProposals to fetch.
     */
    orderBy?: InterventionProposalOrderByWithRelationInput | InterventionProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterventionProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterventionProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterventionProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InterventionProposals
    **/
    _count?: true | InterventionProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterventionProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterventionProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterventionProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterventionProposalMaxAggregateInputType
  }

  export type GetInterventionProposalAggregateType<T extends InterventionProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateInterventionProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterventionProposal[P]>
      : GetScalarType<T[P], AggregateInterventionProposal[P]>
  }




  export type InterventionProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterventionProposalWhereInput
    orderBy?: InterventionProposalOrderByWithAggregationInput | InterventionProposalOrderByWithAggregationInput[]
    by: InterventionProposalScalarFieldEnum[] | InterventionProposalScalarFieldEnum
    having?: InterventionProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterventionProposalCountAggregateInputType | true
    _avg?: InterventionProposalAvgAggregateInputType
    _sum?: InterventionProposalSumAggregateInputType
    _min?: InterventionProposalMinAggregateInputType
    _max?: InterventionProposalMaxAggregateInputType
  }

  export type InterventionProposalGroupByOutputType = {
    id: number
    jobTitle: string
    description: string
    domain: $Enums.Domain
    status: $Enums.ProposalStatus
    createdAt: Date
    userId: number
    _count: InterventionProposalCountAggregateOutputType | null
    _avg: InterventionProposalAvgAggregateOutputType | null
    _sum: InterventionProposalSumAggregateOutputType | null
    _min: InterventionProposalMinAggregateOutputType | null
    _max: InterventionProposalMaxAggregateOutputType | null
  }

  type GetInterventionProposalGroupByPayload<T extends InterventionProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterventionProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterventionProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterventionProposalGroupByOutputType[P]>
            : GetScalarType<T[P], InterventionProposalGroupByOutputType[P]>
        }
      >
    >


  export type InterventionProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitle?: boolean
    description?: boolean
    domain?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interventionProposal"]>



  export type InterventionProposalSelectScalar = {
    id?: boolean
    jobTitle?: boolean
    description?: boolean
    domain?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type InterventionProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobTitle" | "description" | "domain" | "status" | "createdAt" | "userId", ExtArgs["result"]["interventionProposal"]>
  export type InterventionProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InterventionProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InterventionProposal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobTitle: string
      description: string
      domain: $Enums.Domain
      status: $Enums.ProposalStatus
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["interventionProposal"]>
    composites: {}
  }

  type InterventionProposalGetPayload<S extends boolean | null | undefined | InterventionProposalDefaultArgs> = $Result.GetResult<Prisma.$InterventionProposalPayload, S>

  type InterventionProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterventionProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterventionProposalCountAggregateInputType | true
    }

  export interface InterventionProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InterventionProposal'], meta: { name: 'InterventionProposal' } }
    /**
     * Find zero or one InterventionProposal that matches the filter.
     * @param {InterventionProposalFindUniqueArgs} args - Arguments to find a InterventionProposal
     * @example
     * // Get one InterventionProposal
     * const interventionProposal = await prisma.interventionProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterventionProposalFindUniqueArgs>(args: SelectSubset<T, InterventionProposalFindUniqueArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InterventionProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterventionProposalFindUniqueOrThrowArgs} args - Arguments to find a InterventionProposal
     * @example
     * // Get one InterventionProposal
     * const interventionProposal = await prisma.interventionProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterventionProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, InterventionProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterventionProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalFindFirstArgs} args - Arguments to find a InterventionProposal
     * @example
     * // Get one InterventionProposal
     * const interventionProposal = await prisma.interventionProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterventionProposalFindFirstArgs>(args?: SelectSubset<T, InterventionProposalFindFirstArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InterventionProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalFindFirstOrThrowArgs} args - Arguments to find a InterventionProposal
     * @example
     * // Get one InterventionProposal
     * const interventionProposal = await prisma.interventionProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterventionProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, InterventionProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InterventionProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InterventionProposals
     * const interventionProposals = await prisma.interventionProposal.findMany()
     * 
     * // Get first 10 InterventionProposals
     * const interventionProposals = await prisma.interventionProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interventionProposalWithIdOnly = await prisma.interventionProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterventionProposalFindManyArgs>(args?: SelectSubset<T, InterventionProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InterventionProposal.
     * @param {InterventionProposalCreateArgs} args - Arguments to create a InterventionProposal.
     * @example
     * // Create one InterventionProposal
     * const InterventionProposal = await prisma.interventionProposal.create({
     *   data: {
     *     // ... data to create a InterventionProposal
     *   }
     * })
     * 
     */
    create<T extends InterventionProposalCreateArgs>(args: SelectSubset<T, InterventionProposalCreateArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InterventionProposals.
     * @param {InterventionProposalCreateManyArgs} args - Arguments to create many InterventionProposals.
     * @example
     * // Create many InterventionProposals
     * const interventionProposal = await prisma.interventionProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterventionProposalCreateManyArgs>(args?: SelectSubset<T, InterventionProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InterventionProposal.
     * @param {InterventionProposalDeleteArgs} args - Arguments to delete one InterventionProposal.
     * @example
     * // Delete one InterventionProposal
     * const InterventionProposal = await prisma.interventionProposal.delete({
     *   where: {
     *     // ... filter to delete one InterventionProposal
     *   }
     * })
     * 
     */
    delete<T extends InterventionProposalDeleteArgs>(args: SelectSubset<T, InterventionProposalDeleteArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InterventionProposal.
     * @param {InterventionProposalUpdateArgs} args - Arguments to update one InterventionProposal.
     * @example
     * // Update one InterventionProposal
     * const interventionProposal = await prisma.interventionProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterventionProposalUpdateArgs>(args: SelectSubset<T, InterventionProposalUpdateArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InterventionProposals.
     * @param {InterventionProposalDeleteManyArgs} args - Arguments to filter InterventionProposals to delete.
     * @example
     * // Delete a few InterventionProposals
     * const { count } = await prisma.interventionProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterventionProposalDeleteManyArgs>(args?: SelectSubset<T, InterventionProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InterventionProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InterventionProposals
     * const interventionProposal = await prisma.interventionProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterventionProposalUpdateManyArgs>(args: SelectSubset<T, InterventionProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InterventionProposal.
     * @param {InterventionProposalUpsertArgs} args - Arguments to update or create a InterventionProposal.
     * @example
     * // Update or create a InterventionProposal
     * const interventionProposal = await prisma.interventionProposal.upsert({
     *   create: {
     *     // ... data to create a InterventionProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InterventionProposal we want to update
     *   }
     * })
     */
    upsert<T extends InterventionProposalUpsertArgs>(args: SelectSubset<T, InterventionProposalUpsertArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InterventionProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalCountArgs} args - Arguments to filter InterventionProposals to count.
     * @example
     * // Count the number of InterventionProposals
     * const count = await prisma.interventionProposal.count({
     *   where: {
     *     // ... the filter for the InterventionProposals we want to count
     *   }
     * })
    **/
    count<T extends InterventionProposalCountArgs>(
      args?: Subset<T, InterventionProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterventionProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InterventionProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterventionProposalAggregateArgs>(args: Subset<T, InterventionProposalAggregateArgs>): Prisma.PrismaPromise<GetInterventionProposalAggregateType<T>>

    /**
     * Group by InterventionProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterventionProposalGroupByArgs} args - Group by arguments.
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
      T extends InterventionProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterventionProposalGroupByArgs['orderBy'] }
        : { orderBy?: InterventionProposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterventionProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterventionProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InterventionProposal model
   */
  readonly fields: InterventionProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InterventionProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterventionProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InterventionProposal model
   */
  interface InterventionProposalFieldRefs {
    readonly id: FieldRef<"InterventionProposal", 'Int'>
    readonly jobTitle: FieldRef<"InterventionProposal", 'String'>
    readonly description: FieldRef<"InterventionProposal", 'String'>
    readonly domain: FieldRef<"InterventionProposal", 'Domain'>
    readonly status: FieldRef<"InterventionProposal", 'ProposalStatus'>
    readonly createdAt: FieldRef<"InterventionProposal", 'DateTime'>
    readonly userId: FieldRef<"InterventionProposal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InterventionProposal findUnique
   */
  export type InterventionProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * Filter, which InterventionProposal to fetch.
     */
    where: InterventionProposalWhereUniqueInput
  }

  /**
   * InterventionProposal findUniqueOrThrow
   */
  export type InterventionProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * Filter, which InterventionProposal to fetch.
     */
    where: InterventionProposalWhereUniqueInput
  }

  /**
   * InterventionProposal findFirst
   */
  export type InterventionProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * Filter, which InterventionProposal to fetch.
     */
    where?: InterventionProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterventionProposals to fetch.
     */
    orderBy?: InterventionProposalOrderByWithRelationInput | InterventionProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterventionProposals.
     */
    cursor?: InterventionProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterventionProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterventionProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterventionProposals.
     */
    distinct?: InterventionProposalScalarFieldEnum | InterventionProposalScalarFieldEnum[]
  }

  /**
   * InterventionProposal findFirstOrThrow
   */
  export type InterventionProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * Filter, which InterventionProposal to fetch.
     */
    where?: InterventionProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterventionProposals to fetch.
     */
    orderBy?: InterventionProposalOrderByWithRelationInput | InterventionProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InterventionProposals.
     */
    cursor?: InterventionProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterventionProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterventionProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InterventionProposals.
     */
    distinct?: InterventionProposalScalarFieldEnum | InterventionProposalScalarFieldEnum[]
  }

  /**
   * InterventionProposal findMany
   */
  export type InterventionProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * Filter, which InterventionProposals to fetch.
     */
    where?: InterventionProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InterventionProposals to fetch.
     */
    orderBy?: InterventionProposalOrderByWithRelationInput | InterventionProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InterventionProposals.
     */
    cursor?: InterventionProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InterventionProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InterventionProposals.
     */
    skip?: number
    distinct?: InterventionProposalScalarFieldEnum | InterventionProposalScalarFieldEnum[]
  }

  /**
   * InterventionProposal create
   */
  export type InterventionProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a InterventionProposal.
     */
    data: XOR<InterventionProposalCreateInput, InterventionProposalUncheckedCreateInput>
  }

  /**
   * InterventionProposal createMany
   */
  export type InterventionProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InterventionProposals.
     */
    data: InterventionProposalCreateManyInput | InterventionProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InterventionProposal update
   */
  export type InterventionProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a InterventionProposal.
     */
    data: XOR<InterventionProposalUpdateInput, InterventionProposalUncheckedUpdateInput>
    /**
     * Choose, which InterventionProposal to update.
     */
    where: InterventionProposalWhereUniqueInput
  }

  /**
   * InterventionProposal updateMany
   */
  export type InterventionProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InterventionProposals.
     */
    data: XOR<InterventionProposalUpdateManyMutationInput, InterventionProposalUncheckedUpdateManyInput>
    /**
     * Filter which InterventionProposals to update
     */
    where?: InterventionProposalWhereInput
    /**
     * Limit how many InterventionProposals to update.
     */
    limit?: number
  }

  /**
   * InterventionProposal upsert
   */
  export type InterventionProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the InterventionProposal to update in case it exists.
     */
    where: InterventionProposalWhereUniqueInput
    /**
     * In case the InterventionProposal found by the `where` argument doesn't exist, create a new InterventionProposal with this data.
     */
    create: XOR<InterventionProposalCreateInput, InterventionProposalUncheckedCreateInput>
    /**
     * In case the InterventionProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterventionProposalUpdateInput, InterventionProposalUncheckedUpdateInput>
  }

  /**
   * InterventionProposal delete
   */
  export type InterventionProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    /**
     * Filter which InterventionProposal to delete.
     */
    where: InterventionProposalWhereUniqueInput
  }

  /**
   * InterventionProposal deleteMany
   */
  export type InterventionProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InterventionProposals to delete
     */
    where?: InterventionProposalWhereInput
    /**
     * Limit how many InterventionProposals to delete.
     */
    limit?: number
  }

  /**
   * InterventionProposal without action
   */
  export type InterventionProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
  }


  /**
   * Model MediaFeedback
   */

  export type AggregateMediaFeedback = {
    _count: MediaFeedbackCountAggregateOutputType | null
    _avg: MediaFeedbackAvgAggregateOutputType | null
    _sum: MediaFeedbackSumAggregateOutputType | null
    _min: MediaFeedbackMinAggregateOutputType | null
    _max: MediaFeedbackMaxAggregateOutputType | null
  }

  export type MediaFeedbackAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type MediaFeedbackSumAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type MediaFeedbackMinAggregateOutputType = {
    id: number | null
    mediaGallery: string | null
    caption: string | null
    eventId: number | null
  }

  export type MediaFeedbackMaxAggregateOutputType = {
    id: number | null
    mediaGallery: string | null
    caption: string | null
    eventId: number | null
  }

  export type MediaFeedbackCountAggregateOutputType = {
    id: number
    mediaGallery: number
    caption: number
    eventId: number
    _all: number
  }


  export type MediaFeedbackAvgAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type MediaFeedbackSumAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type MediaFeedbackMinAggregateInputType = {
    id?: true
    mediaGallery?: true
    caption?: true
    eventId?: true
  }

  export type MediaFeedbackMaxAggregateInputType = {
    id?: true
    mediaGallery?: true
    caption?: true
    eventId?: true
  }

  export type MediaFeedbackCountAggregateInputType = {
    id?: true
    mediaGallery?: true
    caption?: true
    eventId?: true
    _all?: true
  }

  export type MediaFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFeedback to aggregate.
     */
    where?: MediaFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFeedbacks to fetch.
     */
    orderBy?: MediaFeedbackOrderByWithRelationInput | MediaFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaFeedbacks
    **/
    _count?: true | MediaFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaFeedbackMaxAggregateInputType
  }

  export type GetMediaFeedbackAggregateType<T extends MediaFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaFeedback[P]>
      : GetScalarType<T[P], AggregateMediaFeedback[P]>
  }




  export type MediaFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFeedbackWhereInput
    orderBy?: MediaFeedbackOrderByWithAggregationInput | MediaFeedbackOrderByWithAggregationInput[]
    by: MediaFeedbackScalarFieldEnum[] | MediaFeedbackScalarFieldEnum
    having?: MediaFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaFeedbackCountAggregateInputType | true
    _avg?: MediaFeedbackAvgAggregateInputType
    _sum?: MediaFeedbackSumAggregateInputType
    _min?: MediaFeedbackMinAggregateInputType
    _max?: MediaFeedbackMaxAggregateInputType
  }

  export type MediaFeedbackGroupByOutputType = {
    id: number
    mediaGallery: string
    caption: string | null
    eventId: number
    _count: MediaFeedbackCountAggregateOutputType | null
    _avg: MediaFeedbackAvgAggregateOutputType | null
    _sum: MediaFeedbackSumAggregateOutputType | null
    _min: MediaFeedbackMinAggregateOutputType | null
    _max: MediaFeedbackMaxAggregateOutputType | null
  }

  type GetMediaFeedbackGroupByPayload<T extends MediaFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], MediaFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type MediaFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaGallery?: boolean
    caption?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaFeedback"]>



  export type MediaFeedbackSelectScalar = {
    id?: boolean
    mediaGallery?: boolean
    caption?: boolean
    eventId?: boolean
  }

  export type MediaFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mediaGallery" | "caption" | "eventId", ExtArgs["result"]["mediaFeedback"]>
  export type MediaFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $MediaFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaFeedback"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mediaGallery: string
      caption: string | null
      eventId: number
    }, ExtArgs["result"]["mediaFeedback"]>
    composites: {}
  }

  type MediaFeedbackGetPayload<S extends boolean | null | undefined | MediaFeedbackDefaultArgs> = $Result.GetResult<Prisma.$MediaFeedbackPayload, S>

  type MediaFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaFeedbackCountAggregateInputType | true
    }

  export interface MediaFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaFeedback'], meta: { name: 'MediaFeedback' } }
    /**
     * Find zero or one MediaFeedback that matches the filter.
     * @param {MediaFeedbackFindUniqueArgs} args - Arguments to find a MediaFeedback
     * @example
     * // Get one MediaFeedback
     * const mediaFeedback = await prisma.mediaFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFeedbackFindUniqueArgs>(args: SelectSubset<T, MediaFeedbackFindUniqueArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFeedbackFindUniqueOrThrowArgs} args - Arguments to find a MediaFeedback
     * @example
     * // Get one MediaFeedback
     * const mediaFeedback = await prisma.mediaFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackFindFirstArgs} args - Arguments to find a MediaFeedback
     * @example
     * // Get one MediaFeedback
     * const mediaFeedback = await prisma.mediaFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFeedbackFindFirstArgs>(args?: SelectSubset<T, MediaFeedbackFindFirstArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackFindFirstOrThrowArgs} args - Arguments to find a MediaFeedback
     * @example
     * // Get one MediaFeedback
     * const mediaFeedback = await prisma.mediaFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaFeedbacks
     * const mediaFeedbacks = await prisma.mediaFeedback.findMany()
     * 
     * // Get first 10 MediaFeedbacks
     * const mediaFeedbacks = await prisma.mediaFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaFeedbackWithIdOnly = await prisma.mediaFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFeedbackFindManyArgs>(args?: SelectSubset<T, MediaFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaFeedback.
     * @param {MediaFeedbackCreateArgs} args - Arguments to create a MediaFeedback.
     * @example
     * // Create one MediaFeedback
     * const MediaFeedback = await prisma.mediaFeedback.create({
     *   data: {
     *     // ... data to create a MediaFeedback
     *   }
     * })
     * 
     */
    create<T extends MediaFeedbackCreateArgs>(args: SelectSubset<T, MediaFeedbackCreateArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaFeedbacks.
     * @param {MediaFeedbackCreateManyArgs} args - Arguments to create many MediaFeedbacks.
     * @example
     * // Create many MediaFeedbacks
     * const mediaFeedback = await prisma.mediaFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaFeedbackCreateManyArgs>(args?: SelectSubset<T, MediaFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaFeedback.
     * @param {MediaFeedbackDeleteArgs} args - Arguments to delete one MediaFeedback.
     * @example
     * // Delete one MediaFeedback
     * const MediaFeedback = await prisma.mediaFeedback.delete({
     *   where: {
     *     // ... filter to delete one MediaFeedback
     *   }
     * })
     * 
     */
    delete<T extends MediaFeedbackDeleteArgs>(args: SelectSubset<T, MediaFeedbackDeleteArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaFeedback.
     * @param {MediaFeedbackUpdateArgs} args - Arguments to update one MediaFeedback.
     * @example
     * // Update one MediaFeedback
     * const mediaFeedback = await prisma.mediaFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaFeedbackUpdateArgs>(args: SelectSubset<T, MediaFeedbackUpdateArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaFeedbacks.
     * @param {MediaFeedbackDeleteManyArgs} args - Arguments to filter MediaFeedbacks to delete.
     * @example
     * // Delete a few MediaFeedbacks
     * const { count } = await prisma.mediaFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaFeedbackDeleteManyArgs>(args?: SelectSubset<T, MediaFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaFeedbacks
     * const mediaFeedback = await prisma.mediaFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaFeedbackUpdateManyArgs>(args: SelectSubset<T, MediaFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaFeedback.
     * @param {MediaFeedbackUpsertArgs} args - Arguments to update or create a MediaFeedback.
     * @example
     * // Update or create a MediaFeedback
     * const mediaFeedback = await prisma.mediaFeedback.upsert({
     *   create: {
     *     // ... data to create a MediaFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaFeedback we want to update
     *   }
     * })
     */
    upsert<T extends MediaFeedbackUpsertArgs>(args: SelectSubset<T, MediaFeedbackUpsertArgs<ExtArgs>>): Prisma__MediaFeedbackClient<$Result.GetResult<Prisma.$MediaFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackCountArgs} args - Arguments to filter MediaFeedbacks to count.
     * @example
     * // Count the number of MediaFeedbacks
     * const count = await prisma.mediaFeedback.count({
     *   where: {
     *     // ... the filter for the MediaFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends MediaFeedbackCountArgs>(
      args?: Subset<T, MediaFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaFeedbackAggregateArgs>(args: Subset<T, MediaFeedbackAggregateArgs>): Prisma.PrismaPromise<GetMediaFeedbackAggregateType<T>>

    /**
     * Group by MediaFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFeedbackGroupByArgs} args - Group by arguments.
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
      T extends MediaFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: MediaFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaFeedback model
   */
  readonly fields: MediaFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MediaFeedback model
   */
  interface MediaFeedbackFieldRefs {
    readonly id: FieldRef<"MediaFeedback", 'Int'>
    readonly mediaGallery: FieldRef<"MediaFeedback", 'String'>
    readonly caption: FieldRef<"MediaFeedback", 'String'>
    readonly eventId: FieldRef<"MediaFeedback", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MediaFeedback findUnique
   */
  export type MediaFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MediaFeedback to fetch.
     */
    where: MediaFeedbackWhereUniqueInput
  }

  /**
   * MediaFeedback findUniqueOrThrow
   */
  export type MediaFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MediaFeedback to fetch.
     */
    where: MediaFeedbackWhereUniqueInput
  }

  /**
   * MediaFeedback findFirst
   */
  export type MediaFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MediaFeedback to fetch.
     */
    where?: MediaFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFeedbacks to fetch.
     */
    orderBy?: MediaFeedbackOrderByWithRelationInput | MediaFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFeedbacks.
     */
    cursor?: MediaFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFeedbacks.
     */
    distinct?: MediaFeedbackScalarFieldEnum | MediaFeedbackScalarFieldEnum[]
  }

  /**
   * MediaFeedback findFirstOrThrow
   */
  export type MediaFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MediaFeedback to fetch.
     */
    where?: MediaFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFeedbacks to fetch.
     */
    orderBy?: MediaFeedbackOrderByWithRelationInput | MediaFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFeedbacks.
     */
    cursor?: MediaFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFeedbacks.
     */
    distinct?: MediaFeedbackScalarFieldEnum | MediaFeedbackScalarFieldEnum[]
  }

  /**
   * MediaFeedback findMany
   */
  export type MediaFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which MediaFeedbacks to fetch.
     */
    where?: MediaFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFeedbacks to fetch.
     */
    orderBy?: MediaFeedbackOrderByWithRelationInput | MediaFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaFeedbacks.
     */
    cursor?: MediaFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFeedbacks.
     */
    skip?: number
    distinct?: MediaFeedbackScalarFieldEnum | MediaFeedbackScalarFieldEnum[]
  }

  /**
   * MediaFeedback create
   */
  export type MediaFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaFeedback.
     */
    data: XOR<MediaFeedbackCreateInput, MediaFeedbackUncheckedCreateInput>
  }

  /**
   * MediaFeedback createMany
   */
  export type MediaFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaFeedbacks.
     */
    data: MediaFeedbackCreateManyInput | MediaFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaFeedback update
   */
  export type MediaFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaFeedback.
     */
    data: XOR<MediaFeedbackUpdateInput, MediaFeedbackUncheckedUpdateInput>
    /**
     * Choose, which MediaFeedback to update.
     */
    where: MediaFeedbackWhereUniqueInput
  }

  /**
   * MediaFeedback updateMany
   */
  export type MediaFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaFeedbacks.
     */
    data: XOR<MediaFeedbackUpdateManyMutationInput, MediaFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which MediaFeedbacks to update
     */
    where?: MediaFeedbackWhereInput
    /**
     * Limit how many MediaFeedbacks to update.
     */
    limit?: number
  }

  /**
   * MediaFeedback upsert
   */
  export type MediaFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaFeedback to update in case it exists.
     */
    where: MediaFeedbackWhereUniqueInput
    /**
     * In case the MediaFeedback found by the `where` argument doesn't exist, create a new MediaFeedback with this data.
     */
    create: XOR<MediaFeedbackCreateInput, MediaFeedbackUncheckedCreateInput>
    /**
     * In case the MediaFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaFeedbackUpdateInput, MediaFeedbackUncheckedUpdateInput>
  }

  /**
   * MediaFeedback delete
   */
  export type MediaFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
    /**
     * Filter which MediaFeedback to delete.
     */
    where: MediaFeedbackWhereUniqueInput
  }

  /**
   * MediaFeedback deleteMany
   */
  export type MediaFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFeedbacks to delete
     */
    where?: MediaFeedbackWhereInput
    /**
     * Limit how many MediaFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * MediaFeedback without action
   */
  export type MediaFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFeedback
     */
    select?: MediaFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaFeedback
     */
    omit?: MediaFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type RegistrationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    eventId: number | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    eventId: number | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    eventId: number
    _all: number
  }


  export type RegistrationAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type RegistrationSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
  }

  export type RegistrationMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    eventId?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    eventId?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    eventId?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _avg?: RegistrationAvgAggregateInputType
    _sum?: RegistrationSumAggregateInputType
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    eventId: number
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    eventId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>



  export type RegistrationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    eventId?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "eventId", ExtArgs["result"]["registration"]>
  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: number
      eventId: number
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
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
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Registration model
   */
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'Int'>
    readonly createdAt: FieldRef<"Registration", 'DateTime'>
    readonly userId: FieldRef<"Registration", 'Int'>
    readonly eventId: FieldRef<"Registration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.ResourceType | null
    linkOrFile: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.ResourceType | null
    linkOrFile: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    linkOrFile: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    linkOrFile?: true
    createdAt?: true
    createdById?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    linkOrFile?: true
    createdAt?: true
    createdById?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    linkOrFile?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt: Date
    createdById: number
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    linkOrFile?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>



  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    linkOrFile?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "linkOrFile" | "createdAt" | "createdById", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: $Enums.ResourceType
      linkOrFile: string
      createdAt: Date
      createdById: number
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'Int'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly type: FieldRef<"Resource", 'ResourceType'>
    readonly linkOrFile: FieldRef<"Resource", 'String'>
    readonly createdAt: FieldRef<"Resource", 'DateTime'>
    readonly createdById: FieldRef<"Resource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model Testimonial
   */

  export type AggregateTestimonial = {
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  export type TestimonialAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type TestimonialSumAggregateOutputType = {
    id: number | null
    createdById: number | null
  }

  export type TestimonialMinAggregateOutputType = {
    id: number | null
    content: string | null
    authorName: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type TestimonialMaxAggregateOutputType = {
    id: number | null
    content: string | null
    authorName: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type TestimonialCountAggregateOutputType = {
    id: number
    content: number
    authorName: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type TestimonialAvgAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type TestimonialSumAggregateInputType = {
    id?: true
    createdById?: true
  }

  export type TestimonialMinAggregateInputType = {
    id?: true
    content?: true
    authorName?: true
    createdAt?: true
    createdById?: true
  }

  export type TestimonialMaxAggregateInputType = {
    id?: true
    content?: true
    authorName?: true
    createdAt?: true
    createdById?: true
  }

  export type TestimonialCountAggregateInputType = {
    id?: true
    content?: true
    authorName?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type TestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonial to aggregate.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Testimonials
    **/
    _count?: true | TestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestimonialMaxAggregateInputType
  }

  export type GetTestimonialAggregateType<T extends TestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestimonial[P]>
      : GetScalarType<T[P], AggregateTestimonial[P]>
  }




  export type TestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithAggregationInput | TestimonialOrderByWithAggregationInput[]
    by: TestimonialScalarFieldEnum[] | TestimonialScalarFieldEnum
    having?: TestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestimonialCountAggregateInputType | true
    _avg?: TestimonialAvgAggregateInputType
    _sum?: TestimonialSumAggregateInputType
    _min?: TestimonialMinAggregateInputType
    _max?: TestimonialMaxAggregateInputType
  }

  export type TestimonialGroupByOutputType = {
    id: number
    content: string
    authorName: string
    createdAt: Date
    createdById: number
    _count: TestimonialCountAggregateOutputType | null
    _avg: TestimonialAvgAggregateOutputType | null
    _sum: TestimonialSumAggregateOutputType | null
    _min: TestimonialMinAggregateOutputType | null
    _max: TestimonialMaxAggregateOutputType | null
  }

  type GetTestimonialGroupByPayload<T extends TestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], TestimonialGroupByOutputType[P]>
        }
      >
    >


  export type TestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorName?: boolean
    createdAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testimonial"]>



  export type TestimonialSelectScalar = {
    id?: boolean
    content?: boolean
    authorName?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type TestimonialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "authorName" | "createdAt" | "createdById", ExtArgs["result"]["testimonial"]>
  export type TestimonialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Testimonial"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      authorName: string
      createdAt: Date
      createdById: number
    }, ExtArgs["result"]["testimonial"]>
    composites: {}
  }

  type TestimonialGetPayload<S extends boolean | null | undefined | TestimonialDefaultArgs> = $Result.GetResult<Prisma.$TestimonialPayload, S>

  type TestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestimonialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestimonialCountAggregateInputType | true
    }

  export interface TestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Testimonial'], meta: { name: 'Testimonial' } }
    /**
     * Find zero or one Testimonial that matches the filter.
     * @param {TestimonialFindUniqueArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestimonialFindUniqueArgs>(args: SelectSubset<T, TestimonialFindUniqueArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testimonial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestimonialFindUniqueOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, TestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestimonialFindFirstArgs>(args?: SelectSubset<T, TestimonialFindFirstArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindFirstOrThrowArgs} args - Arguments to find a Testimonial
     * @example
     * // Get one Testimonial
     * const testimonial = await prisma.testimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, TestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testimonials
     * const testimonials = await prisma.testimonial.findMany()
     * 
     * // Get first 10 Testimonials
     * const testimonials = await prisma.testimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testimonialWithIdOnly = await prisma.testimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestimonialFindManyArgs>(args?: SelectSubset<T, TestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testimonial.
     * @param {TestimonialCreateArgs} args - Arguments to create a Testimonial.
     * @example
     * // Create one Testimonial
     * const Testimonial = await prisma.testimonial.create({
     *   data: {
     *     // ... data to create a Testimonial
     *   }
     * })
     * 
     */
    create<T extends TestimonialCreateArgs>(args: SelectSubset<T, TestimonialCreateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testimonials.
     * @param {TestimonialCreateManyArgs} args - Arguments to create many Testimonials.
     * @example
     * // Create many Testimonials
     * const testimonial = await prisma.testimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestimonialCreateManyArgs>(args?: SelectSubset<T, TestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Testimonial.
     * @param {TestimonialDeleteArgs} args - Arguments to delete one Testimonial.
     * @example
     * // Delete one Testimonial
     * const Testimonial = await prisma.testimonial.delete({
     *   where: {
     *     // ... filter to delete one Testimonial
     *   }
     * })
     * 
     */
    delete<T extends TestimonialDeleteArgs>(args: SelectSubset<T, TestimonialDeleteArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testimonial.
     * @param {TestimonialUpdateArgs} args - Arguments to update one Testimonial.
     * @example
     * // Update one Testimonial
     * const testimonial = await prisma.testimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestimonialUpdateArgs>(args: SelectSubset<T, TestimonialUpdateArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testimonials.
     * @param {TestimonialDeleteManyArgs} args - Arguments to filter Testimonials to delete.
     * @example
     * // Delete a few Testimonials
     * const { count } = await prisma.testimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestimonialDeleteManyArgs>(args?: SelectSubset<T, TestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testimonials
     * const testimonial = await prisma.testimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestimonialUpdateManyArgs>(args: SelectSubset<T, TestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Testimonial.
     * @param {TestimonialUpsertArgs} args - Arguments to update or create a Testimonial.
     * @example
     * // Update or create a Testimonial
     * const testimonial = await prisma.testimonial.upsert({
     *   create: {
     *     // ... data to create a Testimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testimonial we want to update
     *   }
     * })
     */
    upsert<T extends TestimonialUpsertArgs>(args: SelectSubset<T, TestimonialUpsertArgs<ExtArgs>>): Prisma__TestimonialClient<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialCountArgs} args - Arguments to filter Testimonials to count.
     * @example
     * // Count the number of Testimonials
     * const count = await prisma.testimonial.count({
     *   where: {
     *     // ... the filter for the Testimonials we want to count
     *   }
     * })
    **/
    count<T extends TestimonialCountArgs>(
      args?: Subset<T, TestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestimonialAggregateArgs>(args: Subset<T, TestimonialAggregateArgs>): Prisma.PrismaPromise<GetTestimonialAggregateType<T>>

    /**
     * Group by Testimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestimonialGroupByArgs} args - Group by arguments.
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
      T extends TestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestimonialGroupByArgs['orderBy'] }
        : { orderBy?: TestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Testimonial model
   */
  readonly fields: TestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Testimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Testimonial model
   */
  interface TestimonialFieldRefs {
    readonly id: FieldRef<"Testimonial", 'Int'>
    readonly content: FieldRef<"Testimonial", 'String'>
    readonly authorName: FieldRef<"Testimonial", 'String'>
    readonly createdAt: FieldRef<"Testimonial", 'DateTime'>
    readonly createdById: FieldRef<"Testimonial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Testimonial findUnique
   */
  export type TestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findUniqueOrThrow
   */
  export type TestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial findFirst
   */
  export type TestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findFirstOrThrow
   */
  export type TestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonial to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Testimonials.
     */
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial findMany
   */
  export type TestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter, which Testimonials to fetch.
     */
    where?: TestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Testimonials to fetch.
     */
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Testimonials.
     */
    cursor?: TestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Testimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Testimonials.
     */
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * Testimonial create
   */
  export type TestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * The data needed to create a Testimonial.
     */
    data: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
  }

  /**
   * Testimonial createMany
   */
  export type TestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Testimonials.
     */
    data: TestimonialCreateManyInput | TestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Testimonial update
   */
  export type TestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * The data needed to update a Testimonial.
     */
    data: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
    /**
     * Choose, which Testimonial to update.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial updateMany
   */
  export type TestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Testimonials.
     */
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyInput>
    /**
     * Filter which Testimonials to update
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to update.
     */
    limit?: number
  }

  /**
   * Testimonial upsert
   */
  export type TestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * The filter to search for the Testimonial to update in case it exists.
     */
    where: TestimonialWhereUniqueInput
    /**
     * In case the Testimonial found by the `where` argument doesn't exist, create a new Testimonial with this data.
     */
    create: XOR<TestimonialCreateInput, TestimonialUncheckedCreateInput>
    /**
     * In case the Testimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestimonialUpdateInput, TestimonialUncheckedUpdateInput>
  }

  /**
   * Testimonial delete
   */
  export type TestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    /**
     * Filter which Testimonial to delete.
     */
    where: TestimonialWhereUniqueInput
  }

  /**
   * Testimonial deleteMany
   */
  export type TestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Testimonials to delete
     */
    where?: TestimonialWhereInput
    /**
     * Limit how many Testimonials to delete.
     */
    limit?: number
  }

  /**
   * Testimonial without action
   */
  export type TestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
  }


  /**
   * Model Thematic
   */

  export type AggregateThematic = {
    _count: ThematicCountAggregateOutputType | null
    _avg: ThematicAvgAggregateOutputType | null
    _sum: ThematicSumAggregateOutputType | null
    _min: ThematicMinAggregateOutputType | null
    _max: ThematicMaxAggregateOutputType | null
  }

  export type ThematicAvgAggregateOutputType = {
    id: number | null
  }

  export type ThematicSumAggregateOutputType = {
    id: number | null
  }

  export type ThematicMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ThematicMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ThematicCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ThematicAvgAggregateInputType = {
    id?: true
  }

  export type ThematicSumAggregateInputType = {
    id?: true
  }

  export type ThematicMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ThematicMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ThematicCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ThematicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thematic to aggregate.
     */
    where?: ThematicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thematics to fetch.
     */
    orderBy?: ThematicOrderByWithRelationInput | ThematicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThematicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thematics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thematics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Thematics
    **/
    _count?: true | ThematicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThematicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThematicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThematicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThematicMaxAggregateInputType
  }

  export type GetThematicAggregateType<T extends ThematicAggregateArgs> = {
        [P in keyof T & keyof AggregateThematic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThematic[P]>
      : GetScalarType<T[P], AggregateThematic[P]>
  }




  export type ThematicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThematicWhereInput
    orderBy?: ThematicOrderByWithAggregationInput | ThematicOrderByWithAggregationInput[]
    by: ThematicScalarFieldEnum[] | ThematicScalarFieldEnum
    having?: ThematicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThematicCountAggregateInputType | true
    _avg?: ThematicAvgAggregateInputType
    _sum?: ThematicSumAggregateInputType
    _min?: ThematicMinAggregateInputType
    _max?: ThematicMaxAggregateInputType
  }

  export type ThematicGroupByOutputType = {
    id: number
    name: string
    _count: ThematicCountAggregateOutputType | null
    _avg: ThematicAvgAggregateOutputType | null
    _sum: ThematicSumAggregateOutputType | null
    _min: ThematicMinAggregateOutputType | null
    _max: ThematicMaxAggregateOutputType | null
  }

  type GetThematicGroupByPayload<T extends ThematicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThematicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThematicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThematicGroupByOutputType[P]>
            : GetScalarType<T[P], ThematicGroupByOutputType[P]>
        }
      >
    >


  export type ThematicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    events?: boolean | Thematic$eventsArgs<ExtArgs>
    _count?: boolean | ThematicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thematic"]>



  export type ThematicSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ThematicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["thematic"]>
  export type ThematicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Thematic$eventsArgs<ExtArgs>
    _count?: boolean | ThematicCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ThematicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thematic"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["thematic"]>
    composites: {}
  }

  type ThematicGetPayload<S extends boolean | null | undefined | ThematicDefaultArgs> = $Result.GetResult<Prisma.$ThematicPayload, S>

  type ThematicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThematicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThematicCountAggregateInputType | true
    }

  export interface ThematicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thematic'], meta: { name: 'Thematic' } }
    /**
     * Find zero or one Thematic that matches the filter.
     * @param {ThematicFindUniqueArgs} args - Arguments to find a Thematic
     * @example
     * // Get one Thematic
     * const thematic = await prisma.thematic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThematicFindUniqueArgs>(args: SelectSubset<T, ThematicFindUniqueArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thematic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThematicFindUniqueOrThrowArgs} args - Arguments to find a Thematic
     * @example
     * // Get one Thematic
     * const thematic = await prisma.thematic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThematicFindUniqueOrThrowArgs>(args: SelectSubset<T, ThematicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thematic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicFindFirstArgs} args - Arguments to find a Thematic
     * @example
     * // Get one Thematic
     * const thematic = await prisma.thematic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThematicFindFirstArgs>(args?: SelectSubset<T, ThematicFindFirstArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thematic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicFindFirstOrThrowArgs} args - Arguments to find a Thematic
     * @example
     * // Get one Thematic
     * const thematic = await prisma.thematic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThematicFindFirstOrThrowArgs>(args?: SelectSubset<T, ThematicFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thematics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thematics
     * const thematics = await prisma.thematic.findMany()
     * 
     * // Get first 10 Thematics
     * const thematics = await prisma.thematic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thematicWithIdOnly = await prisma.thematic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThematicFindManyArgs>(args?: SelectSubset<T, ThematicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thematic.
     * @param {ThematicCreateArgs} args - Arguments to create a Thematic.
     * @example
     * // Create one Thematic
     * const Thematic = await prisma.thematic.create({
     *   data: {
     *     // ... data to create a Thematic
     *   }
     * })
     * 
     */
    create<T extends ThematicCreateArgs>(args: SelectSubset<T, ThematicCreateArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thematics.
     * @param {ThematicCreateManyArgs} args - Arguments to create many Thematics.
     * @example
     * // Create many Thematics
     * const thematic = await prisma.thematic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThematicCreateManyArgs>(args?: SelectSubset<T, ThematicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Thematic.
     * @param {ThematicDeleteArgs} args - Arguments to delete one Thematic.
     * @example
     * // Delete one Thematic
     * const Thematic = await prisma.thematic.delete({
     *   where: {
     *     // ... filter to delete one Thematic
     *   }
     * })
     * 
     */
    delete<T extends ThematicDeleteArgs>(args: SelectSubset<T, ThematicDeleteArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thematic.
     * @param {ThematicUpdateArgs} args - Arguments to update one Thematic.
     * @example
     * // Update one Thematic
     * const thematic = await prisma.thematic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThematicUpdateArgs>(args: SelectSubset<T, ThematicUpdateArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thematics.
     * @param {ThematicDeleteManyArgs} args - Arguments to filter Thematics to delete.
     * @example
     * // Delete a few Thematics
     * const { count } = await prisma.thematic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThematicDeleteManyArgs>(args?: SelectSubset<T, ThematicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thematics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thematics
     * const thematic = await prisma.thematic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThematicUpdateManyArgs>(args: SelectSubset<T, ThematicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Thematic.
     * @param {ThematicUpsertArgs} args - Arguments to update or create a Thematic.
     * @example
     * // Update or create a Thematic
     * const thematic = await prisma.thematic.upsert({
     *   create: {
     *     // ... data to create a Thematic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thematic we want to update
     *   }
     * })
     */
    upsert<T extends ThematicUpsertArgs>(args: SelectSubset<T, ThematicUpsertArgs<ExtArgs>>): Prisma__ThematicClient<$Result.GetResult<Prisma.$ThematicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thematics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicCountArgs} args - Arguments to filter Thematics to count.
     * @example
     * // Count the number of Thematics
     * const count = await prisma.thematic.count({
     *   where: {
     *     // ... the filter for the Thematics we want to count
     *   }
     * })
    **/
    count<T extends ThematicCountArgs>(
      args?: Subset<T, ThematicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThematicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thematic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThematicAggregateArgs>(args: Subset<T, ThematicAggregateArgs>): Prisma.PrismaPromise<GetThematicAggregateType<T>>

    /**
     * Group by Thematic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThematicGroupByArgs} args - Group by arguments.
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
      T extends ThematicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThematicGroupByArgs['orderBy'] }
        : { orderBy?: ThematicGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThematicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThematicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thematic model
   */
  readonly fields: ThematicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thematic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThematicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Thematic$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Thematic$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Thematic model
   */
  interface ThematicFieldRefs {
    readonly id: FieldRef<"Thematic", 'Int'>
    readonly name: FieldRef<"Thematic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Thematic findUnique
   */
  export type ThematicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * Filter, which Thematic to fetch.
     */
    where: ThematicWhereUniqueInput
  }

  /**
   * Thematic findUniqueOrThrow
   */
  export type ThematicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * Filter, which Thematic to fetch.
     */
    where: ThematicWhereUniqueInput
  }

  /**
   * Thematic findFirst
   */
  export type ThematicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * Filter, which Thematic to fetch.
     */
    where?: ThematicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thematics to fetch.
     */
    orderBy?: ThematicOrderByWithRelationInput | ThematicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thematics.
     */
    cursor?: ThematicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thematics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thematics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thematics.
     */
    distinct?: ThematicScalarFieldEnum | ThematicScalarFieldEnum[]
  }

  /**
   * Thematic findFirstOrThrow
   */
  export type ThematicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * Filter, which Thematic to fetch.
     */
    where?: ThematicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thematics to fetch.
     */
    orderBy?: ThematicOrderByWithRelationInput | ThematicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thematics.
     */
    cursor?: ThematicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thematics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thematics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thematics.
     */
    distinct?: ThematicScalarFieldEnum | ThematicScalarFieldEnum[]
  }

  /**
   * Thematic findMany
   */
  export type ThematicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * Filter, which Thematics to fetch.
     */
    where?: ThematicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thematics to fetch.
     */
    orderBy?: ThematicOrderByWithRelationInput | ThematicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Thematics.
     */
    cursor?: ThematicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thematics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thematics.
     */
    skip?: number
    distinct?: ThematicScalarFieldEnum | ThematicScalarFieldEnum[]
  }

  /**
   * Thematic create
   */
  export type ThematicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * The data needed to create a Thematic.
     */
    data: XOR<ThematicCreateInput, ThematicUncheckedCreateInput>
  }

  /**
   * Thematic createMany
   */
  export type ThematicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Thematics.
     */
    data: ThematicCreateManyInput | ThematicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thematic update
   */
  export type ThematicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * The data needed to update a Thematic.
     */
    data: XOR<ThematicUpdateInput, ThematicUncheckedUpdateInput>
    /**
     * Choose, which Thematic to update.
     */
    where: ThematicWhereUniqueInput
  }

  /**
   * Thematic updateMany
   */
  export type ThematicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Thematics.
     */
    data: XOR<ThematicUpdateManyMutationInput, ThematicUncheckedUpdateManyInput>
    /**
     * Filter which Thematics to update
     */
    where?: ThematicWhereInput
    /**
     * Limit how many Thematics to update.
     */
    limit?: number
  }

  /**
   * Thematic upsert
   */
  export type ThematicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * The filter to search for the Thematic to update in case it exists.
     */
    where: ThematicWhereUniqueInput
    /**
     * In case the Thematic found by the `where` argument doesn't exist, create a new Thematic with this data.
     */
    create: XOR<ThematicCreateInput, ThematicUncheckedCreateInput>
    /**
     * In case the Thematic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThematicUpdateInput, ThematicUncheckedUpdateInput>
  }

  /**
   * Thematic delete
   */
  export type ThematicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
    /**
     * Filter which Thematic to delete.
     */
    where: ThematicWhereUniqueInput
  }

  /**
   * Thematic deleteMany
   */
  export type ThematicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thematics to delete
     */
    where?: ThematicWhereInput
    /**
     * Limit how many Thematics to delete.
     */
    limit?: number
  }

  /**
   * Thematic.events
   */
  export type Thematic$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Thematic without action
   */
  export type ThematicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thematic
     */
    select?: ThematicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thematic
     */
    omit?: ThematicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThematicInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: $Enums.UserStatus | null
    isNewsletterSubscriber: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    status: $Enums.UserStatus | null
    isNewsletterSubscriber: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    status: number
    isNewsletterSubscriber: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    isNewsletterSubscriber?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    isNewsletterSubscriber?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    status?: true
    isNewsletterSubscriber?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string | null
    status: $Enums.UserStatus | null
    isNewsletterSubscriber: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    isNewsletterSubscriber?: boolean
    createdAt?: boolean
    volunteerApplication?: boolean | User$volunteerApplicationArgs<ExtArgs>
    interventionProposal?: boolean | User$interventionProposalArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    resources?: boolean | User$resourcesArgs<ExtArgs>
    testimonials?: boolean | User$testimonialsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    volunteerAssignments?: boolean | User$volunteerAssignmentsArgs<ExtArgs>
    volunteerInEvents?: boolean | User$volunteerInEventsArgs<ExtArgs>
    employeeInEvents?: boolean | User$employeeInEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    isNewsletterSubscriber?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "status" | "isNewsletterSubscriber" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteerApplication?: boolean | User$volunteerApplicationArgs<ExtArgs>
    interventionProposal?: boolean | User$interventionProposalArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    resources?: boolean | User$resourcesArgs<ExtArgs>
    testimonials?: boolean | User$testimonialsArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    volunteerAssignments?: boolean | User$volunteerAssignmentsArgs<ExtArgs>
    volunteerInEvents?: boolean | User$volunteerInEventsArgs<ExtArgs>
    employeeInEvents?: boolean | User$employeeInEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      volunteerApplication: Prisma.$VolunteerApplicationPayload<ExtArgs> | null
      interventionProposal: Prisma.$InterventionProposalPayload<ExtArgs> | null
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      createdEvents: Prisma.$EventPayload<ExtArgs>[]
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      testimonials: Prisma.$TestimonialPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
      volunteerAssignments: Prisma.$VolunteerAssignmentPayload<ExtArgs>[]
      volunteerInEvents: Prisma.$EventPayload<ExtArgs>[]
      employeeInEvents: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string | null
      status: $Enums.UserStatus | null
      isNewsletterSubscriber: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteerApplication<T extends User$volunteerApplicationArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerApplicationArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    interventionProposal<T extends User$interventionProposalArgs<ExtArgs> = {}>(args?: Subset<T, User$interventionProposalArgs<ExtArgs>>): Prisma__InterventionProposalClient<$Result.GetResult<Prisma.$InterventionProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdEvents<T extends User$createdEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resources<T extends User$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, User$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testimonials<T extends User$testimonialsArgs<ExtArgs> = {}>(args?: Subset<T, User$testimonialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestimonialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends User$donationsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteerAssignments<T extends User$volunteerAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteerInEvents<T extends User$volunteerInEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$volunteerInEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employeeInEvents<T extends User$employeeInEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$employeeInEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly isNewsletterSubscriber: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.volunteerApplication
   */
  export type User$volunteerApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    where?: VolunteerApplicationWhereInput
  }

  /**
   * User.interventionProposal
   */
  export type User$interventionProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterventionProposal
     */
    select?: InterventionProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InterventionProposal
     */
    omit?: InterventionProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterventionProposalInclude<ExtArgs> | null
    where?: InterventionProposalWhereInput
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * User.createdEvents
   */
  export type User$createdEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.resources
   */
  export type User$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * User.testimonials
   */
  export type User$testimonialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Testimonial
     */
    select?: TestimonialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Testimonial
     */
    omit?: TestimonialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestimonialInclude<ExtArgs> | null
    where?: TestimonialWhereInput
    orderBy?: TestimonialOrderByWithRelationInput | TestimonialOrderByWithRelationInput[]
    cursor?: TestimonialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestimonialScalarFieldEnum | TestimonialScalarFieldEnum[]
  }

  /**
   * User.donations
   */
  export type User$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.volunteerAssignments
   */
  export type User$volunteerAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    where?: VolunteerAssignmentWhereInput
    orderBy?: VolunteerAssignmentOrderByWithRelationInput | VolunteerAssignmentOrderByWithRelationInput[]
    cursor?: VolunteerAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerAssignmentScalarFieldEnum | VolunteerAssignmentScalarFieldEnum[]
  }

  /**
   * User.volunteerInEvents
   */
  export type User$volunteerInEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.employeeInEvents
   */
  export type User$employeeInEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VolunteerApplication
   */

  export type AggregateVolunteerApplication = {
    _count: VolunteerApplicationCountAggregateOutputType | null
    _avg: VolunteerApplicationAvgAggregateOutputType | null
    _sum: VolunteerApplicationSumAggregateOutputType | null
    _min: VolunteerApplicationMinAggregateOutputType | null
    _max: VolunteerApplicationMaxAggregateOutputType | null
  }

  export type VolunteerApplicationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VolunteerApplicationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type VolunteerApplicationMinAggregateOutputType = {
    id: number | null
    desiredRoles: string | null
    motivation: string | null
    status: $Enums.ApplicationStatus | null
    notes: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type VolunteerApplicationMaxAggregateOutputType = {
    id: number | null
    desiredRoles: string | null
    motivation: string | null
    status: $Enums.ApplicationStatus | null
    notes: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type VolunteerApplicationCountAggregateOutputType = {
    id: number
    desiredRoles: number
    motivation: number
    status: number
    notes: number
    createdAt: number
    userId: number
    _all: number
  }


  export type VolunteerApplicationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VolunteerApplicationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type VolunteerApplicationMinAggregateInputType = {
    id?: true
    desiredRoles?: true
    motivation?: true
    status?: true
    notes?: true
    createdAt?: true
    userId?: true
  }

  export type VolunteerApplicationMaxAggregateInputType = {
    id?: true
    desiredRoles?: true
    motivation?: true
    status?: true
    notes?: true
    createdAt?: true
    userId?: true
  }

  export type VolunteerApplicationCountAggregateInputType = {
    id?: true
    desiredRoles?: true
    motivation?: true
    status?: true
    notes?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type VolunteerApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerApplication to aggregate.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerApplications
    **/
    _count?: true | VolunteerApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerApplicationMaxAggregateInputType
  }

  export type GetVolunteerApplicationAggregateType<T extends VolunteerApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerApplication[P]>
      : GetScalarType<T[P], AggregateVolunteerApplication[P]>
  }




  export type VolunteerApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerApplicationWhereInput
    orderBy?: VolunteerApplicationOrderByWithAggregationInput | VolunteerApplicationOrderByWithAggregationInput[]
    by: VolunteerApplicationScalarFieldEnum[] | VolunteerApplicationScalarFieldEnum
    having?: VolunteerApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerApplicationCountAggregateInputType | true
    _avg?: VolunteerApplicationAvgAggregateInputType
    _sum?: VolunteerApplicationSumAggregateInputType
    _min?: VolunteerApplicationMinAggregateInputType
    _max?: VolunteerApplicationMaxAggregateInputType
  }

  export type VolunteerApplicationGroupByOutputType = {
    id: number
    desiredRoles: string
    motivation: string
    status: $Enums.ApplicationStatus
    notes: string | null
    createdAt: Date
    userId: number
    _count: VolunteerApplicationCountAggregateOutputType | null
    _avg: VolunteerApplicationAvgAggregateOutputType | null
    _sum: VolunteerApplicationSumAggregateOutputType | null
    _min: VolunteerApplicationMinAggregateOutputType | null
    _max: VolunteerApplicationMaxAggregateOutputType | null
  }

  type GetVolunteerApplicationGroupByPayload<T extends VolunteerApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerApplicationGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desiredRoles?: boolean
    motivation?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerApplication"]>



  export type VolunteerApplicationSelectScalar = {
    id?: boolean
    desiredRoles?: boolean
    motivation?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type VolunteerApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "desiredRoles" | "motivation" | "status" | "notes" | "createdAt" | "userId", ExtArgs["result"]["volunteerApplication"]>
  export type VolunteerApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VolunteerApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerApplication"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      desiredRoles: string
      motivation: string
      status: $Enums.ApplicationStatus
      notes: string | null
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["volunteerApplication"]>
    composites: {}
  }

  type VolunteerApplicationGetPayload<S extends boolean | null | undefined | VolunteerApplicationDefaultArgs> = $Result.GetResult<Prisma.$VolunteerApplicationPayload, S>

  type VolunteerApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerApplicationCountAggregateInputType | true
    }

  export interface VolunteerApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerApplication'], meta: { name: 'VolunteerApplication' } }
    /**
     * Find zero or one VolunteerApplication that matches the filter.
     * @param {VolunteerApplicationFindUniqueArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerApplicationFindUniqueArgs>(args: SelectSubset<T, VolunteerApplicationFindUniqueArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerApplicationFindUniqueOrThrowArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationFindFirstArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerApplicationFindFirstArgs>(args?: SelectSubset<T, VolunteerApplicationFindFirstArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationFindFirstOrThrowArgs} args - Arguments to find a VolunteerApplication
     * @example
     * // Get one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerApplications
     * const volunteerApplications = await prisma.volunteerApplication.findMany()
     * 
     * // Get first 10 VolunteerApplications
     * const volunteerApplications = await prisma.volunteerApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerApplicationWithIdOnly = await prisma.volunteerApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerApplicationFindManyArgs>(args?: SelectSubset<T, VolunteerApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerApplication.
     * @param {VolunteerApplicationCreateArgs} args - Arguments to create a VolunteerApplication.
     * @example
     * // Create one VolunteerApplication
     * const VolunteerApplication = await prisma.volunteerApplication.create({
     *   data: {
     *     // ... data to create a VolunteerApplication
     *   }
     * })
     * 
     */
    create<T extends VolunteerApplicationCreateArgs>(args: SelectSubset<T, VolunteerApplicationCreateArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerApplications.
     * @param {VolunteerApplicationCreateManyArgs} args - Arguments to create many VolunteerApplications.
     * @example
     * // Create many VolunteerApplications
     * const volunteerApplication = await prisma.volunteerApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerApplicationCreateManyArgs>(args?: SelectSubset<T, VolunteerApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VolunteerApplication.
     * @param {VolunteerApplicationDeleteArgs} args - Arguments to delete one VolunteerApplication.
     * @example
     * // Delete one VolunteerApplication
     * const VolunteerApplication = await prisma.volunteerApplication.delete({
     *   where: {
     *     // ... filter to delete one VolunteerApplication
     *   }
     * })
     * 
     */
    delete<T extends VolunteerApplicationDeleteArgs>(args: SelectSubset<T, VolunteerApplicationDeleteArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerApplication.
     * @param {VolunteerApplicationUpdateArgs} args - Arguments to update one VolunteerApplication.
     * @example
     * // Update one VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerApplicationUpdateArgs>(args: SelectSubset<T, VolunteerApplicationUpdateArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerApplications.
     * @param {VolunteerApplicationDeleteManyArgs} args - Arguments to filter VolunteerApplications to delete.
     * @example
     * // Delete a few VolunteerApplications
     * const { count } = await prisma.volunteerApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerApplicationDeleteManyArgs>(args?: SelectSubset<T, VolunteerApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerApplications
     * const volunteerApplication = await prisma.volunteerApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerApplicationUpdateManyArgs>(args: SelectSubset<T, VolunteerApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VolunteerApplication.
     * @param {VolunteerApplicationUpsertArgs} args - Arguments to update or create a VolunteerApplication.
     * @example
     * // Update or create a VolunteerApplication
     * const volunteerApplication = await prisma.volunteerApplication.upsert({
     *   create: {
     *     // ... data to create a VolunteerApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerApplication we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerApplicationUpsertArgs>(args: SelectSubset<T, VolunteerApplicationUpsertArgs<ExtArgs>>): Prisma__VolunteerApplicationClient<$Result.GetResult<Prisma.$VolunteerApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationCountArgs} args - Arguments to filter VolunteerApplications to count.
     * @example
     * // Count the number of VolunteerApplications
     * const count = await prisma.volunteerApplication.count({
     *   where: {
     *     // ... the filter for the VolunteerApplications we want to count
     *   }
     * })
    **/
    count<T extends VolunteerApplicationCountArgs>(
      args?: Subset<T, VolunteerApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteerApplicationAggregateArgs>(args: Subset<T, VolunteerApplicationAggregateArgs>): Prisma.PrismaPromise<GetVolunteerApplicationAggregateType<T>>

    /**
     * Group by VolunteerApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerApplicationGroupByArgs} args - Group by arguments.
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
      T extends VolunteerApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerApplicationGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolunteerApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerApplication model
   */
  readonly fields: VolunteerApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VolunteerApplication model
   */
  interface VolunteerApplicationFieldRefs {
    readonly id: FieldRef<"VolunteerApplication", 'Int'>
    readonly desiredRoles: FieldRef<"VolunteerApplication", 'String'>
    readonly motivation: FieldRef<"VolunteerApplication", 'String'>
    readonly status: FieldRef<"VolunteerApplication", 'ApplicationStatus'>
    readonly notes: FieldRef<"VolunteerApplication", 'String'>
    readonly createdAt: FieldRef<"VolunteerApplication", 'DateTime'>
    readonly userId: FieldRef<"VolunteerApplication", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerApplication findUnique
   */
  export type VolunteerApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication findUniqueOrThrow
   */
  export type VolunteerApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication findFirst
   */
  export type VolunteerApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerApplications.
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerApplications.
     */
    distinct?: VolunteerApplicationScalarFieldEnum | VolunteerApplicationScalarFieldEnum[]
  }

  /**
   * VolunteerApplication findFirstOrThrow
   */
  export type VolunteerApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerApplication to fetch.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerApplications.
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerApplications.
     */
    distinct?: VolunteerApplicationScalarFieldEnum | VolunteerApplicationScalarFieldEnum[]
  }

  /**
   * VolunteerApplication findMany
   */
  export type VolunteerApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerApplications to fetch.
     */
    where?: VolunteerApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerApplications to fetch.
     */
    orderBy?: VolunteerApplicationOrderByWithRelationInput | VolunteerApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerApplications.
     */
    cursor?: VolunteerApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerApplications.
     */
    skip?: number
    distinct?: VolunteerApplicationScalarFieldEnum | VolunteerApplicationScalarFieldEnum[]
  }

  /**
   * VolunteerApplication create
   */
  export type VolunteerApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a VolunteerApplication.
     */
    data: XOR<VolunteerApplicationCreateInput, VolunteerApplicationUncheckedCreateInput>
  }

  /**
   * VolunteerApplication createMany
   */
  export type VolunteerApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerApplications.
     */
    data: VolunteerApplicationCreateManyInput | VolunteerApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerApplication update
   */
  export type VolunteerApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a VolunteerApplication.
     */
    data: XOR<VolunteerApplicationUpdateInput, VolunteerApplicationUncheckedUpdateInput>
    /**
     * Choose, which VolunteerApplication to update.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication updateMany
   */
  export type VolunteerApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerApplications.
     */
    data: XOR<VolunteerApplicationUpdateManyMutationInput, VolunteerApplicationUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerApplications to update
     */
    where?: VolunteerApplicationWhereInput
    /**
     * Limit how many VolunteerApplications to update.
     */
    limit?: number
  }

  /**
   * VolunteerApplication upsert
   */
  export type VolunteerApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the VolunteerApplication to update in case it exists.
     */
    where: VolunteerApplicationWhereUniqueInput
    /**
     * In case the VolunteerApplication found by the `where` argument doesn't exist, create a new VolunteerApplication with this data.
     */
    create: XOR<VolunteerApplicationCreateInput, VolunteerApplicationUncheckedCreateInput>
    /**
     * In case the VolunteerApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerApplicationUpdateInput, VolunteerApplicationUncheckedUpdateInput>
  }

  /**
   * VolunteerApplication delete
   */
  export type VolunteerApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
    /**
     * Filter which VolunteerApplication to delete.
     */
    where: VolunteerApplicationWhereUniqueInput
  }

  /**
   * VolunteerApplication deleteMany
   */
  export type VolunteerApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerApplications to delete
     */
    where?: VolunteerApplicationWhereInput
    /**
     * Limit how many VolunteerApplications to delete.
     */
    limit?: number
  }

  /**
   * VolunteerApplication without action
   */
  export type VolunteerApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerApplication
     */
    select?: VolunteerApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerApplication
     */
    omit?: VolunteerApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerApplicationInclude<ExtArgs> | null
  }


  /**
   * Model VolunteerAssignment
   */

  export type AggregateVolunteerAssignment = {
    _count: VolunteerAssignmentCountAggregateOutputType | null
    _avg: VolunteerAssignmentAvgAggregateOutputType | null
    _sum: VolunteerAssignmentSumAggregateOutputType | null
    _min: VolunteerAssignmentMinAggregateOutputType | null
    _max: VolunteerAssignmentMaxAggregateOutputType | null
  }

  export type VolunteerAssignmentAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerAssignmentSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerAssignmentMinAggregateOutputType = {
    id: number | null
    role: $Enums.VolunteerRole | null
    tasks: string | null
    notes: string | null
    createdAt: Date | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerAssignmentMaxAggregateOutputType = {
    id: number | null
    role: $Enums.VolunteerRole | null
    tasks: string | null
    notes: string | null
    createdAt: Date | null
    eventId: number | null
    userId: number | null
  }

  export type VolunteerAssignmentCountAggregateOutputType = {
    id: number
    role: number
    tasks: number
    notes: number
    createdAt: number
    eventId: number
    userId: number
    _all: number
  }


  export type VolunteerAssignmentAvgAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerAssignmentSumAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerAssignmentMinAggregateInputType = {
    id?: true
    role?: true
    tasks?: true
    notes?: true
    createdAt?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerAssignmentMaxAggregateInputType = {
    id?: true
    role?: true
    tasks?: true
    notes?: true
    createdAt?: true
    eventId?: true
    userId?: true
  }

  export type VolunteerAssignmentCountAggregateInputType = {
    id?: true
    role?: true
    tasks?: true
    notes?: true
    createdAt?: true
    eventId?: true
    userId?: true
    _all?: true
  }

  export type VolunteerAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerAssignment to aggregate.
     */
    where?: VolunteerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAssignments to fetch.
     */
    orderBy?: VolunteerAssignmentOrderByWithRelationInput | VolunteerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerAssignments
    **/
    _count?: true | VolunteerAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerAssignmentMaxAggregateInputType
  }

  export type GetVolunteerAssignmentAggregateType<T extends VolunteerAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerAssignment[P]>
      : GetScalarType<T[P], AggregateVolunteerAssignment[P]>
  }




  export type VolunteerAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerAssignmentWhereInput
    orderBy?: VolunteerAssignmentOrderByWithAggregationInput | VolunteerAssignmentOrderByWithAggregationInput[]
    by: VolunteerAssignmentScalarFieldEnum[] | VolunteerAssignmentScalarFieldEnum
    having?: VolunteerAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerAssignmentCountAggregateInputType | true
    _avg?: VolunteerAssignmentAvgAggregateInputType
    _sum?: VolunteerAssignmentSumAggregateInputType
    _min?: VolunteerAssignmentMinAggregateInputType
    _max?: VolunteerAssignmentMaxAggregateInputType
  }

  export type VolunteerAssignmentGroupByOutputType = {
    id: number
    role: $Enums.VolunteerRole
    tasks: string | null
    notes: string | null
    createdAt: Date
    eventId: number
    userId: number
    _count: VolunteerAssignmentCountAggregateOutputType | null
    _avg: VolunteerAssignmentAvgAggregateOutputType | null
    _sum: VolunteerAssignmentSumAggregateOutputType | null
    _min: VolunteerAssignmentMinAggregateOutputType | null
    _max: VolunteerAssignmentMaxAggregateOutputType | null
  }

  type GetVolunteerAssignmentGroupByPayload<T extends VolunteerAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    tasks?: boolean
    notes?: boolean
    createdAt?: boolean
    eventId?: boolean
    userId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerAssignment"]>



  export type VolunteerAssignmentSelectScalar = {
    id?: boolean
    role?: boolean
    tasks?: boolean
    notes?: boolean
    createdAt?: boolean
    eventId?: boolean
    userId?: boolean
  }

  export type VolunteerAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "tasks" | "notes" | "createdAt" | "eventId" | "userId", ExtArgs["result"]["volunteerAssignment"]>
  export type VolunteerAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VolunteerAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerAssignment"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.VolunteerRole
      tasks: string | null
      notes: string | null
      createdAt: Date
      eventId: number
      userId: number
    }, ExtArgs["result"]["volunteerAssignment"]>
    composites: {}
  }

  type VolunteerAssignmentGetPayload<S extends boolean | null | undefined | VolunteerAssignmentDefaultArgs> = $Result.GetResult<Prisma.$VolunteerAssignmentPayload, S>

  type VolunteerAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerAssignmentCountAggregateInputType | true
    }

  export interface VolunteerAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerAssignment'], meta: { name: 'VolunteerAssignment' } }
    /**
     * Find zero or one VolunteerAssignment that matches the filter.
     * @param {VolunteerAssignmentFindUniqueArgs} args - Arguments to find a VolunteerAssignment
     * @example
     * // Get one VolunteerAssignment
     * const volunteerAssignment = await prisma.volunteerAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerAssignmentFindUniqueArgs>(args: SelectSubset<T, VolunteerAssignmentFindUniqueArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerAssignmentFindUniqueOrThrowArgs} args - Arguments to find a VolunteerAssignment
     * @example
     * // Get one VolunteerAssignment
     * const volunteerAssignment = await prisma.volunteerAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentFindFirstArgs} args - Arguments to find a VolunteerAssignment
     * @example
     * // Get one VolunteerAssignment
     * const volunteerAssignment = await prisma.volunteerAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerAssignmentFindFirstArgs>(args?: SelectSubset<T, VolunteerAssignmentFindFirstArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentFindFirstOrThrowArgs} args - Arguments to find a VolunteerAssignment
     * @example
     * // Get one VolunteerAssignment
     * const volunteerAssignment = await prisma.volunteerAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerAssignments
     * const volunteerAssignments = await prisma.volunteerAssignment.findMany()
     * 
     * // Get first 10 VolunteerAssignments
     * const volunteerAssignments = await prisma.volunteerAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerAssignmentWithIdOnly = await prisma.volunteerAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerAssignmentFindManyArgs>(args?: SelectSubset<T, VolunteerAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerAssignment.
     * @param {VolunteerAssignmentCreateArgs} args - Arguments to create a VolunteerAssignment.
     * @example
     * // Create one VolunteerAssignment
     * const VolunteerAssignment = await prisma.volunteerAssignment.create({
     *   data: {
     *     // ... data to create a VolunteerAssignment
     *   }
     * })
     * 
     */
    create<T extends VolunteerAssignmentCreateArgs>(args: SelectSubset<T, VolunteerAssignmentCreateArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerAssignments.
     * @param {VolunteerAssignmentCreateManyArgs} args - Arguments to create many VolunteerAssignments.
     * @example
     * // Create many VolunteerAssignments
     * const volunteerAssignment = await prisma.volunteerAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerAssignmentCreateManyArgs>(args?: SelectSubset<T, VolunteerAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VolunteerAssignment.
     * @param {VolunteerAssignmentDeleteArgs} args - Arguments to delete one VolunteerAssignment.
     * @example
     * // Delete one VolunteerAssignment
     * const VolunteerAssignment = await prisma.volunteerAssignment.delete({
     *   where: {
     *     // ... filter to delete one VolunteerAssignment
     *   }
     * })
     * 
     */
    delete<T extends VolunteerAssignmentDeleteArgs>(args: SelectSubset<T, VolunteerAssignmentDeleteArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerAssignment.
     * @param {VolunteerAssignmentUpdateArgs} args - Arguments to update one VolunteerAssignment.
     * @example
     * // Update one VolunteerAssignment
     * const volunteerAssignment = await prisma.volunteerAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerAssignmentUpdateArgs>(args: SelectSubset<T, VolunteerAssignmentUpdateArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerAssignments.
     * @param {VolunteerAssignmentDeleteManyArgs} args - Arguments to filter VolunteerAssignments to delete.
     * @example
     * // Delete a few VolunteerAssignments
     * const { count } = await prisma.volunteerAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerAssignmentDeleteManyArgs>(args?: SelectSubset<T, VolunteerAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerAssignments
     * const volunteerAssignment = await prisma.volunteerAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerAssignmentUpdateManyArgs>(args: SelectSubset<T, VolunteerAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VolunteerAssignment.
     * @param {VolunteerAssignmentUpsertArgs} args - Arguments to update or create a VolunteerAssignment.
     * @example
     * // Update or create a VolunteerAssignment
     * const volunteerAssignment = await prisma.volunteerAssignment.upsert({
     *   create: {
     *     // ... data to create a VolunteerAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerAssignment we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerAssignmentUpsertArgs>(args: SelectSubset<T, VolunteerAssignmentUpsertArgs<ExtArgs>>): Prisma__VolunteerAssignmentClient<$Result.GetResult<Prisma.$VolunteerAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentCountArgs} args - Arguments to filter VolunteerAssignments to count.
     * @example
     * // Count the number of VolunteerAssignments
     * const count = await prisma.volunteerAssignment.count({
     *   where: {
     *     // ... the filter for the VolunteerAssignments we want to count
     *   }
     * })
    **/
    count<T extends VolunteerAssignmentCountArgs>(
      args?: Subset<T, VolunteerAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolunteerAssignmentAggregateArgs>(args: Subset<T, VolunteerAssignmentAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAssignmentAggregateType<T>>

    /**
     * Group by VolunteerAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAssignmentGroupByArgs} args - Group by arguments.
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
      T extends VolunteerAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VolunteerAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerAssignment model
   */
  readonly fields: VolunteerAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VolunteerAssignment model
   */
  interface VolunteerAssignmentFieldRefs {
    readonly id: FieldRef<"VolunteerAssignment", 'Int'>
    readonly role: FieldRef<"VolunteerAssignment", 'VolunteerRole'>
    readonly tasks: FieldRef<"VolunteerAssignment", 'String'>
    readonly notes: FieldRef<"VolunteerAssignment", 'String'>
    readonly createdAt: FieldRef<"VolunteerAssignment", 'DateTime'>
    readonly eventId: FieldRef<"VolunteerAssignment", 'Int'>
    readonly userId: FieldRef<"VolunteerAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerAssignment findUnique
   */
  export type VolunteerAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAssignment to fetch.
     */
    where: VolunteerAssignmentWhereUniqueInput
  }

  /**
   * VolunteerAssignment findUniqueOrThrow
   */
  export type VolunteerAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAssignment to fetch.
     */
    where: VolunteerAssignmentWhereUniqueInput
  }

  /**
   * VolunteerAssignment findFirst
   */
  export type VolunteerAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAssignment to fetch.
     */
    where?: VolunteerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAssignments to fetch.
     */
    orderBy?: VolunteerAssignmentOrderByWithRelationInput | VolunteerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerAssignments.
     */
    cursor?: VolunteerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerAssignments.
     */
    distinct?: VolunteerAssignmentScalarFieldEnum | VolunteerAssignmentScalarFieldEnum[]
  }

  /**
   * VolunteerAssignment findFirstOrThrow
   */
  export type VolunteerAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAssignment to fetch.
     */
    where?: VolunteerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAssignments to fetch.
     */
    orderBy?: VolunteerAssignmentOrderByWithRelationInput | VolunteerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerAssignments.
     */
    cursor?: VolunteerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerAssignments.
     */
    distinct?: VolunteerAssignmentScalarFieldEnum | VolunteerAssignmentScalarFieldEnum[]
  }

  /**
   * VolunteerAssignment findMany
   */
  export type VolunteerAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAssignments to fetch.
     */
    where?: VolunteerAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAssignments to fetch.
     */
    orderBy?: VolunteerAssignmentOrderByWithRelationInput | VolunteerAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerAssignments.
     */
    cursor?: VolunteerAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAssignments.
     */
    skip?: number
    distinct?: VolunteerAssignmentScalarFieldEnum | VolunteerAssignmentScalarFieldEnum[]
  }

  /**
   * VolunteerAssignment create
   */
  export type VolunteerAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a VolunteerAssignment.
     */
    data: XOR<VolunteerAssignmentCreateInput, VolunteerAssignmentUncheckedCreateInput>
  }

  /**
   * VolunteerAssignment createMany
   */
  export type VolunteerAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerAssignments.
     */
    data: VolunteerAssignmentCreateManyInput | VolunteerAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerAssignment update
   */
  export type VolunteerAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a VolunteerAssignment.
     */
    data: XOR<VolunteerAssignmentUpdateInput, VolunteerAssignmentUncheckedUpdateInput>
    /**
     * Choose, which VolunteerAssignment to update.
     */
    where: VolunteerAssignmentWhereUniqueInput
  }

  /**
   * VolunteerAssignment updateMany
   */
  export type VolunteerAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerAssignments.
     */
    data: XOR<VolunteerAssignmentUpdateManyMutationInput, VolunteerAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerAssignments to update
     */
    where?: VolunteerAssignmentWhereInput
    /**
     * Limit how many VolunteerAssignments to update.
     */
    limit?: number
  }

  /**
   * VolunteerAssignment upsert
   */
  export type VolunteerAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the VolunteerAssignment to update in case it exists.
     */
    where: VolunteerAssignmentWhereUniqueInput
    /**
     * In case the VolunteerAssignment found by the `where` argument doesn't exist, create a new VolunteerAssignment with this data.
     */
    create: XOR<VolunteerAssignmentCreateInput, VolunteerAssignmentUncheckedCreateInput>
    /**
     * In case the VolunteerAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerAssignmentUpdateInput, VolunteerAssignmentUncheckedUpdateInput>
  }

  /**
   * VolunteerAssignment delete
   */
  export type VolunteerAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
    /**
     * Filter which VolunteerAssignment to delete.
     */
    where: VolunteerAssignmentWhereUniqueInput
  }

  /**
   * VolunteerAssignment deleteMany
   */
  export type VolunteerAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerAssignments to delete
     */
    where?: VolunteerAssignmentWhereInput
    /**
     * Limit how many VolunteerAssignments to delete.
     */
    limit?: number
  }

  /**
   * VolunteerAssignment without action
   */
  export type VolunteerAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAssignment
     */
    select?: VolunteerAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAssignment
     */
    omit?: VolunteerAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAssignmentInclude<ExtArgs> | null
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


  export const DonationScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    email: 'email',
    userId: 'userId'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    location: 'location',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const InterventionProposalScalarFieldEnum: {
    id: 'id',
    jobTitle: 'jobTitle',
    description: 'description',
    domain: 'domain',
    status: 'status',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type InterventionProposalScalarFieldEnum = (typeof InterventionProposalScalarFieldEnum)[keyof typeof InterventionProposalScalarFieldEnum]


  export const MediaFeedbackScalarFieldEnum: {
    id: 'id',
    mediaGallery: 'mediaGallery',
    caption: 'caption',
    eventId: 'eventId'
  };

  export type MediaFeedbackScalarFieldEnum = (typeof MediaFeedbackScalarFieldEnum)[keyof typeof MediaFeedbackScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    eventId: 'eventId'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    linkOrFile: 'linkOrFile',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const TestimonialScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorName: 'authorName',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type TestimonialScalarFieldEnum = (typeof TestimonialScalarFieldEnum)[keyof typeof TestimonialScalarFieldEnum]


  export const ThematicScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ThematicScalarFieldEnum = (typeof ThematicScalarFieldEnum)[keyof typeof ThematicScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    status: 'status',
    isNewsletterSubscriber: 'isNewsletterSubscriber',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VolunteerApplicationScalarFieldEnum: {
    id: 'id',
    desiredRoles: 'desiredRoles',
    motivation: 'motivation',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type VolunteerApplicationScalarFieldEnum = (typeof VolunteerApplicationScalarFieldEnum)[keyof typeof VolunteerApplicationScalarFieldEnum]


  export const VolunteerAssignmentScalarFieldEnum: {
    id: 'id',
    role: 'role',
    tasks: 'tasks',
    notes: 'notes',
    createdAt: 'createdAt',
    eventId: 'eventId',
    userId: 'userId'
  };

  export type VolunteerAssignmentScalarFieldEnum = (typeof VolunteerAssignmentScalarFieldEnum)[keyof typeof VolunteerAssignmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const DonationOrderByRelevanceFieldEnum: {
    email: 'email'
  };

  export type DonationOrderByRelevanceFieldEnum = (typeof DonationOrderByRelevanceFieldEnum)[keyof typeof DonationOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    location: 'location'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const InterventionProposalOrderByRelevanceFieldEnum: {
    jobTitle: 'jobTitle',
    description: 'description'
  };

  export type InterventionProposalOrderByRelevanceFieldEnum = (typeof InterventionProposalOrderByRelevanceFieldEnum)[keyof typeof InterventionProposalOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MediaFeedbackOrderByRelevanceFieldEnum: {
    mediaGallery: 'mediaGallery',
    caption: 'caption'
  };

  export type MediaFeedbackOrderByRelevanceFieldEnum = (typeof MediaFeedbackOrderByRelevanceFieldEnum)[keyof typeof MediaFeedbackOrderByRelevanceFieldEnum]


  export const ResourceOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    linkOrFile: 'linkOrFile'
  };

  export type ResourceOrderByRelevanceFieldEnum = (typeof ResourceOrderByRelevanceFieldEnum)[keyof typeof ResourceOrderByRelevanceFieldEnum]


  export const TestimonialOrderByRelevanceFieldEnum: {
    content: 'content',
    authorName: 'authorName'
  };

  export type TestimonialOrderByRelevanceFieldEnum = (typeof TestimonialOrderByRelevanceFieldEnum)[keyof typeof TestimonialOrderByRelevanceFieldEnum]


  export const ThematicOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ThematicOrderByRelevanceFieldEnum = (typeof ThematicOrderByRelevanceFieldEnum)[keyof typeof ThematicOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VolunteerApplicationOrderByRelevanceFieldEnum: {
    desiredRoles: 'desiredRoles',
    motivation: 'motivation',
    notes: 'notes'
  };

  export type VolunteerApplicationOrderByRelevanceFieldEnum = (typeof VolunteerApplicationOrderByRelevanceFieldEnum)[keyof typeof VolunteerApplicationOrderByRelevanceFieldEnum]


  export const VolunteerAssignmentOrderByRelevanceFieldEnum: {
    tasks: 'tasks',
    notes: 'notes'
  };

  export type VolunteerAssignmentOrderByRelevanceFieldEnum = (typeof VolunteerAssignmentOrderByRelevanceFieldEnum)[keyof typeof VolunteerAssignmentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Domain'
   */
  export type EnumDomainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Domain'>
    


  /**
   * Reference to a field of type 'ProposalStatus'
   */
  export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>
    


  /**
   * Reference to a field of type 'ResourceType'
   */
  export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'VolunteerRole'
   */
  export type EnumVolunteerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VolunteerRole'>
    
  /**
   * Deep Input Types
   */


  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    amount?: FloatFilter<"Donation"> | number
    date?: DateTimeFilter<"Donation"> | Date | string
    email?: StringFilter<"Donation"> | string
    userId?: IntFilter<"Donation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: DonationOrderByRelevanceInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    amount?: FloatFilter<"Donation"> | number
    date?: DateTimeFilter<"Donation"> | Date | string
    email?: StringFilter<"Donation"> | string
    userId?: IntFilter<"Donation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    amount?: FloatWithAggregatesFilter<"Donation"> | number
    date?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    email?: StringWithAggregatesFilter<"Donation"> | string
    userId?: IntWithAggregatesFilter<"Donation"> | number
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntFilter<"Event"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    volunteerAssignments?: VolunteerAssignmentListRelationFilter
    registrations?: RegistrationListRelationFilter
    volunteers?: UserListRelationFilter
    employees?: UserListRelationFilter
    thematics?: ThematicListRelationFilter
    mediaFeedback?: XOR<MediaFeedbackNullableScalarRelationFilter, MediaFeedbackWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    volunteerAssignments?: VolunteerAssignmentOrderByRelationAggregateInput
    registrations?: RegistrationOrderByRelationAggregateInput
    volunteers?: UserOrderByRelationAggregateInput
    employees?: UserOrderByRelationAggregateInput
    thematics?: ThematicOrderByRelationAggregateInput
    mediaFeedback?: MediaFeedbackOrderByWithRelationInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntFilter<"Event"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    volunteerAssignments?: VolunteerAssignmentListRelationFilter
    registrations?: RegistrationListRelationFilter
    volunteers?: UserListRelationFilter
    employees?: UserListRelationFilter
    thematics?: ThematicListRelationFilter
    mediaFeedback?: XOR<MediaFeedbackNullableScalarRelationFilter, MediaFeedbackWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdById?: IntWithAggregatesFilter<"Event"> | number
  }

  export type InterventionProposalWhereInput = {
    AND?: InterventionProposalWhereInput | InterventionProposalWhereInput[]
    OR?: InterventionProposalWhereInput[]
    NOT?: InterventionProposalWhereInput | InterventionProposalWhereInput[]
    id?: IntFilter<"InterventionProposal"> | number
    jobTitle?: StringFilter<"InterventionProposal"> | string
    description?: StringFilter<"InterventionProposal"> | string
    domain?: EnumDomainFilter<"InterventionProposal"> | $Enums.Domain
    status?: EnumProposalStatusFilter<"InterventionProposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"InterventionProposal"> | Date | string
    userId?: IntFilter<"InterventionProposal"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type InterventionProposalOrderByWithRelationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: InterventionProposalOrderByRelevanceInput
  }

  export type InterventionProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: InterventionProposalWhereInput | InterventionProposalWhereInput[]
    OR?: InterventionProposalWhereInput[]
    NOT?: InterventionProposalWhereInput | InterventionProposalWhereInput[]
    jobTitle?: StringFilter<"InterventionProposal"> | string
    description?: StringFilter<"InterventionProposal"> | string
    domain?: EnumDomainFilter<"InterventionProposal"> | $Enums.Domain
    status?: EnumProposalStatusFilter<"InterventionProposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeFilter<"InterventionProposal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type InterventionProposalOrderByWithAggregationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: InterventionProposalCountOrderByAggregateInput
    _avg?: InterventionProposalAvgOrderByAggregateInput
    _max?: InterventionProposalMaxOrderByAggregateInput
    _min?: InterventionProposalMinOrderByAggregateInput
    _sum?: InterventionProposalSumOrderByAggregateInput
  }

  export type InterventionProposalScalarWhereWithAggregatesInput = {
    AND?: InterventionProposalScalarWhereWithAggregatesInput | InterventionProposalScalarWhereWithAggregatesInput[]
    OR?: InterventionProposalScalarWhereWithAggregatesInput[]
    NOT?: InterventionProposalScalarWhereWithAggregatesInput | InterventionProposalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InterventionProposal"> | number
    jobTitle?: StringWithAggregatesFilter<"InterventionProposal"> | string
    description?: StringWithAggregatesFilter<"InterventionProposal"> | string
    domain?: EnumDomainWithAggregatesFilter<"InterventionProposal"> | $Enums.Domain
    status?: EnumProposalStatusWithAggregatesFilter<"InterventionProposal"> | $Enums.ProposalStatus
    createdAt?: DateTimeWithAggregatesFilter<"InterventionProposal"> | Date | string
    userId?: IntWithAggregatesFilter<"InterventionProposal"> | number
  }

  export type MediaFeedbackWhereInput = {
    AND?: MediaFeedbackWhereInput | MediaFeedbackWhereInput[]
    OR?: MediaFeedbackWhereInput[]
    NOT?: MediaFeedbackWhereInput | MediaFeedbackWhereInput[]
    id?: IntFilter<"MediaFeedback"> | number
    mediaGallery?: StringFilter<"MediaFeedback"> | string
    caption?: StringNullableFilter<"MediaFeedback"> | string | null
    eventId?: IntFilter<"MediaFeedback"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type MediaFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    mediaGallery?: SortOrder
    caption?: SortOrderInput | SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
    _relevance?: MediaFeedbackOrderByRelevanceInput
  }

  export type MediaFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eventId?: number
    AND?: MediaFeedbackWhereInput | MediaFeedbackWhereInput[]
    OR?: MediaFeedbackWhereInput[]
    NOT?: MediaFeedbackWhereInput | MediaFeedbackWhereInput[]
    mediaGallery?: StringFilter<"MediaFeedback"> | string
    caption?: StringNullableFilter<"MediaFeedback"> | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "eventId">

  export type MediaFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    mediaGallery?: SortOrder
    caption?: SortOrderInput | SortOrder
    eventId?: SortOrder
    _count?: MediaFeedbackCountOrderByAggregateInput
    _avg?: MediaFeedbackAvgOrderByAggregateInput
    _max?: MediaFeedbackMaxOrderByAggregateInput
    _min?: MediaFeedbackMinOrderByAggregateInput
    _sum?: MediaFeedbackSumOrderByAggregateInput
  }

  export type MediaFeedbackScalarWhereWithAggregatesInput = {
    AND?: MediaFeedbackScalarWhereWithAggregatesInput | MediaFeedbackScalarWhereWithAggregatesInput[]
    OR?: MediaFeedbackScalarWhereWithAggregatesInput[]
    NOT?: MediaFeedbackScalarWhereWithAggregatesInput | MediaFeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaFeedback"> | number
    mediaGallery?: StringWithAggregatesFilter<"MediaFeedback"> | string
    caption?: StringNullableWithAggregatesFilter<"MediaFeedback"> | string | null
    eventId?: IntWithAggregatesFilter<"MediaFeedback"> | number
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: IntFilter<"Registration"> | number
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    userId?: IntFilter<"Registration"> | number
    eventId?: IntFilter<"Registration"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    userId?: IntFilter<"Registration"> | number
    eventId?: IntFilter<"Registration"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _avg?: RegistrationAvgOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
    _sum?: RegistrationSumOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
    userId?: IntWithAggregatesFilter<"Registration"> | number
    eventId?: IntWithAggregatesFilter<"Registration"> | number
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: IntFilter<"Resource"> | number
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
    linkOrFile?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    createdById?: IntFilter<"Resource"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    linkOrFile?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    _relevance?: ResourceOrderByRelevanceInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
    linkOrFile?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    createdById?: IntFilter<"Resource"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    linkOrFile?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resource"> | number
    title?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    type?: EnumResourceTypeWithAggregatesFilter<"Resource"> | $Enums.ResourceType
    linkOrFile?: StringWithAggregatesFilter<"Resource"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    createdById?: IntWithAggregatesFilter<"Resource"> | number
  }

  export type TestimonialWhereInput = {
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    id?: IntFilter<"Testimonial"> | number
    content?: StringFilter<"Testimonial"> | string
    authorName?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    createdById?: IntFilter<"Testimonial"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestimonialOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    _relevance?: TestimonialOrderByRelevanceInput
  }

  export type TestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestimonialWhereInput | TestimonialWhereInput[]
    OR?: TestimonialWhereInput[]
    NOT?: TestimonialWhereInput | TestimonialWhereInput[]
    content?: StringFilter<"Testimonial"> | string
    authorName?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    createdById?: IntFilter<"Testimonial"> | number
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    _count?: TestimonialCountOrderByAggregateInput
    _avg?: TestimonialAvgOrderByAggregateInput
    _max?: TestimonialMaxOrderByAggregateInput
    _min?: TestimonialMinOrderByAggregateInput
    _sum?: TestimonialSumOrderByAggregateInput
  }

  export type TestimonialScalarWhereWithAggregatesInput = {
    AND?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    OR?: TestimonialScalarWhereWithAggregatesInput[]
    NOT?: TestimonialScalarWhereWithAggregatesInput | TestimonialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Testimonial"> | number
    content?: StringWithAggregatesFilter<"Testimonial"> | string
    authorName?: StringWithAggregatesFilter<"Testimonial"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Testimonial"> | Date | string
    createdById?: IntWithAggregatesFilter<"Testimonial"> | number
  }

  export type ThematicWhereInput = {
    AND?: ThematicWhereInput | ThematicWhereInput[]
    OR?: ThematicWhereInput[]
    NOT?: ThematicWhereInput | ThematicWhereInput[]
    id?: IntFilter<"Thematic"> | number
    name?: StringFilter<"Thematic"> | string
    events?: EventListRelationFilter
  }

  export type ThematicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    events?: EventOrderByRelationAggregateInput
    _relevance?: ThematicOrderByRelevanceInput
  }

  export type ThematicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ThematicWhereInput | ThematicWhereInput[]
    OR?: ThematicWhereInput[]
    NOT?: ThematicWhereInput | ThematicWhereInput[]
    events?: EventListRelationFilter
  }, "id" | "name">

  export type ThematicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ThematicCountOrderByAggregateInput
    _avg?: ThematicAvgOrderByAggregateInput
    _max?: ThematicMaxOrderByAggregateInput
    _min?: ThematicMinOrderByAggregateInput
    _sum?: ThematicSumOrderByAggregateInput
  }

  export type ThematicScalarWhereWithAggregatesInput = {
    AND?: ThematicScalarWhereWithAggregatesInput | ThematicScalarWhereWithAggregatesInput[]
    OR?: ThematicScalarWhereWithAggregatesInput[]
    NOT?: ThematicScalarWhereWithAggregatesInput | ThematicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thematic"> | number
    name?: StringWithAggregatesFilter<"Thematic"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusNullableFilter<"User"> | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    volunteerApplication?: XOR<VolunteerApplicationNullableScalarRelationFilter, VolunteerApplicationWhereInput> | null
    interventionProposal?: XOR<InterventionProposalNullableScalarRelationFilter, InterventionProposalWhereInput> | null
    registrations?: RegistrationListRelationFilter
    createdEvents?: EventListRelationFilter
    resources?: ResourceListRelationFilter
    testimonials?: TestimonialListRelationFilter
    donations?: DonationListRelationFilter
    volunteerAssignments?: VolunteerAssignmentListRelationFilter
    volunteerInEvents?: EventListRelationFilter
    employeeInEvents?: EventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isNewsletterSubscriber?: SortOrder
    createdAt?: SortOrder
    volunteerApplication?: VolunteerApplicationOrderByWithRelationInput
    interventionProposal?: InterventionProposalOrderByWithRelationInput
    registrations?: RegistrationOrderByRelationAggregateInput
    createdEvents?: EventOrderByRelationAggregateInput
    resources?: ResourceOrderByRelationAggregateInput
    testimonials?: TestimonialOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
    volunteerAssignments?: VolunteerAssignmentOrderByRelationAggregateInput
    volunteerInEvents?: EventOrderByRelationAggregateInput
    employeeInEvents?: EventOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusNullableFilter<"User"> | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    volunteerApplication?: XOR<VolunteerApplicationNullableScalarRelationFilter, VolunteerApplicationWhereInput> | null
    interventionProposal?: XOR<InterventionProposalNullableScalarRelationFilter, InterventionProposalWhereInput> | null
    registrations?: RegistrationListRelationFilter
    createdEvents?: EventListRelationFilter
    resources?: ResourceListRelationFilter
    testimonials?: TestimonialListRelationFilter
    donations?: DonationListRelationFilter
    volunteerAssignments?: VolunteerAssignmentListRelationFilter
    volunteerInEvents?: EventListRelationFilter
    employeeInEvents?: EventListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isNewsletterSubscriber?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusNullableWithAggregatesFilter<"User"> | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VolunteerApplicationWhereInput = {
    AND?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    OR?: VolunteerApplicationWhereInput[]
    NOT?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    id?: IntFilter<"VolunteerApplication"> | number
    desiredRoles?: StringFilter<"VolunteerApplication"> | string
    motivation?: StringFilter<"VolunteerApplication"> | string
    status?: EnumApplicationStatusFilter<"VolunteerApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableFilter<"VolunteerApplication"> | string | null
    createdAt?: DateTimeFilter<"VolunteerApplication"> | Date | string
    userId?: IntFilter<"VolunteerApplication"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VolunteerApplicationOrderByWithRelationInput = {
    id?: SortOrder
    desiredRoles?: SortOrder
    motivation?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: VolunteerApplicationOrderByRelevanceInput
  }

  export type VolunteerApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    OR?: VolunteerApplicationWhereInput[]
    NOT?: VolunteerApplicationWhereInput | VolunteerApplicationWhereInput[]
    desiredRoles?: StringFilter<"VolunteerApplication"> | string
    motivation?: StringFilter<"VolunteerApplication"> | string
    status?: EnumApplicationStatusFilter<"VolunteerApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableFilter<"VolunteerApplication"> | string | null
    createdAt?: DateTimeFilter<"VolunteerApplication"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type VolunteerApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    desiredRoles?: SortOrder
    motivation?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: VolunteerApplicationCountOrderByAggregateInput
    _avg?: VolunteerApplicationAvgOrderByAggregateInput
    _max?: VolunteerApplicationMaxOrderByAggregateInput
    _min?: VolunteerApplicationMinOrderByAggregateInput
    _sum?: VolunteerApplicationSumOrderByAggregateInput
  }

  export type VolunteerApplicationScalarWhereWithAggregatesInput = {
    AND?: VolunteerApplicationScalarWhereWithAggregatesInput | VolunteerApplicationScalarWhereWithAggregatesInput[]
    OR?: VolunteerApplicationScalarWhereWithAggregatesInput[]
    NOT?: VolunteerApplicationScalarWhereWithAggregatesInput | VolunteerApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VolunteerApplication"> | number
    desiredRoles?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    motivation?: StringWithAggregatesFilter<"VolunteerApplication"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"VolunteerApplication"> | $Enums.ApplicationStatus
    notes?: StringNullableWithAggregatesFilter<"VolunteerApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerApplication"> | Date | string
    userId?: IntWithAggregatesFilter<"VolunteerApplication"> | number
  }

  export type VolunteerAssignmentWhereInput = {
    AND?: VolunteerAssignmentWhereInput | VolunteerAssignmentWhereInput[]
    OR?: VolunteerAssignmentWhereInput[]
    NOT?: VolunteerAssignmentWhereInput | VolunteerAssignmentWhereInput[]
    id?: IntFilter<"VolunteerAssignment"> | number
    role?: EnumVolunteerRoleFilter<"VolunteerAssignment"> | $Enums.VolunteerRole
    tasks?: StringNullableFilter<"VolunteerAssignment"> | string | null
    notes?: StringNullableFilter<"VolunteerAssignment"> | string | null
    createdAt?: DateTimeFilter<"VolunteerAssignment"> | Date | string
    eventId?: IntFilter<"VolunteerAssignment"> | number
    userId?: IntFilter<"VolunteerAssignment"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VolunteerAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    tasks?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: VolunteerAssignmentOrderByRelevanceInput
  }

  export type VolunteerAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VolunteerAssignmentWhereInput | VolunteerAssignmentWhereInput[]
    OR?: VolunteerAssignmentWhereInput[]
    NOT?: VolunteerAssignmentWhereInput | VolunteerAssignmentWhereInput[]
    role?: EnumVolunteerRoleFilter<"VolunteerAssignment"> | $Enums.VolunteerRole
    tasks?: StringNullableFilter<"VolunteerAssignment"> | string | null
    notes?: StringNullableFilter<"VolunteerAssignment"> | string | null
    createdAt?: DateTimeFilter<"VolunteerAssignment"> | Date | string
    eventId?: IntFilter<"VolunteerAssignment"> | number
    userId?: IntFilter<"VolunteerAssignment"> | number
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VolunteerAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    tasks?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    _count?: VolunteerAssignmentCountOrderByAggregateInput
    _avg?: VolunteerAssignmentAvgOrderByAggregateInput
    _max?: VolunteerAssignmentMaxOrderByAggregateInput
    _min?: VolunteerAssignmentMinOrderByAggregateInput
    _sum?: VolunteerAssignmentSumOrderByAggregateInput
  }

  export type VolunteerAssignmentScalarWhereWithAggregatesInput = {
    AND?: VolunteerAssignmentScalarWhereWithAggregatesInput | VolunteerAssignmentScalarWhereWithAggregatesInput[]
    OR?: VolunteerAssignmentScalarWhereWithAggregatesInput[]
    NOT?: VolunteerAssignmentScalarWhereWithAggregatesInput | VolunteerAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VolunteerAssignment"> | number
    role?: EnumVolunteerRoleWithAggregatesFilter<"VolunteerAssignment"> | $Enums.VolunteerRole
    tasks?: StringNullableWithAggregatesFilter<"VolunteerAssignment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"VolunteerAssignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerAssignment"> | Date | string
    eventId?: IntWithAggregatesFilter<"VolunteerAssignment"> | number
    userId?: IntWithAggregatesFilter<"VolunteerAssignment"> | number
  }

  export type DonationCreateInput = {
    amount: number
    date?: Date | string
    email: string
    user: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    amount: number
    date?: Date | string
    email: string
    userId: number
  }

  export type DonationUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateManyInput = {
    id?: number
    amount: number
    date?: Date | string
    email: string
    userId: number
  }

  export type DonationUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EventCreateInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type InterventionProposalCreateInput = {
    jobTitle: string
    description: string
    domain: $Enums.Domain
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInterventionProposalInput
  }

  export type InterventionProposalUncheckedCreateInput = {
    id?: number
    jobTitle: string
    description: string
    domain: $Enums.Domain
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    userId: number
  }

  export type InterventionProposalUpdateInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: EnumDomainFieldUpdateOperationsInput | $Enums.Domain
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterventionProposalNestedInput
  }

  export type InterventionProposalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: EnumDomainFieldUpdateOperationsInput | $Enums.Domain
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type InterventionProposalCreateManyInput = {
    id?: number
    jobTitle: string
    description: string
    domain: $Enums.Domain
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
    userId: number
  }

  export type InterventionProposalUpdateManyMutationInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: EnumDomainFieldUpdateOperationsInput | $Enums.Domain
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterventionProposalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: EnumDomainFieldUpdateOperationsInput | $Enums.Domain
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MediaFeedbackCreateInput = {
    mediaGallery: string
    caption?: string | null
    event: EventCreateNestedOneWithoutMediaFeedbackInput
  }

  export type MediaFeedbackUncheckedCreateInput = {
    id?: number
    mediaGallery: string
    caption?: string | null
    eventId: number
  }

  export type MediaFeedbackUpdateInput = {
    mediaGallery?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneRequiredWithoutMediaFeedbackNestedInput
  }

  export type MediaFeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaGallery?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type MediaFeedbackCreateManyInput = {
    id?: number
    mediaGallery: string
    caption?: string | null
    eventId: number
  }

  export type MediaFeedbackUpdateManyMutationInput = {
    mediaGallery?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaFeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaGallery?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    eventId: number
  }

  export type RegistrationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    eventId: number
  }

  export type RegistrationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCreateInput = {
    title: string
    description?: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutResourcesInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt?: Date | string
    createdById: number
  }

  export type ResourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt?: Date | string
    createdById: number
  }

  export type ResourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialCreateInput = {
    content: string
    authorName: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutTestimonialsInput
  }

  export type TestimonialUncheckedCreateInput = {
    id?: number
    content: string
    authorName: string
    createdAt?: Date | string
    createdById: number
  }

  export type TestimonialUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutTestimonialsNestedInput
  }

  export type TestimonialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type TestimonialCreateManyInput = {
    id?: number
    content: string
    authorName: string
    createdAt?: Date | string
    createdById: number
  }

  export type TestimonialUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type ThematicCreateInput = {
    name: string
    events?: EventCreateNestedManyWithoutThematicsInput
  }

  export type ThematicUncheckedCreateInput = {
    id?: number
    name: string
    events?: EventUncheckedCreateNestedManyWithoutThematicsInput
  }

  export type ThematicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutThematicsNestedInput
  }

  export type ThematicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutThematicsNestedInput
  }

  export type ThematicCreateManyInput = {
    id?: number
    name: string
  }

  export type ThematicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThematicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationCreateInput = {
    desiredRoles: string
    motivation: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVolunteerApplicationInput
  }

  export type VolunteerApplicationUncheckedCreateInput = {
    id?: number
    desiredRoles: string
    motivation: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    createdAt?: Date | string
    userId: number
  }

  export type VolunteerApplicationUpdateInput = {
    desiredRoles?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVolunteerApplicationNestedInput
  }

  export type VolunteerApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    desiredRoles?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerApplicationCreateManyInput = {
    id?: number
    desiredRoles: string
    motivation: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    createdAt?: Date | string
    userId: number
  }

  export type VolunteerApplicationUpdateManyMutationInput = {
    desiredRoles?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    desiredRoles?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerAssignmentCreateInput = {
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutVolunteerAssignmentsInput
    user: UserCreateNestedOneWithoutVolunteerAssignmentsInput
  }

  export type VolunteerAssignmentUncheckedCreateInput = {
    id?: number
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    eventId: number
    userId: number
  }

  export type VolunteerAssignmentUpdateInput = {
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutVolunteerAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutVolunteerAssignmentsNestedInput
  }

  export type VolunteerAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerAssignmentCreateManyInput = {
    id?: number
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    eventId: number
    userId: number
  }

  export type VolunteerAssignmentUpdateManyMutationInput = {
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DonationOrderByRelevanceInput = {
    fields: DonationOrderByRelevanceFieldEnum | DonationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type VolunteerAssignmentListRelationFilter = {
    every?: VolunteerAssignmentWhereInput
    some?: VolunteerAssignmentWhereInput
    none?: VolunteerAssignmentWhereInput
  }

  export type RegistrationListRelationFilter = {
    every?: RegistrationWhereInput
    some?: RegistrationWhereInput
    none?: RegistrationWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ThematicListRelationFilter = {
    every?: ThematicWhereInput
    some?: ThematicWhereInput
    none?: ThematicWhereInput
  }

  export type MediaFeedbackNullableScalarRelationFilter = {
    is?: MediaFeedbackWhereInput | null
    isNot?: MediaFeedbackWhereInput | null
  }

  export type VolunteerAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThematicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EnumDomainFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel>
    in?: $Enums.Domain[]
    notIn?: $Enums.Domain[]
    not?: NestedEnumDomainFilter<$PrismaModel> | $Enums.Domain
  }

  export type EnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[]
    notIn?: $Enums.ProposalStatus[]
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type InterventionProposalOrderByRelevanceInput = {
    fields: InterventionProposalOrderByRelevanceFieldEnum | InterventionProposalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InterventionProposalCountOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type InterventionProposalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InterventionProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type InterventionProposalMinOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    description?: SortOrder
    domain?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type InterventionProposalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumDomainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel>
    in?: $Enums.Domain[]
    notIn?: $Enums.Domain[]
    not?: NestedEnumDomainWithAggregatesFilter<$PrismaModel> | $Enums.Domain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainFilter<$PrismaModel>
    _max?: NestedEnumDomainFilter<$PrismaModel>
  }

  export type EnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[]
    notIn?: $Enums.ProposalStatus[]
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaFeedbackOrderByRelevanceInput = {
    fields: MediaFeedbackOrderByRelevanceFieldEnum | MediaFeedbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MediaFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    mediaGallery?: SortOrder
    caption?: SortOrder
    eventId?: SortOrder
  }

  export type MediaFeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type MediaFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaGallery?: SortOrder
    caption?: SortOrder
    eventId?: SortOrder
  }

  export type MediaFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    mediaGallery?: SortOrder
    caption?: SortOrder
    eventId?: SortOrder
  }

  export type MediaFeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type RegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type RegistrationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
  }

  export type EnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type ResourceOrderByRelevanceInput = {
    fields: ResourceOrderByRelevanceFieldEnum | ResourceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    linkOrFile?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    linkOrFile?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    linkOrFile?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type TestimonialOrderByRelevanceInput = {
    fields: TestimonialOrderByRelevanceFieldEnum | TestimonialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TestimonialAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type TestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type TestimonialSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThematicOrderByRelevanceInput = {
    fields: ThematicOrderByRelevanceFieldEnum | ThematicOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ThematicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ThematicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThematicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ThematicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ThematicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserStatus[] | null
    notIn?: $Enums.UserStatus[] | null
    not?: NestedEnumUserStatusNullableFilter<$PrismaModel> | $Enums.UserStatus | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VolunteerApplicationNullableScalarRelationFilter = {
    is?: VolunteerApplicationWhereInput | null
    isNot?: VolunteerApplicationWhereInput | null
  }

  export type InterventionProposalNullableScalarRelationFilter = {
    is?: InterventionProposalWhereInput | null
    isNot?: InterventionProposalWhereInput | null
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type TestimonialListRelationFilter = {
    every?: TestimonialWhereInput
    some?: TestimonialWhereInput
    none?: TestimonialWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestimonialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    isNewsletterSubscriber?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    isNewsletterSubscriber?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    isNewsletterSubscriber?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserStatus[] | null
    notIn?: $Enums.UserStatus[] | null
    not?: NestedEnumUserStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumUserStatusNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type VolunteerApplicationOrderByRelevanceInput = {
    fields: VolunteerApplicationOrderByRelevanceFieldEnum | VolunteerApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VolunteerApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    desiredRoles?: SortOrder
    motivation?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    desiredRoles?: SortOrder
    motivation?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    desiredRoles?: SortOrder
    motivation?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumVolunteerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.VolunteerRole | EnumVolunteerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VolunteerRole[]
    notIn?: $Enums.VolunteerRole[]
    not?: NestedEnumVolunteerRoleFilter<$PrismaModel> | $Enums.VolunteerRole
  }

  export type VolunteerAssignmentOrderByRelevanceInput = {
    fields: VolunteerAssignmentOrderByRelevanceFieldEnum | VolunteerAssignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VolunteerAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    tasks?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    tasks?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    tasks?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type VolunteerAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EnumVolunteerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VolunteerRole | EnumVolunteerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VolunteerRole[]
    notIn?: $Enums.VolunteerRole[]
    not?: NestedEnumVolunteerRoleWithAggregatesFilter<$PrismaModel> | $Enums.VolunteerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVolunteerRoleFilter<$PrismaModel>
    _max?: NestedEnumVolunteerRoleFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutDonationsInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    upsert?: UserUpsertWithoutDonationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsInput, UserUpdateWithoutDonationsInput>, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type VolunteerAssignmentCreateNestedManyWithoutEventInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutEventInput, VolunteerAssignmentUncheckedCreateWithoutEventInput> | VolunteerAssignmentCreateWithoutEventInput[] | VolunteerAssignmentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutEventInput | VolunteerAssignmentCreateOrConnectWithoutEventInput[]
    createMany?: VolunteerAssignmentCreateManyEventInputEnvelope
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
  }

  export type RegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutVolunteerInEventsInput = {
    create?: XOR<UserCreateWithoutVolunteerInEventsInput, UserUncheckedCreateWithoutVolunteerInEventsInput> | UserCreateWithoutVolunteerInEventsInput[] | UserUncheckedCreateWithoutVolunteerInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInEventsInput | UserCreateOrConnectWithoutVolunteerInEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutEmployeeInEventsInput = {
    create?: XOR<UserCreateWithoutEmployeeInEventsInput, UserUncheckedCreateWithoutEmployeeInEventsInput> | UserCreateWithoutEmployeeInEventsInput[] | UserUncheckedCreateWithoutEmployeeInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInEventsInput | UserCreateOrConnectWithoutEmployeeInEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ThematicCreateNestedManyWithoutEventsInput = {
    create?: XOR<ThematicCreateWithoutEventsInput, ThematicUncheckedCreateWithoutEventsInput> | ThematicCreateWithoutEventsInput[] | ThematicUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ThematicCreateOrConnectWithoutEventsInput | ThematicCreateOrConnectWithoutEventsInput[]
    connect?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
  }

  export type MediaFeedbackCreateNestedOneWithoutEventInput = {
    create?: XOR<MediaFeedbackCreateWithoutEventInput, MediaFeedbackUncheckedCreateWithoutEventInput>
    connectOrCreate?: MediaFeedbackCreateOrConnectWithoutEventInput
    connect?: MediaFeedbackWhereUniqueInput
  }

  export type VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutEventInput, VolunteerAssignmentUncheckedCreateWithoutEventInput> | VolunteerAssignmentCreateWithoutEventInput[] | VolunteerAssignmentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutEventInput | VolunteerAssignmentCreateOrConnectWithoutEventInput[]
    createMany?: VolunteerAssignmentCreateManyEventInputEnvelope
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput = {
    create?: XOR<UserCreateWithoutVolunteerInEventsInput, UserUncheckedCreateWithoutVolunteerInEventsInput> | UserCreateWithoutVolunteerInEventsInput[] | UserUncheckedCreateWithoutVolunteerInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInEventsInput | UserCreateOrConnectWithoutVolunteerInEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput = {
    create?: XOR<UserCreateWithoutEmployeeInEventsInput, UserUncheckedCreateWithoutEmployeeInEventsInput> | UserCreateWithoutEmployeeInEventsInput[] | UserUncheckedCreateWithoutEmployeeInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInEventsInput | UserCreateOrConnectWithoutEmployeeInEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ThematicUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<ThematicCreateWithoutEventsInput, ThematicUncheckedCreateWithoutEventsInput> | ThematicCreateWithoutEventsInput[] | ThematicUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ThematicCreateOrConnectWithoutEventsInput | ThematicCreateOrConnectWithoutEventsInput[]
    connect?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
  }

  export type MediaFeedbackUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<MediaFeedbackCreateWithoutEventInput, MediaFeedbackUncheckedCreateWithoutEventInput>
    connectOrCreate?: MediaFeedbackCreateOrConnectWithoutEventInput
    connect?: MediaFeedbackWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    upsert?: UserUpsertWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedEventsInput, UserUpdateWithoutCreatedEventsInput>, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type VolunteerAssignmentUpdateManyWithoutEventNestedInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutEventInput, VolunteerAssignmentUncheckedCreateWithoutEventInput> | VolunteerAssignmentCreateWithoutEventInput[] | VolunteerAssignmentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutEventInput | VolunteerAssignmentCreateOrConnectWithoutEventInput[]
    upsert?: VolunteerAssignmentUpsertWithWhereUniqueWithoutEventInput | VolunteerAssignmentUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VolunteerAssignmentCreateManyEventInputEnvelope
    set?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    disconnect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    delete?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    update?: VolunteerAssignmentUpdateWithWhereUniqueWithoutEventInput | VolunteerAssignmentUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VolunteerAssignmentUpdateManyWithWhereWithoutEventInput | VolunteerAssignmentUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VolunteerAssignmentScalarWhereInput | VolunteerAssignmentScalarWhereInput[]
  }

  export type RegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutEventInput | RegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutEventInput | RegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutEventInput | RegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type UserUpdateManyWithoutVolunteerInEventsNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerInEventsInput, UserUncheckedCreateWithoutVolunteerInEventsInput> | UserCreateWithoutVolunteerInEventsInput[] | UserUncheckedCreateWithoutVolunteerInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInEventsInput | UserCreateOrConnectWithoutVolunteerInEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVolunteerInEventsInput | UserUpsertWithWhereUniqueWithoutVolunteerInEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVolunteerInEventsInput | UserUpdateWithWhereUniqueWithoutVolunteerInEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVolunteerInEventsInput | UserUpdateManyWithWhereWithoutVolunteerInEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutEmployeeInEventsNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInEventsInput, UserUncheckedCreateWithoutEmployeeInEventsInput> | UserCreateWithoutEmployeeInEventsInput[] | UserUncheckedCreateWithoutEmployeeInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInEventsInput | UserCreateOrConnectWithoutEmployeeInEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEmployeeInEventsInput | UserUpsertWithWhereUniqueWithoutEmployeeInEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEmployeeInEventsInput | UserUpdateWithWhereUniqueWithoutEmployeeInEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEmployeeInEventsInput | UserUpdateManyWithWhereWithoutEmployeeInEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ThematicUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ThematicCreateWithoutEventsInput, ThematicUncheckedCreateWithoutEventsInput> | ThematicCreateWithoutEventsInput[] | ThematicUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ThematicCreateOrConnectWithoutEventsInput | ThematicCreateOrConnectWithoutEventsInput[]
    upsert?: ThematicUpsertWithWhereUniqueWithoutEventsInput | ThematicUpsertWithWhereUniqueWithoutEventsInput[]
    set?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    disconnect?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    delete?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    connect?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    update?: ThematicUpdateWithWhereUniqueWithoutEventsInput | ThematicUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ThematicUpdateManyWithWhereWithoutEventsInput | ThematicUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ThematicScalarWhereInput | ThematicScalarWhereInput[]
  }

  export type MediaFeedbackUpdateOneWithoutEventNestedInput = {
    create?: XOR<MediaFeedbackCreateWithoutEventInput, MediaFeedbackUncheckedCreateWithoutEventInput>
    connectOrCreate?: MediaFeedbackCreateOrConnectWithoutEventInput
    upsert?: MediaFeedbackUpsertWithoutEventInput
    disconnect?: MediaFeedbackWhereInput | boolean
    delete?: MediaFeedbackWhereInput | boolean
    connect?: MediaFeedbackWhereUniqueInput
    update?: XOR<XOR<MediaFeedbackUpdateToOneWithWhereWithoutEventInput, MediaFeedbackUpdateWithoutEventInput>, MediaFeedbackUncheckedUpdateWithoutEventInput>
  }

  export type VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutEventInput, VolunteerAssignmentUncheckedCreateWithoutEventInput> | VolunteerAssignmentCreateWithoutEventInput[] | VolunteerAssignmentUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutEventInput | VolunteerAssignmentCreateOrConnectWithoutEventInput[]
    upsert?: VolunteerAssignmentUpsertWithWhereUniqueWithoutEventInput | VolunteerAssignmentUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VolunteerAssignmentCreateManyEventInputEnvelope
    set?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    disconnect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    delete?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    update?: VolunteerAssignmentUpdateWithWhereUniqueWithoutEventInput | VolunteerAssignmentUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VolunteerAssignmentUpdateManyWithWhereWithoutEventInput | VolunteerAssignmentUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VolunteerAssignmentScalarWhereInput | VolunteerAssignmentScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutEventInput | RegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutEventInput | RegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutEventInput | RegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerInEventsInput, UserUncheckedCreateWithoutVolunteerInEventsInput> | UserCreateWithoutVolunteerInEventsInput[] | UserUncheckedCreateWithoutVolunteerInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerInEventsInput | UserCreateOrConnectWithoutVolunteerInEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutVolunteerInEventsInput | UserUpsertWithWhereUniqueWithoutVolunteerInEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutVolunteerInEventsInput | UserUpdateWithWhereUniqueWithoutVolunteerInEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutVolunteerInEventsInput | UserUpdateManyWithWhereWithoutVolunteerInEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput = {
    create?: XOR<UserCreateWithoutEmployeeInEventsInput, UserUncheckedCreateWithoutEmployeeInEventsInput> | UserCreateWithoutEmployeeInEventsInput[] | UserUncheckedCreateWithoutEmployeeInEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEmployeeInEventsInput | UserCreateOrConnectWithoutEmployeeInEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEmployeeInEventsInput | UserUpsertWithWhereUniqueWithoutEmployeeInEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEmployeeInEventsInput | UserUpdateWithWhereUniqueWithoutEmployeeInEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEmployeeInEventsInput | UserUpdateManyWithWhereWithoutEmployeeInEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ThematicUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ThematicCreateWithoutEventsInput, ThematicUncheckedCreateWithoutEventsInput> | ThematicCreateWithoutEventsInput[] | ThematicUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ThematicCreateOrConnectWithoutEventsInput | ThematicCreateOrConnectWithoutEventsInput[]
    upsert?: ThematicUpsertWithWhereUniqueWithoutEventsInput | ThematicUpsertWithWhereUniqueWithoutEventsInput[]
    set?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    disconnect?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    delete?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    connect?: ThematicWhereUniqueInput | ThematicWhereUniqueInput[]
    update?: ThematicUpdateWithWhereUniqueWithoutEventsInput | ThematicUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ThematicUpdateManyWithWhereWithoutEventsInput | ThematicUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ThematicScalarWhereInput | ThematicScalarWhereInput[]
  }

  export type MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<MediaFeedbackCreateWithoutEventInput, MediaFeedbackUncheckedCreateWithoutEventInput>
    connectOrCreate?: MediaFeedbackCreateOrConnectWithoutEventInput
    upsert?: MediaFeedbackUpsertWithoutEventInput
    disconnect?: MediaFeedbackWhereInput | boolean
    delete?: MediaFeedbackWhereInput | boolean
    connect?: MediaFeedbackWhereUniqueInput
    update?: XOR<XOR<MediaFeedbackUpdateToOneWithWhereWithoutEventInput, MediaFeedbackUpdateWithoutEventInput>, MediaFeedbackUncheckedUpdateWithoutEventInput>
  }

  export type UserCreateNestedOneWithoutInterventionProposalInput = {
    create?: XOR<UserCreateWithoutInterventionProposalInput, UserUncheckedCreateWithoutInterventionProposalInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterventionProposalInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDomainFieldUpdateOperationsInput = {
    set?: $Enums.Domain
  }

  export type EnumProposalStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProposalStatus
  }

  export type UserUpdateOneRequiredWithoutInterventionProposalNestedInput = {
    create?: XOR<UserCreateWithoutInterventionProposalInput, UserUncheckedCreateWithoutInterventionProposalInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterventionProposalInput
    upsert?: UserUpsertWithoutInterventionProposalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterventionProposalInput, UserUpdateWithoutInterventionProposalInput>, UserUncheckedUpdateWithoutInterventionProposalInput>
  }

  export type EventCreateNestedOneWithoutMediaFeedbackInput = {
    create?: XOR<EventCreateWithoutMediaFeedbackInput, EventUncheckedCreateWithoutMediaFeedbackInput>
    connectOrCreate?: EventCreateOrConnectWithoutMediaFeedbackInput
    connect?: EventWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventUpdateOneRequiredWithoutMediaFeedbackNestedInput = {
    create?: XOR<EventCreateWithoutMediaFeedbackInput, EventUncheckedCreateWithoutMediaFeedbackInput>
    connectOrCreate?: EventCreateOrConnectWithoutMediaFeedbackInput
    upsert?: EventUpsertWithoutMediaFeedbackInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutMediaFeedbackInput, EventUpdateWithoutMediaFeedbackInput>, EventUncheckedUpdateWithoutMediaFeedbackInput>
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    upsert?: EventUpsertWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRegistrationsInput, EventUpdateWithoutRegistrationsInput>, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserCreateNestedOneWithoutResourcesInput = {
    create?: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumResourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResourceType
  }

  export type UserUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput
    upsert?: UserUpsertWithoutResourcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResourcesInput, UserUpdateWithoutResourcesInput>, UserUncheckedUpdateWithoutResourcesInput>
  }

  export type UserCreateNestedOneWithoutTestimonialsInput = {
    create?: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestimonialsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTestimonialsNestedInput = {
    create?: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestimonialsInput
    upsert?: UserUpsertWithoutTestimonialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestimonialsInput, UserUpdateWithoutTestimonialsInput>, UserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type EventCreateNestedManyWithoutThematicsInput = {
    create?: XOR<EventCreateWithoutThematicsInput, EventUncheckedCreateWithoutThematicsInput> | EventCreateWithoutThematicsInput[] | EventUncheckedCreateWithoutThematicsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutThematicsInput | EventCreateOrConnectWithoutThematicsInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutThematicsInput = {
    create?: XOR<EventCreateWithoutThematicsInput, EventUncheckedCreateWithoutThematicsInput> | EventCreateWithoutThematicsInput[] | EventUncheckedCreateWithoutThematicsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutThematicsInput | EventCreateOrConnectWithoutThematicsInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutThematicsNestedInput = {
    create?: XOR<EventCreateWithoutThematicsInput, EventUncheckedCreateWithoutThematicsInput> | EventCreateWithoutThematicsInput[] | EventUncheckedCreateWithoutThematicsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutThematicsInput | EventCreateOrConnectWithoutThematicsInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutThematicsInput | EventUpsertWithWhereUniqueWithoutThematicsInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutThematicsInput | EventUpdateWithWhereUniqueWithoutThematicsInput[]
    updateMany?: EventUpdateManyWithWhereWithoutThematicsInput | EventUpdateManyWithWhereWithoutThematicsInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutThematicsNestedInput = {
    create?: XOR<EventCreateWithoutThematicsInput, EventUncheckedCreateWithoutThematicsInput> | EventCreateWithoutThematicsInput[] | EventUncheckedCreateWithoutThematicsInput[]
    connectOrCreate?: EventCreateOrConnectWithoutThematicsInput | EventCreateOrConnectWithoutThematicsInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutThematicsInput | EventUpsertWithWhereUniqueWithoutThematicsInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutThematicsInput | EventUpdateWithWhereUniqueWithoutThematicsInput[]
    updateMany?: EventUpdateManyWithWhereWithoutThematicsInput | EventUpdateManyWithWhereWithoutThematicsInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VolunteerApplicationCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerApplicationCreateWithoutUserInput, VolunteerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerApplicationCreateOrConnectWithoutUserInput
    connect?: VolunteerApplicationWhereUniqueInput
  }

  export type InterventionProposalCreateNestedOneWithoutUserInput = {
    create?: XOR<InterventionProposalCreateWithoutUserInput, InterventionProposalUncheckedCreateWithoutUserInput>
    connectOrCreate?: InterventionProposalCreateOrConnectWithoutUserInput
    connect?: InterventionProposalWhereUniqueInput
  }

  export type RegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ResourceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ResourceCreateWithoutCreatedByInput, ResourceUncheckedCreateWithoutCreatedByInput> | ResourceCreateWithoutCreatedByInput[] | ResourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCreatedByInput | ResourceCreateOrConnectWithoutCreatedByInput[]
    createMany?: ResourceCreateManyCreatedByInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type TestimonialCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TestimonialCreateWithoutCreatedByInput, TestimonialUncheckedCreateWithoutCreatedByInput> | TestimonialCreateWithoutCreatedByInput[] | TestimonialUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutCreatedByInput | TestimonialCreateOrConnectWithoutCreatedByInput[]
    createMany?: TestimonialCreateManyCreatedByInputEnvelope
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type VolunteerAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutUserInput, VolunteerAssignmentUncheckedCreateWithoutUserInput> | VolunteerAssignmentCreateWithoutUserInput[] | VolunteerAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutUserInput | VolunteerAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: VolunteerAssignmentCreateManyUserInputEnvelope
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput> | EventCreateWithoutVolunteersInput[] | EventUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVolunteersInput | EventCreateOrConnectWithoutVolunteersInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<EventCreateWithoutEmployeesInput, EventUncheckedCreateWithoutEmployeesInput> | EventCreateWithoutEmployeesInput[] | EventUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEmployeesInput | EventCreateOrConnectWithoutEmployeesInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VolunteerApplicationCreateWithoutUserInput, VolunteerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerApplicationCreateOrConnectWithoutUserInput
    connect?: VolunteerApplicationWhereUniqueInput
  }

  export type InterventionProposalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InterventionProposalCreateWithoutUserInput, InterventionProposalUncheckedCreateWithoutUserInput>
    connectOrCreate?: InterventionProposalCreateOrConnectWithoutUserInput
    connect?: InterventionProposalWhereUniqueInput
  }

  export type RegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ResourceCreateWithoutCreatedByInput, ResourceUncheckedCreateWithoutCreatedByInput> | ResourceCreateWithoutCreatedByInput[] | ResourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCreatedByInput | ResourceCreateOrConnectWithoutCreatedByInput[]
    createMany?: ResourceCreateManyCreatedByInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type TestimonialUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TestimonialCreateWithoutCreatedByInput, TestimonialUncheckedCreateWithoutCreatedByInput> | TestimonialCreateWithoutCreatedByInput[] | TestimonialUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutCreatedByInput | TestimonialCreateOrConnectWithoutCreatedByInput[]
    createMany?: TestimonialCreateManyCreatedByInputEnvelope
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutUserInput, VolunteerAssignmentUncheckedCreateWithoutUserInput> | VolunteerAssignmentCreateWithoutUserInput[] | VolunteerAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutUserInput | VolunteerAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: VolunteerAssignmentCreateManyUserInputEnvelope
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutVolunteersInput = {
    create?: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput> | EventCreateWithoutVolunteersInput[] | EventUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVolunteersInput | EventCreateOrConnectWithoutVolunteersInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<EventCreateWithoutEmployeesInput, EventUncheckedCreateWithoutEmployeesInput> | EventCreateWithoutEmployeesInput[] | EventUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEmployeesInput | EventCreateOrConnectWithoutEmployeesInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type NullableEnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VolunteerApplicationUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerApplicationCreateWithoutUserInput, VolunteerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerApplicationCreateOrConnectWithoutUserInput
    upsert?: VolunteerApplicationUpsertWithoutUserInput
    disconnect?: VolunteerApplicationWhereInput | boolean
    delete?: VolunteerApplicationWhereInput | boolean
    connect?: VolunteerApplicationWhereUniqueInput
    update?: XOR<XOR<VolunteerApplicationUpdateToOneWithWhereWithoutUserInput, VolunteerApplicationUpdateWithoutUserInput>, VolunteerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type InterventionProposalUpdateOneWithoutUserNestedInput = {
    create?: XOR<InterventionProposalCreateWithoutUserInput, InterventionProposalUncheckedCreateWithoutUserInput>
    connectOrCreate?: InterventionProposalCreateOrConnectWithoutUserInput
    upsert?: InterventionProposalUpsertWithoutUserInput
    disconnect?: InterventionProposalWhereInput | boolean
    delete?: InterventionProposalWhereInput | boolean
    connect?: InterventionProposalWhereUniqueInput
    update?: XOR<XOR<InterventionProposalUpdateToOneWithWhereWithoutUserInput, InterventionProposalUpdateWithoutUserInput>, InterventionProposalUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ResourceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ResourceCreateWithoutCreatedByInput, ResourceUncheckedCreateWithoutCreatedByInput> | ResourceCreateWithoutCreatedByInput[] | ResourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCreatedByInput | ResourceCreateOrConnectWithoutCreatedByInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCreatedByInput | ResourceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ResourceCreateManyCreatedByInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCreatedByInput | ResourceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCreatedByInput | ResourceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type TestimonialUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TestimonialCreateWithoutCreatedByInput, TestimonialUncheckedCreateWithoutCreatedByInput> | TestimonialCreateWithoutCreatedByInput[] | TestimonialUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutCreatedByInput | TestimonialCreateOrConnectWithoutCreatedByInput[]
    upsert?: TestimonialUpsertWithWhereUniqueWithoutCreatedByInput | TestimonialUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TestimonialCreateManyCreatedByInputEnvelope
    set?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    disconnect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    delete?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    update?: TestimonialUpdateWithWhereUniqueWithoutCreatedByInput | TestimonialUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TestimonialUpdateManyWithWhereWithoutCreatedByInput | TestimonialUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutUserInput | DonationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutUserInput | DonationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutUserInput | DonationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type VolunteerAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutUserInput, VolunteerAssignmentUncheckedCreateWithoutUserInput> | VolunteerAssignmentCreateWithoutUserInput[] | VolunteerAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutUserInput | VolunteerAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: VolunteerAssignmentUpsertWithWhereUniqueWithoutUserInput | VolunteerAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VolunteerAssignmentCreateManyUserInputEnvelope
    set?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    disconnect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    delete?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    update?: VolunteerAssignmentUpdateWithWhereUniqueWithoutUserInput | VolunteerAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VolunteerAssignmentUpdateManyWithWhereWithoutUserInput | VolunteerAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VolunteerAssignmentScalarWhereInput | VolunteerAssignmentScalarWhereInput[]
  }

  export type EventUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput> | EventCreateWithoutVolunteersInput[] | EventUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVolunteersInput | EventCreateOrConnectWithoutVolunteersInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVolunteersInput | EventUpsertWithWhereUniqueWithoutVolunteersInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVolunteersInput | EventUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVolunteersInput | EventUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<EventCreateWithoutEmployeesInput, EventUncheckedCreateWithoutEmployeesInput> | EventCreateWithoutEmployeesInput[] | EventUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEmployeesInput | EventCreateOrConnectWithoutEmployeesInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEmployeesInput | EventUpsertWithWhereUniqueWithoutEmployeesInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEmployeesInput | EventUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEmployeesInput | EventUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VolunteerApplicationCreateWithoutUserInput, VolunteerApplicationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VolunteerApplicationCreateOrConnectWithoutUserInput
    upsert?: VolunteerApplicationUpsertWithoutUserInput
    disconnect?: VolunteerApplicationWhereInput | boolean
    delete?: VolunteerApplicationWhereInput | boolean
    connect?: VolunteerApplicationWhereUniqueInput
    update?: XOR<XOR<VolunteerApplicationUpdateToOneWithWhereWithoutUserInput, VolunteerApplicationUpdateWithoutUserInput>, VolunteerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type InterventionProposalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InterventionProposalCreateWithoutUserInput, InterventionProposalUncheckedCreateWithoutUserInput>
    connectOrCreate?: InterventionProposalCreateOrConnectWithoutUserInput
    upsert?: InterventionProposalUpsertWithoutUserInput
    disconnect?: InterventionProposalWhereInput | boolean
    delete?: InterventionProposalWhereInput | boolean
    connect?: InterventionProposalWhereUniqueInput
    update?: XOR<XOR<InterventionProposalUpdateToOneWithWhereWithoutUserInput, InterventionProposalUpdateWithoutUserInput>, InterventionProposalUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ResourceCreateWithoutCreatedByInput, ResourceUncheckedCreateWithoutCreatedByInput> | ResourceCreateWithoutCreatedByInput[] | ResourceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCreatedByInput | ResourceCreateOrConnectWithoutCreatedByInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCreatedByInput | ResourceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ResourceCreateManyCreatedByInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCreatedByInput | ResourceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCreatedByInput | ResourceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TestimonialCreateWithoutCreatedByInput, TestimonialUncheckedCreateWithoutCreatedByInput> | TestimonialCreateWithoutCreatedByInput[] | TestimonialUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TestimonialCreateOrConnectWithoutCreatedByInput | TestimonialCreateOrConnectWithoutCreatedByInput[]
    upsert?: TestimonialUpsertWithWhereUniqueWithoutCreatedByInput | TestimonialUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TestimonialCreateManyCreatedByInputEnvelope
    set?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    disconnect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    delete?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    connect?: TestimonialWhereUniqueInput | TestimonialWhereUniqueInput[]
    update?: TestimonialUpdateWithWhereUniqueWithoutCreatedByInput | TestimonialUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TestimonialUpdateManyWithWhereWithoutCreatedByInput | TestimonialUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutUserInput | DonationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutUserInput | DonationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutUserInput | DonationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VolunteerAssignmentCreateWithoutUserInput, VolunteerAssignmentUncheckedCreateWithoutUserInput> | VolunteerAssignmentCreateWithoutUserInput[] | VolunteerAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VolunteerAssignmentCreateOrConnectWithoutUserInput | VolunteerAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: VolunteerAssignmentUpsertWithWhereUniqueWithoutUserInput | VolunteerAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VolunteerAssignmentCreateManyUserInputEnvelope
    set?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    disconnect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    delete?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    connect?: VolunteerAssignmentWhereUniqueInput | VolunteerAssignmentWhereUniqueInput[]
    update?: VolunteerAssignmentUpdateWithWhereUniqueWithoutUserInput | VolunteerAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VolunteerAssignmentUpdateManyWithWhereWithoutUserInput | VolunteerAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VolunteerAssignmentScalarWhereInput | VolunteerAssignmentScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutVolunteersNestedInput = {
    create?: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput> | EventCreateWithoutVolunteersInput[] | EventUncheckedCreateWithoutVolunteersInput[]
    connectOrCreate?: EventCreateOrConnectWithoutVolunteersInput | EventCreateOrConnectWithoutVolunteersInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutVolunteersInput | EventUpsertWithWhereUniqueWithoutVolunteersInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutVolunteersInput | EventUpdateWithWhereUniqueWithoutVolunteersInput[]
    updateMany?: EventUpdateManyWithWhereWithoutVolunteersInput | EventUpdateManyWithWhereWithoutVolunteersInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<EventCreateWithoutEmployeesInput, EventUncheckedCreateWithoutEmployeesInput> | EventCreateWithoutEmployeesInput[] | EventUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEmployeesInput | EventCreateOrConnectWithoutEmployeesInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEmployeesInput | EventUpsertWithWhereUniqueWithoutEmployeesInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEmployeesInput | EventUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEmployeesInput | EventUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVolunteerApplicationInput = {
    create?: XOR<UserCreateWithoutVolunteerApplicationInput, UserUncheckedCreateWithoutVolunteerApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerApplicationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type UserUpdateOneRequiredWithoutVolunteerApplicationNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerApplicationInput, UserUncheckedCreateWithoutVolunteerApplicationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerApplicationInput
    upsert?: UserUpsertWithoutVolunteerApplicationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerApplicationInput, UserUpdateWithoutVolunteerApplicationInput>, UserUncheckedUpdateWithoutVolunteerApplicationInput>
  }

  export type EventCreateNestedOneWithoutVolunteerAssignmentsInput = {
    create?: XOR<EventCreateWithoutVolunteerAssignmentsInput, EventUncheckedCreateWithoutVolunteerAssignmentsInput>
    connectOrCreate?: EventCreateOrConnectWithoutVolunteerAssignmentsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVolunteerAssignmentsInput = {
    create?: XOR<UserCreateWithoutVolunteerAssignmentsInput, UserUncheckedCreateWithoutVolunteerAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVolunteerRoleFieldUpdateOperationsInput = {
    set?: $Enums.VolunteerRole
  }

  export type EventUpdateOneRequiredWithoutVolunteerAssignmentsNestedInput = {
    create?: XOR<EventCreateWithoutVolunteerAssignmentsInput, EventUncheckedCreateWithoutVolunteerAssignmentsInput>
    connectOrCreate?: EventCreateOrConnectWithoutVolunteerAssignmentsInput
    upsert?: EventUpsertWithoutVolunteerAssignmentsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVolunteerAssignmentsInput, EventUpdateWithoutVolunteerAssignmentsInput>, EventUncheckedUpdateWithoutVolunteerAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutVolunteerAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutVolunteerAssignmentsInput, UserUncheckedCreateWithoutVolunteerAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVolunteerAssignmentsInput
    upsert?: UserUpsertWithoutVolunteerAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVolunteerAssignmentsInput, UserUpdateWithoutVolunteerAssignmentsInput>, UserUncheckedUpdateWithoutVolunteerAssignmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumDomainFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel>
    in?: $Enums.Domain[]
    notIn?: $Enums.Domain[]
    not?: NestedEnumDomainFilter<$PrismaModel> | $Enums.Domain
  }

  export type NestedEnumProposalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[]
    notIn?: $Enums.ProposalStatus[]
    not?: NestedEnumProposalStatusFilter<$PrismaModel> | $Enums.ProposalStatus
  }

  export type NestedEnumDomainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Domain | EnumDomainFieldRefInput<$PrismaModel>
    in?: $Enums.Domain[]
    notIn?: $Enums.Domain[]
    not?: NestedEnumDomainWithAggregatesFilter<$PrismaModel> | $Enums.Domain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDomainFilter<$PrismaModel>
    _max?: NestedEnumDomainFilter<$PrismaModel>
  }

  export type NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProposalStatus | EnumProposalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProposalStatus[]
    notIn?: $Enums.ProposalStatus[]
    not?: NestedEnumProposalStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProposalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProposalStatusFilter<$PrismaModel>
    _max?: NestedEnumProposalStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[]
    notIn?: $Enums.ResourceType[]
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserStatus[] | null
    notIn?: $Enums.UserStatus[] | null
    not?: NestedEnumUserStatusNullableFilter<$PrismaModel> | $Enums.UserStatus | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserStatus[] | null
    notIn?: $Enums.UserStatus[] | null
    not?: NestedEnumUserStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumUserStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumVolunteerRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.VolunteerRole | EnumVolunteerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VolunteerRole[]
    notIn?: $Enums.VolunteerRole[]
    not?: NestedEnumVolunteerRoleFilter<$PrismaModel> | $Enums.VolunteerRole
  }

  export type NestedEnumVolunteerRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VolunteerRole | EnumVolunteerRoleFieldRefInput<$PrismaModel>
    in?: $Enums.VolunteerRole[]
    notIn?: $Enums.VolunteerRole[]
    not?: NestedEnumVolunteerRoleWithAggregatesFilter<$PrismaModel> | $Enums.VolunteerRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVolunteerRoleFilter<$PrismaModel>
    _max?: NestedEnumVolunteerRoleFilter<$PrismaModel>
  }

  export type UserCreateWithoutDonationsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutDonationsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutDonationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
  }

  export type UserUpsertWithoutDonationsInput = {
    update: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateWithoutDonationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type UserCreateWithoutCreatedEventsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type VolunteerAssignmentCreateWithoutEventInput = {
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVolunteerAssignmentsInput
  }

  export type VolunteerAssignmentUncheckedCreateWithoutEventInput = {
    id?: number
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    userId: number
  }

  export type VolunteerAssignmentCreateOrConnectWithoutEventInput = {
    where: VolunteerAssignmentWhereUniqueInput
    create: XOR<VolunteerAssignmentCreateWithoutEventInput, VolunteerAssignmentUncheckedCreateWithoutEventInput>
  }

  export type VolunteerAssignmentCreateManyEventInputEnvelope = {
    data: VolunteerAssignmentCreateManyEventInput | VolunteerAssignmentCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationCreateWithoutEventInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutEventInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type RegistrationCreateOrConnectWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput>
  }

  export type RegistrationCreateManyEventInputEnvelope = {
    data: RegistrationCreateManyEventInput | RegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutVolunteerInEventsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutVolunteerInEventsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutVolunteerInEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerInEventsInput, UserUncheckedCreateWithoutVolunteerInEventsInput>
  }

  export type UserCreateWithoutEmployeeInEventsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
  }

  export type UserUncheckedCreateWithoutEmployeeInEventsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
  }

  export type UserCreateOrConnectWithoutEmployeeInEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmployeeInEventsInput, UserUncheckedCreateWithoutEmployeeInEventsInput>
  }

  export type ThematicCreateWithoutEventsInput = {
    name: string
  }

  export type ThematicUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
  }

  export type ThematicCreateOrConnectWithoutEventsInput = {
    where: ThematicWhereUniqueInput
    create: XOR<ThematicCreateWithoutEventsInput, ThematicUncheckedCreateWithoutEventsInput>
  }

  export type MediaFeedbackCreateWithoutEventInput = {
    mediaGallery: string
    caption?: string | null
  }

  export type MediaFeedbackUncheckedCreateWithoutEventInput = {
    id?: number
    mediaGallery: string
    caption?: string | null
  }

  export type MediaFeedbackCreateOrConnectWithoutEventInput = {
    where: MediaFeedbackWhereUniqueInput
    create: XOR<MediaFeedbackCreateWithoutEventInput, MediaFeedbackUncheckedCreateWithoutEventInput>
  }

  export type UserUpsertWithoutCreatedEventsInput = {
    update: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type UserUpdateWithoutCreatedEventsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type VolunteerAssignmentUpsertWithWhereUniqueWithoutEventInput = {
    where: VolunteerAssignmentWhereUniqueInput
    update: XOR<VolunteerAssignmentUpdateWithoutEventInput, VolunteerAssignmentUncheckedUpdateWithoutEventInput>
    create: XOR<VolunteerAssignmentCreateWithoutEventInput, VolunteerAssignmentUncheckedCreateWithoutEventInput>
  }

  export type VolunteerAssignmentUpdateWithWhereUniqueWithoutEventInput = {
    where: VolunteerAssignmentWhereUniqueInput
    data: XOR<VolunteerAssignmentUpdateWithoutEventInput, VolunteerAssignmentUncheckedUpdateWithoutEventInput>
  }

  export type VolunteerAssignmentUpdateManyWithWhereWithoutEventInput = {
    where: VolunteerAssignmentScalarWhereInput
    data: XOR<VolunteerAssignmentUpdateManyMutationInput, VolunteerAssignmentUncheckedUpdateManyWithoutEventInput>
  }

  export type VolunteerAssignmentScalarWhereInput = {
    AND?: VolunteerAssignmentScalarWhereInput | VolunteerAssignmentScalarWhereInput[]
    OR?: VolunteerAssignmentScalarWhereInput[]
    NOT?: VolunteerAssignmentScalarWhereInput | VolunteerAssignmentScalarWhereInput[]
    id?: IntFilter<"VolunteerAssignment"> | number
    role?: EnumVolunteerRoleFilter<"VolunteerAssignment"> | $Enums.VolunteerRole
    tasks?: StringNullableFilter<"VolunteerAssignment"> | string | null
    notes?: StringNullableFilter<"VolunteerAssignment"> | string | null
    createdAt?: DateTimeFilter<"VolunteerAssignment"> | Date | string
    eventId?: IntFilter<"VolunteerAssignment"> | number
    userId?: IntFilter<"VolunteerAssignment"> | number
  }

  export type RegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutEventInput, RegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutEventInput, RegistrationUncheckedUpdateWithoutEventInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutEventInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type RegistrationScalarWhereInput = {
    AND?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    OR?: RegistrationScalarWhereInput[]
    NOT?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    id?: IntFilter<"Registration"> | number
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    userId?: IntFilter<"Registration"> | number
    eventId?: IntFilter<"Registration"> | number
  }

  export type UserUpsertWithWhereUniqueWithoutVolunteerInEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutVolunteerInEventsInput, UserUncheckedUpdateWithoutVolunteerInEventsInput>
    create: XOR<UserCreateWithoutVolunteerInEventsInput, UserUncheckedCreateWithoutVolunteerInEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutVolunteerInEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutVolunteerInEventsInput, UserUncheckedUpdateWithoutVolunteerInEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutVolunteerInEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutVolunteerInEventsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusNullableFilter<"User"> | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutEmployeeInEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEmployeeInEventsInput, UserUncheckedUpdateWithoutEmployeeInEventsInput>
    create: XOR<UserCreateWithoutEmployeeInEventsInput, UserUncheckedCreateWithoutEmployeeInEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEmployeeInEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEmployeeInEventsInput, UserUncheckedUpdateWithoutEmployeeInEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutEmployeeInEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEmployeeInEventsInput>
  }

  export type ThematicUpsertWithWhereUniqueWithoutEventsInput = {
    where: ThematicWhereUniqueInput
    update: XOR<ThematicUpdateWithoutEventsInput, ThematicUncheckedUpdateWithoutEventsInput>
    create: XOR<ThematicCreateWithoutEventsInput, ThematicUncheckedCreateWithoutEventsInput>
  }

  export type ThematicUpdateWithWhereUniqueWithoutEventsInput = {
    where: ThematicWhereUniqueInput
    data: XOR<ThematicUpdateWithoutEventsInput, ThematicUncheckedUpdateWithoutEventsInput>
  }

  export type ThematicUpdateManyWithWhereWithoutEventsInput = {
    where: ThematicScalarWhereInput
    data: XOR<ThematicUpdateManyMutationInput, ThematicUncheckedUpdateManyWithoutEventsInput>
  }

  export type ThematicScalarWhereInput = {
    AND?: ThematicScalarWhereInput | ThematicScalarWhereInput[]
    OR?: ThematicScalarWhereInput[]
    NOT?: ThematicScalarWhereInput | ThematicScalarWhereInput[]
    id?: IntFilter<"Thematic"> | number
    name?: StringFilter<"Thematic"> | string
  }

  export type MediaFeedbackUpsertWithoutEventInput = {
    update: XOR<MediaFeedbackUpdateWithoutEventInput, MediaFeedbackUncheckedUpdateWithoutEventInput>
    create: XOR<MediaFeedbackCreateWithoutEventInput, MediaFeedbackUncheckedCreateWithoutEventInput>
    where?: MediaFeedbackWhereInput
  }

  export type MediaFeedbackUpdateToOneWithWhereWithoutEventInput = {
    where?: MediaFeedbackWhereInput
    data: XOR<MediaFeedbackUpdateWithoutEventInput, MediaFeedbackUncheckedUpdateWithoutEventInput>
  }

  export type MediaFeedbackUpdateWithoutEventInput = {
    mediaGallery?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaFeedbackUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaGallery?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutInterventionProposalInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutInterventionProposalInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutInterventionProposalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterventionProposalInput, UserUncheckedCreateWithoutInterventionProposalInput>
  }

  export type UserUpsertWithoutInterventionProposalInput = {
    update: XOR<UserUpdateWithoutInterventionProposalInput, UserUncheckedUpdateWithoutInterventionProposalInput>
    create: XOR<UserCreateWithoutInterventionProposalInput, UserUncheckedCreateWithoutInterventionProposalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterventionProposalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterventionProposalInput, UserUncheckedUpdateWithoutInterventionProposalInput>
  }

  export type UserUpdateWithoutInterventionProposalInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutInterventionProposalInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EventCreateWithoutMediaFeedbackInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutMediaFeedbackInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutMediaFeedbackInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMediaFeedbackInput, EventUncheckedCreateWithoutMediaFeedbackInput>
  }

  export type EventUpsertWithoutMediaFeedbackInput = {
    update: XOR<EventUpdateWithoutMediaFeedbackInput, EventUncheckedUpdateWithoutMediaFeedbackInput>
    create: XOR<EventCreateWithoutMediaFeedbackInput, EventUncheckedCreateWithoutMediaFeedbackInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutMediaFeedbackInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutMediaFeedbackInput, EventUncheckedUpdateWithoutMediaFeedbackInput>
  }

  export type EventUpdateWithoutMediaFeedbackInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutMediaFeedbackInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type UserCreateWithoutRegistrationsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type EventCreateWithoutRegistrationsInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRegistrationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EventUpsertWithoutRegistrationsInput = {
    update: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateWithoutRegistrationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type UserCreateWithoutResourcesInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutResourcesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutResourcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
  }

  export type UserUpsertWithoutResourcesInput = {
    update: XOR<UserUpdateWithoutResourcesInput, UserUncheckedUpdateWithoutResourcesInput>
    create: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResourcesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResourcesInput, UserUncheckedUpdateWithoutResourcesInput>
  }

  export type UserUpdateWithoutResourcesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type UserCreateWithoutTestimonialsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutTestimonialsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutTestimonialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
  }

  export type UserUpsertWithoutTestimonialsInput = {
    update: XOR<UserUpdateWithoutTestimonialsInput, UserUncheckedUpdateWithoutTestimonialsInput>
    create: XOR<UserCreateWithoutTestimonialsInput, UserUncheckedCreateWithoutTestimonialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestimonialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestimonialsInput, UserUncheckedUpdateWithoutTestimonialsInput>
  }

  export type UserUpdateWithoutTestimonialsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutTestimonialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EventCreateWithoutThematicsInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutThematicsInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutThematicsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutThematicsInput, EventUncheckedCreateWithoutThematicsInput>
  }

  export type EventUpsertWithWhereUniqueWithoutThematicsInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutThematicsInput, EventUncheckedUpdateWithoutThematicsInput>
    create: XOR<EventCreateWithoutThematicsInput, EventUncheckedCreateWithoutThematicsInput>
  }

  export type EventUpdateWithWhereUniqueWithoutThematicsInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutThematicsInput, EventUncheckedUpdateWithoutThematicsInput>
  }

  export type EventUpdateManyWithWhereWithoutThematicsInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutThematicsInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    createdById?: IntFilter<"Event"> | number
  }

  export type VolunteerApplicationCreateWithoutUserInput = {
    desiredRoles: string
    motivation: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type VolunteerApplicationUncheckedCreateWithoutUserInput = {
    id?: number
    desiredRoles: string
    motivation: string
    status?: $Enums.ApplicationStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type VolunteerApplicationCreateOrConnectWithoutUserInput = {
    where: VolunteerApplicationWhereUniqueInput
    create: XOR<VolunteerApplicationCreateWithoutUserInput, VolunteerApplicationUncheckedCreateWithoutUserInput>
  }

  export type InterventionProposalCreateWithoutUserInput = {
    jobTitle: string
    description: string
    domain: $Enums.Domain
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type InterventionProposalUncheckedCreateWithoutUserInput = {
    id?: number
    jobTitle: string
    description: string
    domain: $Enums.Domain
    status?: $Enums.ProposalStatus
    createdAt?: Date | string
  }

  export type InterventionProposalCreateOrConnectWithoutUserInput = {
    where: InterventionProposalWhereUniqueInput
    create: XOR<InterventionProposalCreateWithoutUserInput, InterventionProposalUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateWithoutUserInput = {
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    eventId: number
  }

  export type RegistrationCreateOrConnectWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateManyUserInputEnvelope = {
    data: RegistrationCreateManyUserInput | RegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutCreatedByInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventCreateManyCreatedByInputEnvelope = {
    data: EventCreateManyCreatedByInput | EventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ResourceCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt?: Date | string
  }

  export type ResourceUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt?: Date | string
  }

  export type ResourceCreateOrConnectWithoutCreatedByInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutCreatedByInput, ResourceUncheckedCreateWithoutCreatedByInput>
  }

  export type ResourceCreateManyCreatedByInputEnvelope = {
    data: ResourceCreateManyCreatedByInput | ResourceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TestimonialCreateWithoutCreatedByInput = {
    content: string
    authorName: string
    createdAt?: Date | string
  }

  export type TestimonialUncheckedCreateWithoutCreatedByInput = {
    id?: number
    content: string
    authorName: string
    createdAt?: Date | string
  }

  export type TestimonialCreateOrConnectWithoutCreatedByInput = {
    where: TestimonialWhereUniqueInput
    create: XOR<TestimonialCreateWithoutCreatedByInput, TestimonialUncheckedCreateWithoutCreatedByInput>
  }

  export type TestimonialCreateManyCreatedByInputEnvelope = {
    data: TestimonialCreateManyCreatedByInput | TestimonialCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutUserInput = {
    amount: number
    date?: Date | string
    email: string
  }

  export type DonationUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    date?: Date | string
    email: string
  }

  export type DonationCreateOrConnectWithoutUserInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput>
  }

  export type DonationCreateManyUserInputEnvelope = {
    data: DonationCreateManyUserInput | DonationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerAssignmentCreateWithoutUserInput = {
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutVolunteerAssignmentsInput
  }

  export type VolunteerAssignmentUncheckedCreateWithoutUserInput = {
    id?: number
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    eventId: number
  }

  export type VolunteerAssignmentCreateOrConnectWithoutUserInput = {
    where: VolunteerAssignmentWhereUniqueInput
    create: XOR<VolunteerAssignmentCreateWithoutUserInput, VolunteerAssignmentUncheckedCreateWithoutUserInput>
  }

  export type VolunteerAssignmentCreateManyUserInputEnvelope = {
    data: VolunteerAssignmentCreateManyUserInput | VolunteerAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutVolunteersInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVolunteersInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVolunteersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput>
  }

  export type EventCreateWithoutEmployeesInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutEventInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEmployeesInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutEventInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEmployeesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEmployeesInput, EventUncheckedCreateWithoutEmployeesInput>
  }

  export type VolunteerApplicationUpsertWithoutUserInput = {
    update: XOR<VolunteerApplicationUpdateWithoutUserInput, VolunteerApplicationUncheckedUpdateWithoutUserInput>
    create: XOR<VolunteerApplicationCreateWithoutUserInput, VolunteerApplicationUncheckedCreateWithoutUserInput>
    where?: VolunteerApplicationWhereInput
  }

  export type VolunteerApplicationUpdateToOneWithWhereWithoutUserInput = {
    where?: VolunteerApplicationWhereInput
    data: XOR<VolunteerApplicationUpdateWithoutUserInput, VolunteerApplicationUncheckedUpdateWithoutUserInput>
  }

  export type VolunteerApplicationUpdateWithoutUserInput = {
    desiredRoles?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerApplicationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    desiredRoles?: StringFieldUpdateOperationsInput | string
    motivation?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterventionProposalUpsertWithoutUserInput = {
    update: XOR<InterventionProposalUpdateWithoutUserInput, InterventionProposalUncheckedUpdateWithoutUserInput>
    create: XOR<InterventionProposalCreateWithoutUserInput, InterventionProposalUncheckedCreateWithoutUserInput>
    where?: InterventionProposalWhereInput
  }

  export type InterventionProposalUpdateToOneWithWhereWithoutUserInput = {
    where?: InterventionProposalWhereInput
    data: XOR<InterventionProposalUpdateWithoutUserInput, InterventionProposalUncheckedUpdateWithoutUserInput>
  }

  export type InterventionProposalUpdateWithoutUserInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: EnumDomainFieldUpdateOperationsInput | $Enums.Domain
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterventionProposalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    domain?: EnumDomainFieldUpdateOperationsInput | $Enums.Domain
    status?: EnumProposalStatusFieldUpdateOperationsInput | $Enums.ProposalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutUserInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ResourceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutCreatedByInput, ResourceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ResourceCreateWithoutCreatedByInput, ResourceUncheckedCreateWithoutCreatedByInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutCreatedByInput, ResourceUncheckedUpdateWithoutCreatedByInput>
  }

  export type ResourceUpdateManyWithWhereWithoutCreatedByInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    id?: IntFilter<"Resource"> | number
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    type?: EnumResourceTypeFilter<"Resource"> | $Enums.ResourceType
    linkOrFile?: StringFilter<"Resource"> | string
    createdAt?: DateTimeFilter<"Resource"> | Date | string
    createdById?: IntFilter<"Resource"> | number
  }

  export type TestimonialUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TestimonialWhereUniqueInput
    update: XOR<TestimonialUpdateWithoutCreatedByInput, TestimonialUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TestimonialCreateWithoutCreatedByInput, TestimonialUncheckedCreateWithoutCreatedByInput>
  }

  export type TestimonialUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TestimonialWhereUniqueInput
    data: XOR<TestimonialUpdateWithoutCreatedByInput, TestimonialUncheckedUpdateWithoutCreatedByInput>
  }

  export type TestimonialUpdateManyWithWhereWithoutCreatedByInput = {
    where: TestimonialScalarWhereInput
    data: XOR<TestimonialUpdateManyMutationInput, TestimonialUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TestimonialScalarWhereInput = {
    AND?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
    OR?: TestimonialScalarWhereInput[]
    NOT?: TestimonialScalarWhereInput | TestimonialScalarWhereInput[]
    id?: IntFilter<"Testimonial"> | number
    content?: StringFilter<"Testimonial"> | string
    authorName?: StringFilter<"Testimonial"> | string
    createdAt?: DateTimeFilter<"Testimonial"> | Date | string
    createdById?: IntFilter<"Testimonial"> | number
  }

  export type DonationUpsertWithWhereUniqueWithoutUserInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutUserInput, DonationUncheckedUpdateWithoutUserInput>
    create: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutUserInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutUserInput, DonationUncheckedUpdateWithoutUserInput>
  }

  export type DonationUpdateManyWithWhereWithoutUserInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutUserInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: IntFilter<"Donation"> | number
    amount?: FloatFilter<"Donation"> | number
    date?: DateTimeFilter<"Donation"> | Date | string
    email?: StringFilter<"Donation"> | string
    userId?: IntFilter<"Donation"> | number
  }

  export type VolunteerAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: VolunteerAssignmentWhereUniqueInput
    update: XOR<VolunteerAssignmentUpdateWithoutUserInput, VolunteerAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<VolunteerAssignmentCreateWithoutUserInput, VolunteerAssignmentUncheckedCreateWithoutUserInput>
  }

  export type VolunteerAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: VolunteerAssignmentWhereUniqueInput
    data: XOR<VolunteerAssignmentUpdateWithoutUserInput, VolunteerAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type VolunteerAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: VolunteerAssignmentScalarWhereInput
    data: XOR<VolunteerAssignmentUpdateManyMutationInput, VolunteerAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EventUpsertWithWhereUniqueWithoutVolunteersInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutVolunteersInput, EventUncheckedUpdateWithoutVolunteersInput>
    create: XOR<EventCreateWithoutVolunteersInput, EventUncheckedCreateWithoutVolunteersInput>
  }

  export type EventUpdateWithWhereUniqueWithoutVolunteersInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutVolunteersInput, EventUncheckedUpdateWithoutVolunteersInput>
  }

  export type EventUpdateManyWithWhereWithoutVolunteersInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutVolunteersInput>
  }

  export type EventUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEmployeesInput, EventUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EventCreateWithoutEmployeesInput, EventUncheckedCreateWithoutEmployeesInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEmployeesInput, EventUncheckedUpdateWithoutEmployeesInput>
  }

  export type EventUpdateManyWithWhereWithoutEmployeesInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type UserCreateWithoutVolunteerApplicationInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutVolunteerApplicationInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerAssignments?: VolunteerAssignmentUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutVolunteerApplicationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerApplicationInput, UserUncheckedCreateWithoutVolunteerApplicationInput>
  }

  export type UserUpsertWithoutVolunteerApplicationInput = {
    update: XOR<UserUpdateWithoutVolunteerApplicationInput, UserUncheckedUpdateWithoutVolunteerApplicationInput>
    create: XOR<UserCreateWithoutVolunteerApplicationInput, UserUncheckedCreateWithoutVolunteerApplicationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerApplicationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerApplicationInput, UserUncheckedUpdateWithoutVolunteerApplicationInput>
  }

  export type UserUpdateWithoutVolunteerApplicationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type EventCreateWithoutVolunteerAssignmentsInput = {
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    volunteers?: UserCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackCreateNestedOneWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVolunteerAssignmentsInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
    createdById: number
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    volunteers?: UserUncheckedCreateNestedManyWithoutVolunteerInEventsInput
    employees?: UserUncheckedCreateNestedManyWithoutEmployeeInEventsInput
    thematics?: ThematicUncheckedCreateNestedManyWithoutEventsInput
    mediaFeedback?: MediaFeedbackUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVolunteerAssignmentsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVolunteerAssignmentsInput, EventUncheckedCreateWithoutVolunteerAssignmentsInput>
  }

  export type UserCreateWithoutVolunteerAssignmentsInput = {
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    resources?: ResourceCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialCreateNestedManyWithoutCreatedByInput
    donations?: DonationCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventCreateNestedManyWithoutEmployeesInput
  }

  export type UserUncheckedCreateWithoutVolunteerAssignmentsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password?: string | null
    status?: $Enums.UserStatus | null
    isNewsletterSubscriber?: boolean
    createdAt?: Date | string
    volunteerApplication?: VolunteerApplicationUncheckedCreateNestedOneWithoutUserInput
    interventionProposal?: InterventionProposalUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    resources?: ResourceUncheckedCreateNestedManyWithoutCreatedByInput
    testimonials?: TestimonialUncheckedCreateNestedManyWithoutCreatedByInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    volunteerInEvents?: EventUncheckedCreateNestedManyWithoutVolunteersInput
    employeeInEvents?: EventUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type UserCreateOrConnectWithoutVolunteerAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVolunteerAssignmentsInput, UserUncheckedCreateWithoutVolunteerAssignmentsInput>
  }

  export type EventUpsertWithoutVolunteerAssignmentsInput = {
    update: XOR<EventUpdateWithoutVolunteerAssignmentsInput, EventUncheckedUpdateWithoutVolunteerAssignmentsInput>
    create: XOR<EventCreateWithoutVolunteerAssignmentsInput, EventUncheckedCreateWithoutVolunteerAssignmentsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVolunteerAssignmentsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVolunteerAssignmentsInput, EventUncheckedUpdateWithoutVolunteerAssignmentsInput>
  }

  export type EventUpdateWithoutVolunteerAssignmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVolunteerAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type UserUpsertWithoutVolunteerAssignmentsInput = {
    update: XOR<UserUpdateWithoutVolunteerAssignmentsInput, UserUncheckedUpdateWithoutVolunteerAssignmentsInput>
    create: XOR<UserCreateWithoutVolunteerAssignmentsInput, UserUncheckedCreateWithoutVolunteerAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVolunteerAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVolunteerAssignmentsInput, UserUncheckedUpdateWithoutVolunteerAssignmentsInput>
  }

  export type UserUpdateWithoutVolunteerAssignmentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type VolunteerAssignmentCreateManyEventInput = {
    id?: number
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    userId: number
  }

  export type RegistrationCreateManyEventInput = {
    id?: number
    createdAt?: Date | string
    userId: number
  }

  export type VolunteerAssignmentUpdateWithoutEventInput = {
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVolunteerAssignmentsNestedInput
  }

  export type VolunteerAssignmentUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerAssignmentUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutVolunteerInEventsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    employeeInEvents?: EventUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateWithoutVolunteerInEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    employeeInEvents?: EventUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type UserUncheckedUpdateManyWithoutVolunteerInEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutEmployeeInEventsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUpdateManyWithoutVolunteersNestedInput
  }

  export type UserUncheckedUpdateWithoutEmployeeInEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerApplication?: VolunteerApplicationUncheckedUpdateOneWithoutUserNestedInput
    interventionProposal?: InterventionProposalUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    resources?: ResourceUncheckedUpdateManyWithoutCreatedByNestedInput
    testimonials?: TestimonialUncheckedUpdateManyWithoutCreatedByNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutUserNestedInput
    volunteerInEvents?: EventUncheckedUpdateManyWithoutVolunteersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEmployeeInEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus | null
    isNewsletterSubscriber?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThematicUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThematicUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ThematicUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventUpdateWithoutThematicsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutThematicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutThematicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    eventId: number
  }

  export type EventCreateManyCreatedByInput = {
    id?: number
    title: string
    description: string
    date: Date | string
    location: string
    createdAt?: Date | string
  }

  export type ResourceCreateManyCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    type: $Enums.ResourceType
    linkOrFile: string
    createdAt?: Date | string
  }

  export type TestimonialCreateManyCreatedByInput = {
    id?: number
    content: string
    authorName: string
    createdAt?: Date | string
  }

  export type DonationCreateManyUserInput = {
    id?: number
    amount: number
    date?: Date | string
    email: string
  }

  export type VolunteerAssignmentCreateManyUserInput = {
    id?: number
    role: $Enums.VolunteerRole
    tasks?: string | null
    notes?: string | null
    createdAt?: Date | string
    eventId: number
  }

  export type RegistrationUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    linkOrFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUpdateWithoutCreatedByInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestimonialUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type VolunteerAssignmentUpdateWithoutUserInput = {
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutVolunteerAssignmentsNestedInput
  }

  export type VolunteerAssignmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type VolunteerAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumVolunteerRoleFieldUpdateOperationsInput | $Enums.VolunteerRole
    tasks?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutVolunteersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    employees?: UserUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVolunteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    employees?: UserUncheckedUpdateManyWithoutEmployeeInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutVolunteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
  }

  export type EventUpdateWithoutEmployeesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedEventsNestedInput
    volunteerAssignments?: VolunteerAssignmentUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    volunteers?: UserUpdateManyWithoutVolunteerInEventsNestedInput
    thematics?: ThematicUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    volunteerAssignments?: VolunteerAssignmentUncheckedUpdateManyWithoutEventNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    volunteers?: UserUncheckedUpdateManyWithoutVolunteerInEventsNestedInput
    thematics?: ThematicUncheckedUpdateManyWithoutEventsNestedInput
    mediaFeedback?: MediaFeedbackUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
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