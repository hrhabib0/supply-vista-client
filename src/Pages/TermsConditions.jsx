import React, { useEffect } from 'react';

const TermsConditions = () => {
     // dynamic title
        useEffect(() => {
            document.title = "Terms & Conditions | SupplyVista";
        }, [])
    return (
        <div className='max-w-7xl mx-auto px-5 py-10'>
            <h1 className='text-3xl font-bold text-center mb-6'>ব্যবহার শর্তাবলী (Terms and Conditions)</h1>
            <p className='mb-4'>
                <strong>SupplyVista</strong> ব্যবহার করে আপনি নিচের শর্তাবলীতে সম্মতি দিচ্ছেন।
            </p>
            <ul className='list-disc pl-5 space-y-3'>
                <li>
                    <strong>ব্যবহারকারীর দায়িত্ব: </strong> আপনি অবশ্যই সঠিক তথ্য প্রদান করবেন এবং কোনোরূপ অপমানজনক বা ক্ষতিকর কন্টেন্ট পোস্ট করবেন না।
                </li>
                <li>
                    <strong>ইভেন্টের তথ্য: </strong> সব ইভেন্টের তথ্য এডমিন ও আয়োজকদের মাধ্যমে যুক্ত করা হয়। এই তথ্যের সঠিকতা আমরা নিশ্চিত করতে পারি না।
                </li>
                <li>
                    <strong>অ্যাকাউন্ট নিরাপত্তা: </strong> লগইন তথ্য গোপন রাখা ব্যবহারকারীর দায়িত্ব। কারো দ্বারা অননুমোদিত ব্যবহার হলে আমাদের জানান।
                </li>
                <li>
                    <strong>নিষিদ্ধ কাজ: </strong> সাইট হ্যাক করা, স্প্যাম করা বা অবৈধ কার্যকলাপ সম্পূর্ণ নিষিদ্ধ।
                </li>
                <li>
                    <strong>স্বত্বাধিকার: </strong> এই সাইটের সব কন্টেন্ট ও ডিজাইন EventGallery-র মালিকানাধীন। অনুমতি ছাড়া কোনো কিছু কপি বা ব্যবহার করা যাবে না।
                </li>
                <li>
                    <strong>পরিবর্তন: </strong> শর্তাবলী যেকোনো সময় পরিবর্তন হতে পারে। পরিবর্তনের পরেও সাইট ব্যবহারে আপনি পরিবর্তিত শর্তাবলীতে সম্মত হচ্ছেন।
                </li>
            </ul>
            <p className='mt-6'>
                এই ওয়েবসাইট ব্যবহার করে আপনি উপরের সব শর্তাবলীতে সম্মতি দিচ্ছেন বলে বিবেচিত হবে।
            </p>
        </div>
    );
};

export default TermsConditions;