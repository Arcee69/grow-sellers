import React from 'react'
import CloseIcon from "../../../../assets/svg/closeIcon.svg"

const Terms = ({ handleClose }) => {
  return (
    <div className='bg-[#fff] w-[600px] h-[500px] flex flex-col gap-4 overflow-y-scroll  mt-[50px] rounded-lg p-4'>
        <div className='flex items-center justify-between'>
            <p className='font-medium font-Hat text-[#3F434A]  text-[24px] text-[#000]'>Terms and Conditions</p>
            <button className="flex justify-center items-center" onClick={handleClose}>
                <img src={CloseIcon} alt='close' />
            </button>
        </div>
        <div className='mt-[15px] flex flex-col gap-5'>
            <div className="flex flex-col gap-3">
                <p className='font-inter text-[#000] text-base font-semibold'>1. Introduction</p>
                <p className='font-inter text-[#000] px-6 text-sm'>
                    Welcome to Grow Africa, an e-commerce platform dedicated to promoting and selling products made in 
                    Africa. By registering and using our platform as a merchant, you agree to comply with the following 
                    terms and conditions.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <p className='font-inter text-[#000] text-base font-semibold'>2. Merchant Eligibility</p>
                <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                    <li>Must be legally registered business entities.</li>
                    <li>Provide accurate and complete business information during registration.</li>
                    <li>Ensure all products listed are made in Africa and comply with local and international regulations.</li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <p className='font-inter text-[#000] text-base font-semibold'>3. Product Listings</p>
                <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                    <li>Ensure all product listings are accurate, complete, and not misleading.</li>
                    <li>Maintain high-quality images and detailed descriptions.</li>
                    <li>Only list products that are available for immediate purchase.</li>
                </ul>
            </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>4. Pricing and Payments</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Set competitive and fair prices for all listed products.</li>
                        <li>Payments will be processed through Grow Africa’s secure payment gateway.</li>
                        <li>Grow Africa will deduct a commission fee from each sale as per the agreed rate.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>5. Order Fulfillment</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Fulfill orders promptly and ensure timely delivery to our warehouse for shipment.</li>
                        <li>Provide accurate information for all inventory headed to our warehouse.</li>
                        <li>Communicate any delays or issues with order fulfillment immediately to the customer and Grow Africa.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>6. Returns and Refunds</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Honor the return and refund policy set by Grow Africa.</li>
                        <li>Process refunds promptly and communicate with customers regarding returns and refunds.</li>
                        <li>Resolve any disputes amicably and in a timely manner.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>7. Compliance with Laws</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Comply with all applicable laws and regulations, including consumer protection, product safety, and intellectual property laws.</li>
                        <li>Do not list prohibited or restricted items as defined by Grow Africa.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>8. Intellectual Property</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Ensure that all product listings and content do not infringe on any third-party intellectual property rights.</li>
                        <li>Grant Grow Africa a non-exclusive, royalty-free license to use, display, and distribute your content on our platform.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>9. Confidentiality</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Ensure that all product listings and content do not infringe on any third-party intellectual property rights.</li>
                        <li>Do not disclose any confidential information to third parties without Grow Africa’s written consent.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>10. Termination</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Grow Africa reserves the right to terminate your merchant account for any violation of these terms and conditions.</li>
                        <li>You may terminate your merchant account by providing written notice to Grow Africa.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>11. Limitation of Liability</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Grow Africa is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.</li>
                        <li>Grow Africa’s liability is limited to the amount of commission fees paid by the merchant in the preceding three months.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>12. Indemnification</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>You agree to indemnify and hold Grow Africa harmless from any claims, losses, damages, or expenses arising from your breach of these terms and conditions or your violation of any law or third-party rights.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>13. Amendments</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>Grow Africa reserves the right to amend these terms and conditions at any time.</li>
                        <li>Any amendments will be communicated to merchants via email or through the platform.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#000] text-base font-semibold'>14. Governing Law</p>
                    <ul className='font-inter list-disc text-[#000] px-6 text-sm'>
                        <li>These terms and conditions are governed by the laws of Nigeria and Africa at large.</li>
                        <li>Any disputes will be resolved in the courts of Nigeria.</li>
                    </ul>
                </div>
            </div>

    </div>
  )
}

export default Terms