import { Dict } from "../types";

//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

/**
 * Converts an object to an array of key/value pairs.
 *
 * Assumes that the object is an homogeneous set of key/value pairs.
 *
 * @param[object]: The object to convert
 *
 * @stable
 * @complexity["O(n)"]: `n` is the number of slots in the object.
 */
export function toPairs<A>(object: Dict<A>): [string, A][] {
  return Object.entries(object);
}

/**
 * Returns an array of all values in the object.
 *
 * Assumes that the object is an homogeneous set of key/value pairs.
 *
 * @param[object]: The object to convert.
 *
 * @stable
 * @complexity["O(n)"]: `n` is the number of slots in the object.
 */
export function values<A>(object: Dict<A>): A[] {
  return Object.values(object);
}

/**
 * Returns an array of all (own) keys in the object.
 *
 * @param[object]: The object to convert.
 *
 * @stable
 * @complexity["O(n)"]: `n` is the number of slots in the object.
 */
export function keys<A>(object: Dict<A>): string[] {
  return Object.keys(object);
}

/**
 * Converts a list of key/value pairs into an object containing those pairs.
 *
 * Assumes that the pairs are homogeneous in their value type.
 *
 * @param[pairs]: A list of key/value pairs that will make up the object.
 *
 * @stable
 * @complexity["O(n)"]: `n` is the number of pairs.
 */
export function fromPairs<A>(pairs: [string, A][]): Dict<A> {
  const result: Dict<A> = {};
  for (const [key, value] of pairs) {
    result[key] = value;
  }
  return result;
}
