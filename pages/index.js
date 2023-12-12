import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function HelloWorld() {
  return  <!DOCTYPE html>
  <html>
  <body>
  
  <h1>The script element</h1>
  
  <p id="demo"></p>
  
  <script>
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
  </script> 
  
  </body>
  </html>
  
}

// export default function Home() {
//   return (
    
//     <div className="container">
//       <Head>
//         <title>Next.js Starter!</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Header title="Welcome to my app!" />
//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>
//         <p className="description">
//           TEST
//         </p>
//       </main>

//       <Footer />
//     </div>
//   )
// }
