import { BreadcrumbSection } from "@/components/sections/breadcrumb"
import CollapsibleFaq from "@/components/sections/collapsible-faq"
import FeatureList from "@/components/sections/feature-list"
import ImageWithText from "@/components/sections/image-text"
import MultiColumn from "@/components/sections/munti-colimn"
import ProductBanner from "@/components/sections/product-banner"
import RichText from "@/components/sections/rich-text"
import ScrollingPromotion from "@/components/sections/scrolling-promotion"
import Testimonial from "@/components/sections/testimonial"
import VideoWithText from "@/components/sections/video-text"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main  className="">
       
       {/* bread crumb  */}
       <BreadcrumbSection/>

       {/* product banner */}
       <ProductBanner/>

       {/* testimonial */}
       <Testimonial/>

       {/* feature list */}
       {/* <FeatureList/> */}

       {/* rich text */}
       <RichText/>

       {/* image with text */}
       <ImageWithText/>

       {/* multi column */}
       <MultiColumn/>

       {/* collapsible faq */}
       <CollapsibleFaq/>

       {/* scrolling promotion */}
       <ScrollingPromotion/>

       {/* video with text */}
       <VideoWithText/>

       
    </main>
  )
}
