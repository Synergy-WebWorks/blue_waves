import{u as m,j as e}from"./app-CWPsuLI4.js";function h(){const{selected:r,customer:t,search:n}=m(s=>s.app);function o(s,a){const d=new Date(s),c=(new Date(a)-d)/(1e3*60*60*24);return c==0?1:c}const l=o(n.start,n.end),i=r.reduce((s,a)=>s+Number(a.rate),0)*l;return e.jsx("div",{className:"bg-gray-50",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8",children:[e.jsx("h2",{className:"sr-only",children:"Checkout"}),e.jsxs("form",{className:"lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-medium text-cyan-600",children:"Booking Order summary"}),e.jsxs("div",{className:"mt-4 rounded-lg border border-gray-200 bg-white shadow-xs",children:[e.jsx("h3",{className:"sr-only",children:"Items in your cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:r.map(s=>{var a;return e.jsxs("li",{className:"flex px-4 py-6 sm:px-6",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{alt:s.imageAlt,src:(a=s==null?void 0:s.uploads[0])==null?void 0:a.file,className:"w-20 rounded-md"})}),e.jsxs("div",{className:"ml-6 flex flex-1 flex-col",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h4",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})}),e.jsxs("div",{className:"flex gap-3 flex-col",children:["Min Capacity:",s.min_capacity]}),e.jsxs("div",{children:["Max Capacity:",s.max_capacity]}),e.jsx("div",{children:s.description})]}),e.jsx("div",{className:"ml-4 flow-root shrink-0"})]}),e.jsx("div",{className:"flex flex-1 items-end justify-end pt-2",children:e.jsxs("p",{className:"mt-1 text-sm font-medium text-gray-900",children:["₱"," ",parseInt(s.rate).toFixed(2)]})})]})]},s.id)})}),e.jsxs("dl",{className:"space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("dt",{className:"text-sm",children:[" ","Subtotal: ",i.toFixed(2)/l," x ",l]}),e.jsxs("dd",{className:"text-sm font-medium text-gray-900",children:["₱",i.toFixed(2)]})]}),e.jsx("div",{className:"flex items-center justify-between p-2 border-b border-gray-300",children:e.jsx("dt",{className:"text-sm",children:"Entrance Fee"})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("dt",{className:"text-sm",children:[" ","Adults: 20 x ",n.adults]}),e.jsxs("dd",{className:"text-sm font-medium text-gray-900",children:["₱",t.adults.toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("dt",{className:"text-sm",children:[" ","Children: 20 x ",n.children]}),e.jsxs("dd",{className:"text-sm font-medium text-gray-900",children:["₱",t.children.toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-6",children:[e.jsx("dt",{className:"text-base font-medium",children:"Total"}),e.jsxs("dd",{className:"text-base font-medium text-gray-900",children:["₱"," ",(parseInt(i)+t.children+t.adults).toFixed(2)]})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-6",children:[e.jsxs("dt",{className:"text-base font-medium",children:["Downpayment"," ",e.jsx("span",{className:"text-red-500",children:"*"}),e.jsx("p",{className:"text-xs text-gray-500 italic",children:"50% of Total Billed Amount"})]}),e.jsxs("dd",{className:"text-base font-medium text-gray-900",children:["₱",((parseInt(i)+t.children+t.adults)/2).toFixed(2)]})]})]})]})]}),e.jsx("div",{className:"mt-10 lg:mt-0",children:e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("label",{htmlFor:"contact_content",className:"block text-lg font-medium text-cyan-600",children:"Terms & Condition"}),e.jsx("textarea",{readOnly:!0,id:"contact_content",name:"contact_content",className:"mt-2 w-full min-h-[650px] border-none bg-white/5 px-3 py-2 text-base text-gray-600 resize-none",value:`
Welcome to Blue Waves Resort! To ensure a pleasant and hassle-free stay, we kindly ask all guests to review and adhere to our Terms and Conditions.

1. Booking & Cancellation Policies
A valid government-issued ID and full payment are required to confirm your booking.
Cancellations made 7 days or more before check-in will receive a full refund.
Cancellations made within 3-6 days before check-in will incur a 50% charge.
Cancellations made within 48 hours of check-in or no-shows are non-refundable.
Date changes are subject to availability and may incur additional charges.

2. Check-in & Check-out Times
Check-in time: 2:00 PM onwards. Early check-in is subject to availability.
Check-out time: 12:00 PM. Late check-out beyond 1 hour may incur additional charges.
Guests must return keycards at check-out to avoid a replacement fee.

3. Guest Responsibilities
Guests must comply with all resort rules and regulations.
Noise levels should be kept at a minimum, especially after 10:00 PM.
Guests are responsible for any damage to resort property and may be charged accordingly.
Smoking is only permitted in designated areas. A cleaning fee applies for smoking inside rooms.

4. Resort Facilities & Services
Swimming pools, fitness centers, and other amenities are available during operating hours.
Proper swimwear is required in pool areas.
Outside food and beverages may not be allowed in certain areas of the resort.
Guests must follow safety instructions when using resort facilities.

5. Liability & Safety
The resort is not liable for lost, stolen, or damaged personal belongings. Guests are advised to use in-room safes.
The resort is not responsible for injuries due to misuse of facilities or failure to follow safety rules.
In case of emergencies, please contact the front desk or resort security immediately.

6. General Policies
The resort reserves the right to refuse service to any guest who violates these terms.
Any disputes arising from the stay will be handled according to local laws.
By confirming your booking and staying at Blue Waves Resort, you agree to abide by these Terms and Conditions.

                                                    `}),e.jsx("div",{className:"mt-6 flex",children:e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{required:!0,type:"checkbox",className:"w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"}),e.jsxs("span",{className:"text-gray-700",children:["By proceeding, you agree to the"," ",e.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"Terms and Conditions"})," ","of Blue Waves Resort."]})]})})]})})]})]})})}export{h as default};
