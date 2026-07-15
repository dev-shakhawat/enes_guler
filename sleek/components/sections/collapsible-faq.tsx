import Accordion from "../common/accordion";
import Container from "../common/container";

 

export default function CollapsibleFaq({}: {}) {
  return (
    <section className="py-20 ">
        <Container>

            <h2 className="font-poppins text-4xl font-medium text-center mb-10   ">
                Questions check here
            </h2>

            <div className="px-50">
                {faqItems.map((q,i)=> (
                    <Accordion title={q.question} key={i}> 
                        <p className="text-muted-foreground">{q.answer}</p>
                    </Accordion>
                ))}


            </div>


        </Container> 
    </section>
  )
}


const faqItems : { question: string; answer: string }[] = [
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 5-7 business days within the United States. For international orders, shipping can take 10-15 business days, depending on the destination and customs processing times. You will receive a tracking number once your order has shipped so you can monitor its progress."
  },
  {
    question: "Does my piece come in any packaging?",
    answer: "Yes, all our skincare products come in protective and aesthetically pleasing packaging to ensure they arrive in perfect condition. Each product is securely wrapped, and we use eco-friendly materials whenever possible. Additionally, many of our products come in recyclable containers to support sustainability."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we do ship internationally! We offer worldwide shipping to ensure customers around the globe can enjoy our skincare products. Please note that shipping times and costs may vary depending on the destination country. International customers may also be subject to customs fees or import duties imposed by their country's customs authorities."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods to make your shopping experience convenient. These include credit cards (Visa, Mastercard, American Express), PayPal, and, in some regions, alternative payment methods such as Apple Pay or Google Pay. Rest assured, your payment information is secure and protected during the checkout process."
  },
]