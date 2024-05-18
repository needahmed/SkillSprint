import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'


const QuizIntroPage = () => {
  return (
    <>
    <div className='relative isolate'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl'>
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
        />
      </div>
    </div>
    <MaxWidthWrapper className='text-creme mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Discover Your Path in Computer Science
      </h1>
      <p className='mt-5 max-w-prose text-white sm:text-lg'>
        Take this quiz to find out which computer science career best suits your personality. Understand your strengths and how they can guide your career decisions.
      </p>
      <div className='w-full mt-3 bg-[rgba(255,255,255,0.2)] p-4 rounded-lg shadow-lg italic text-white sm:text-lg'>
        "Choosing a career based on your personality not only leads to greater job satisfaction but also to a more fulfilling life." - Dr. Jane Goodall
      </div>
      <Link
        className='inline-flex items-center bg-creme hover:bg-brown-200 text-white font-bold py-2 px-6 rounded-lg mt-5'
        href='/startquiz'>
        Start the Quiz{' '}
        <ArrowRight className='h-5 w-5' />
      </Link>
    </MaxWidthWrapper>
  </>
);
}

export default QuizIntroPage;
