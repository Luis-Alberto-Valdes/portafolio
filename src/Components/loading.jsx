import './Loading.css'

function LoadingSkeleton () {
  return (
    <div className='skeleton-container'>
      <div className='loading-skeleton'>
        <div className='skeleton-pulse' />
      </div>
    </div>
  )
}

export default LoadingSkeleton
