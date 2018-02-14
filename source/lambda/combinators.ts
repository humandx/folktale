//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

// Common combinators.

/**
 * The identity combinator -- returns is argument unchanged.
 *
 * @stable
 */
export function identity<A>(value: A): A {
  return value;
}

/**
 * The constant combinator -- returns its first argument unchanged.
 *
 * @stable
 */
export function constant<A, B>(value: A) {
  return (_: B) => value;
}
