import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function HelloWorld() {
  return <html>
  <body>
  
  <h2>Demo JavaScript in Body</h2>
  
  <p id="demo">A Paragraph</p>
  
  <button type="button" onclick="myFunction()">Try it</button>
  
  <script>
  function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
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
