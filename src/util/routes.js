import { kebabCase } from 'lodash'

export function layout(layout = 'default', children, path = '') {
  const dir = kebabCase(layout)

  return {
    path,
    component: () =>
      import(
        /* webpackChunkName: "layout-[request]" */ `@/layouts/${dir}/Index`
      ),
    children,
    redirect: children[0].path
  }
}

export function route(name, path = '', component) {
  component =
    Object(component) === component
      ? component
      : { default: name.replace(' ', '') }

  const components = {}

  for (const [key, value] of Object.entries(component)) {
    components[key] = () =>
      import(/* webpackChunkName: "views-[request]" */ `@/views/${value}`)
  }

  return {
    path,
    name,
    components
  }
}
