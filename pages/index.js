import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'
import Enter from './enter'

export default function Home() {
  return (
    <div >
      <Loader show />
      <Enter/>
    </div>
  )
}
