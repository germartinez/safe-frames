import { getFrameMetadata } from '@coinbase/onchainkit'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/<something>`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`
})

export const metadata: Metadata = {
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/<something>`
    ]
  },
  other: {
    ...frameMetadata
  }
}

export default function Page() {
  return(
    <>
      <h1>Hello world!</h1>
    </>
  )
}
