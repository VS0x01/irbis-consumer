export function layout(layout = 'default', children, path = '/') {
    return {
        path,
        component: () => import(/* webpackChunkName: "layout-[request]" */ `@/layouts/${layout}/Index`),
        children,
    }
}

export function route(name, path = '/', component) {
    component = Object(component) === component
        ? component
        : { default: name.replace(' ', '') }

    const components = {}

    for (const [key, value] of Object.entries(component)) {
        components[key] = () => import(/* webpackChunkName: "views-[request]" */ `@/views/${value}`)
    }

    return {
        name,
        path,
        components,
    }
}
