/** Fixed decorative backdrop: subtle grid + two soft aurora blooms. */
export function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-aurora bg-aurora--1" />
      <div className="bg-aurora bg-aurora--2" />
    </div>
  )
}
