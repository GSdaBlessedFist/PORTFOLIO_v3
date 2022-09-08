import Image from 'next/image';
import Microblog from "../components/Microblog";

export default function Home() {
  return (<>
    <section className="container px-6 mx-auto h-screen border border-4 flex flex-col justify-center items-center" id="landingPage">
      <table className="table table-auto border">
        <tbody>
          <tr id="title-row">
            <td className="pb-5  text-center">
              <div className="text-4xl font-bold">Jason Zamora's <span className="text-4xl">portfolio</span></div>
            </td>
          </tr>
          <tr id="subTitle-row">
            <td className="pb-5 text-center text-white">
              <p className="text-white">web developer | digital marketer </p>
            </td>
          </tr>
          <tr id="microBlog-row">
            <td className="py-2 text-center border border-3">
              <Microblog/>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <WebDev/>
  </>)
}

const WebDev = ()=>{
  return(<>
    <section className="container px-6 mx-auto h-screen border border-4 flex flex-col justify-center items-center" id="webDev">
      <div className="cart">hello</div>
    </section>
  </>)
}