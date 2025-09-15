"use client";

export default function Alloyal({ token }: any) {
  return (
    <div className="w-full min-h-screen h-auto">
      <iframe src={`https://d2h8ge3gfrwdyi.cloudfront.net/login?token=${token}`} className="w-full min-h-screen h-auto" />
    </div>
  );
}