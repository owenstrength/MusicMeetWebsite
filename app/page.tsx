import Image from 'next/image'
import { transform } from 'typescript'
import Mockup from './components/Mockup'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="spacer"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="fade-in.visible text-6xl font-bold text-center">Music Meet</h1>
        <br></br>
        <p className="text-center text-2xl">A place to meet new people and listen to music together</p>
      </div>
      <div className="spacer"></div>

      <div className="first fade-in flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">How it Works</h2>
        <p className="text-center">Music Meet uses your Spotify listening data to find users with similar music tastes.</p>
        <p className="text-center">You can then chose to share your social media profiles and make new friends.</p>
        <p className="text-center">You can also share a playlist that you would like to show to other users.</p>
        <p className="text-center">Music Meet can also create a playlist based on your taste using your top songs and artists and music simliar to that.</p>
      </div>

      <div className="second fade-in flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">Why Music Meet?</h2>
        <p className="text-center">Music Meet is designed to being people together only based on music.</p>
        <p className="text-center">Music Meet is not a dating app, it is a place to make new friends.</p>
        <p className="text-center">Music Meet is not a social media app, it is a place to meet new people.</p>
        <p className="text-center">Music Meet asks for very little personal information to avoid personal baises and focus on allowing our users to meet new people</p>
      </div>

      <div className="testclass fade-in flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">Technical Information</h2>
        <p className="text-center">Music Meet is built using ReactNative using Expo, MongoDB, and Node.js</p>
        <p className="text-center">Music Meet uses the Spotify API to get user data</p>
        <p className="text-center">Music Meet stores 0 sensitive user data in MongoDB</p>
      </div>


      <div className="fourth fade-in flex flex-col items-center justify-center padding-auto height-500">
        <Mockup />
      </div>

      <div className="fifth fade-in flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center">Coming Soon</h2>
        <p className="text-center">Music Meet is still in development and not ready to use.</p>
        <p className="text-center">Eta: December 2023</p>
      </div>
    </main>
  )
}
