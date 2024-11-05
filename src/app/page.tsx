import Image from "next/image";
import pic from "../../public/idea.png"
import { FiMail, FiPhone } from "react-icons/fi";

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'DUSENGE Peggy',
      href: '#',
      position: 'Group representative',
      imageSrc: 'https://i.pinimg.com/564x/f9/09/cb/f909cb561c94235ad18b96d7c94409f6.jpg',
      imageAlt: `Peggy's photo`,
    },
    {
      id: 2,
      name: 'Samuel Chima',
      href: '#',
      position: 'Sub-representative',
      imageSrc: 'https://i.pinimg.com/736x/c2/69/f8/c269f8d60269eedcfd8d93f6540455bf.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 3,
      name: 'Digne Esther',
      href: '#',
      position: 'Researcher',
      imageSrc: 'https://i.pinimg.com/564x/f9/09/cb/f909cb561c94235ad18b96d7c94409f6.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 4,
      name: 'Kingley Diakite',
      href: '#',
      position: 'Content creator',
      imageSrc: 'https://i.pinimg.com/736x/c2/69/f8/c269f8d60269eedcfd8d93f6540455bf.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Flavienne Ihirwe',
      href: '#',
      position: 'Researcher',
      imageSrc: 'https://i.pinimg.com/564x/f9/09/cb/f909cb561c94235ad18b96d7c94409f6.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

  ]
  return (
    <div className='w-full min-h-[100vh] bg-slate-50 text-black'>

      <div className="flex h-[100vh] px-10 bg-[url('../../public/freepik__expand__96022.png')] bg-cover ">
        <div className="w-[50%] h-[100%] flex flex-col justify-center text-center ">
          <p className="text-[95px] font-bold text-[#001446]">Idea factory</p>
          <p className="text-[#D55571] text-[25px] pl-[120px]">Young minds empowering changes</p>
          <p className=" text-[17px] px-10 self-start pt-4 pl-[40px]">Our <span className="font-extrabold">Mission</span> is to empower young people by fostering growth and success through initiatives that spark creativity, inspire innovation, and help reduce unemployment. We are dedicated to equipping young minds with the skills, tools, and opportunities they need to prosper and build a secure future. Join us in creating a world where every young person has the chance to thrive and make a meaningful impact.</p>
        </div>
        <div className="w-[50%] h-[100%]  overflow-hidden object-cover flex align-middle justify-center pt-[50px]">
          <Image alt="logo" src={pic} />
        </div>



      </div>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Our problem statement and solution
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-1">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    OUR PROBLEM
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  In 2024, the National Institute of Statistics of Rwanda (NISR) reported that youth unemployment is at 16.8%. This high number shows how hard it is for young people to find work. The main reasons are a lack of job opportunities and a gap between the skills young people have and what employers need. Many youths are either working in low-paying jobs or don’t have the right skills for the few jobs available. Improving youth employment is now a key goal for policymakers, as it’s essential for Rwanda’s growth and development.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      OUR SOLUTION
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We aim to reduce youth unemployment by creating opportunities within Rwanda’s tourism sector. Through partnerships with local artisans, guides, and businesses, we will open up jobs in cultural tourism, digital content creation, and sales of authentic Rwandan crafts and souvenirs. Our platform will connect young Rwandans with visitors and buyers interested in Rwandan art and personalized travel experiences, allowing local talents to showcase and sell their work. Additionally, by supporting youth entrepreneurship in tourism, *Xplore Rwanda* will empower young people to turn their cultural knowledge and creativity into sustainable businesses, helping to bridge the gap between skills and job market demands.
                  </p>
                </div>
                <div className="relative min-h-[6rem] w-full grow">
                 
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <h2  className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Our team</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 mt-16">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full h-[300px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center  group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 ">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-700">{product.position}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="min-h-[86.7vh] pt-[100px] px-10 bg-[url('../../public/freepik__expand__96022.png')] bg-cover ">
            <div className="my-4" id="Contact">
                <div className="text-center mx-auto mb-8 max-w-[510px]">
                    <h2 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl ">
                        Reach out to US
                    </h2>
                </div>
                <div
                    className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto my-5 max-w-4x bg-transparent backdrop-blur-sm w-[70%] shadow-md rounded-md  rounded-md text-[#333] font-[sans-serif]">
                    <div>
                        <h1 className="text-3xl text-[#001446] font-extrabold">CONTACT US</h1>
                        <p className="text-sm text-[#D55571] mt-3">Have some big idea or brand to develop and need help? Then reach
                            out we'd love to hear about your project and provide help.</p>
                        <div className="mt-12">
                            <h2 className="text-lg font-extrabold">Email</h2>
                            <ul className="mt-3">
                                <li className="flex items-center mb-3">
                                    <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <FiMail/>
                                    </div>
                                    <a target="blank" href="#" className="text-[#000000] text-sm ml-3">
                                        <small className="block">Mail</small>
                                        <strong>ideafactory@gmail.com</strong>
                                    </a>
                                </li>
                                <li className="flex items-center mb-3">
                                    <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <FiPhone/>
                                    </div>
                                    <a target="blank" href="#" className="text-[#000000] text-sm ml-3">
                                        <small className="block">Phone</small>
                                        <strong>+250 778 244 211 </strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <form className="contact-form ml-auto space-y-4" >
                <input type='text' placeholder='Name' id="name"
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000]" />
                <input type='email' placeholder='Email' id="email"
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000]" />
                <input type='text' placeholder='Subject' id="subject"
                    className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#000000]" />
                <textarea placeholder='Message' rows={6} id="text"
                    className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#000000]"></textarea>
                <input type='submit' value="SEND"
                    className="text-white bg-[#000000] hover:bg-white hover:text-black font-semibold rounded-md text-sm px-4 py-2.5 w-full"/>
            </form>
                </div>
                
            </div>


        </div>



    </div>
  );
}
