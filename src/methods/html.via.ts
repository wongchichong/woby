
/* IMPORT */

import htm from 'htm'
import createElement from '../methods/create_element.via'
import { assign } from '../utils/lang'
import type { Child, ComponentsMap, Element, Props } from '../types'

/* HELPERS */

const registry: ComponentsMap = {}
const h = (type: string, props?: Props | null, ...children: Child[]): Element => createElement((registry[type] || type) as any, props, ...children)
const register = (components: ComponentsMap): void => void assign(registry, components)

/* MAIN */

const html = assign(htm.bind(h), { register })

/* EXPORT */

export default html
