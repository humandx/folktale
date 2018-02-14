//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

import { Dict } from "../types";

/**
 * Transforms the values of an object. Assumes that objects are plain
 * key/value pairs, and values are of homogeneous types.
 *
 * @param[object]: The object to transform.
 * @param[transformation]: A way of transforming values in this object.
 *
 * @stable
 * @complexity["O(n)"]: `n` is the number of slots in the object.
 */
export function mapValues<A, B>(
  object: Dict<A>,
  transformation: (value: A) => B
): Dict<B> {
  const result: Dict<B> = {};
  for (const [key, value] of Object.entries(object)) {
    result[key] = transformation(value);
  }
  return result;
}
