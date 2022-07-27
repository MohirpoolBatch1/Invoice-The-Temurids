export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

{
  /* 
  Error boundariesdan foydalaish uchun, biron-bir komponentni potensial xatolik keltirib chiqarishi mumkin bo'lgan
  joyini quyidagi misol orqali o'rab olib ishlatish mumkin.
  
  
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    <ComponentThatMayError />
  </ErrorBoundary>, */
}
