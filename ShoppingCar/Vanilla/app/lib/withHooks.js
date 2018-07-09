const isBrowser =
  typeof window === 'object' &&
  typeof document === 'object' &&
  document.nodeType === 9

const noop = () => {}
const didMountTree = []

function rootDidMount(root) {
  didMountTree.reverse().forEach(didMount => {
    didMount(root)
  })
}

const withHooks = ({ didMount = noop, root = false }) => component => data => {
  const html = component(data)

  if (isBrowser) didMountTree.push(didMount)

  if (!root) {
    return html
  }

  return {
    html,
    didMount: isBrowser ? rootDidMount : noop,
  }
}

export default withHooks
