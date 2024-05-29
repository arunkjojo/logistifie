'use client'
import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) => {
    useEffect(() => console.error(error), [error]);
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.digest}</p>

            {/* Attempt to recover by trying to re-render */}
            <button onClick={() => reset()} >
                Try again
            </button>
        </div>
    )
}
export default Error