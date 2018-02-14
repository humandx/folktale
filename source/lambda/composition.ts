//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

// Function composition.

import { F1 } from "../types";

/**
 * Composes two functions, right to left.
 *
 * @stable
 */
export function compose<A, B, C>(f: F1<B, C>, g: F1<A, B>): F1<A, C> {
  return value => f(g(value));
}

/**
 * Composes three functions, right to left.
 *
 * @stable
 */
export function compose3<A, B, C, D>(
  f: F1<C, D>,
  g: F1<B, C>,
  h: F1<A, B>
): F1<A, D> {
  return compose(f, compose(g, h));
}

/**
 * Composes four functions, right to left.
 *
 * @stable
 */
export function compose4<A, B, C, D, E>(
  f: F1<D, E>,
  g: F1<C, D>,
  h: F1<B, C>,
  i: F1<A, B>
): F1<A, E> {
  return compose(f, compose(g, compose(h, i)));
}
