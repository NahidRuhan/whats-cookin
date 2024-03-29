
const Banner = () => {
    return (
            <div className="banner flex flex-col gap-5 justify-center items-center rounded-3xl">
                <h1 className="text-5xl w-[800px] text-center">Discover an exceptional cooking class tailored for you!</h1>
                <p className="w-[850px] text-center">Embark on a culinary journey like no other with our personalized cooking class! Whether you&apos;re a beginner or seasoned chef, explore the art of gastronomy tailored to your tastes and skill level.</p>
                <div className='flex gap-4 justify-center'>
            <button className='btn bg-[#0BE58A] text-black rounded-full border-none outline-none w-[176px]'>Explore Now</button>
            <button className='btn bg-transparent font-bold w-[176px] rounded-full border-solid outline-none text-white'>Our Feedback</button>
          </div>

            </div>
    );
};

export default Banner;