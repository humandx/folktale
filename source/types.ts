//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Licensed under MIT. See LICENCE for full licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

export type F0<R> = () => R;
export type F1<A1, R> = (_: A1) => R;
export type F2<A1, A2, R> = (a: A1, b: A2) => R;
export type F3<A1, A2, A3, R> = (a: A1, b: A2, c: A3) => R;

export type Dict<A> = { [key: string]: A };
