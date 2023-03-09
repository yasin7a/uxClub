import Head from "next/head";
import React from "react";
import BannerOfferSection from "../../components/common/BannerOfferSection";
import BannerSection from "../../components/common/BannerSection";
import CourseList from "../../components/common/CourseList";
import CoursePreview from "../../components/common/CoursePreview";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import MembershipSection from "../../components/common/MembershipSection";
import ProfileSection from "../../components/common/ProfileSection";
import SubjectSection from "../../components/common/SubjectSection";

const text = () => {
  return (
    <>
      <Head>
        <title>UX Club | Home</title>
      </Head>
      <Header test/>
      <BannerSection
        title={"We <Offer Career> Not a Course"}
        description={"শিখুন দেশের একমাত্র ডিজাইন সেন্ট্রিক প্লাটফর্মে"}
      />
      <BannerSection
        title={"Design <Inspiration> from us"}
        description={"আপনাকে অনুপ্রাণিত করতে কিছু ডিজাইন আইডিয়া"}
      />
      <ProfileSection />
      <CoursePreview />
      <BannerOfferSection />
      <CourseList />
      <CourseList isTitle chnagehover />
      <SubjectSection />
      <MembershipSection />
      <Footer />
    </>
  );
};

export default text;
