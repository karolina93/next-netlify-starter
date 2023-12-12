import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function HelloWorld() {
  return <body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
  <p id="demo"></p>

  <script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
  </body>
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
