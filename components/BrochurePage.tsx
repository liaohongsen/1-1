
import React, { useEffect } from 'react';
import { ServiceContent } from '../types';

interface BrochurePageProps {
  content: ServiceContent;
  isClinical: boolean;
}

const BrochurePage: React.FC<BrochurePageProps> = ({ content, isClinical }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-12 shadow-inner">
      {/* Mobile Header Banner */}
      <div className="orange-gradient text-white pt-10 pb-16 px-6 relative rounded-b-[40px] shadow-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight leading-tight">{content.title}</h1>
            <p className="text-lg font-light opacity-90">{content.subtitle}</p>
          </div>
        </div>
        
        {/* Floating Tag */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-orange-yushi px-6 py-2 rounded-full shadow-md text-sm font-bold border border-orange-100 whitespace-nowrap">
          2026 医学留学领航系列
        </div>
      </div>

      <div className="px-6 py-12 space-y-10 pb-2">
        {/* 1. Service Description */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center mb-4">
            <div className="w-1.5 h-6 bg-orange-yushi rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-800">服务背景与内容</h3>
          </div>
          <div className="bg-orange-50/40 p-5 rounded-2xl border-l-4 border-orange-yushi leading-relaxed text-gray-700 text-[15px]">
            {content.description}
          </div>
        </section>

        {/* 2. What you get */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="flex items-center mb-4">
            <div className="w-1.5 h-6 bg-orange-yushi rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-800">你将得到</h3>
          </div>
          <p className="mb-6 text-sm text-gray-500 italic font-medium leading-relaxed">{content.whatYouGet.title}</p>
          <div className="space-y-5">
            {content.whatYouGet.items.map((item) => (
              <div key={item.id} className="bg-white border border-orange-100/50 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-baseline mb-2">
                  <span className="text-orange-yushi font-black text-xl mr-3 opacity-20 tabular-nums shrink-0">{item.id}</span>
                  <h4 className="font-bold text-gray-800 text-[16px] leading-snug">{item.label}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-8">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-orange-50/60 rounded-2xl border border-dashed border-orange-200">
             <div className="flex items-start">
               <i className="fa-solid fa-thumbtack text-orange-yushi mt-1 mr-3 shrink-0"></i>
               <p className="text-[13px] text-orange-900 leading-relaxed font-medium">
                 {isClinical 
                  ? "上述所有结论，将形成一份《临床医学路径诊断书》，作为家庭后续所有决策的参考依据。"
                  : "上述所有结论，将形成一份《医学路径诊断书》，作为家庭后续选课、升学及长期规划的重要参考依据。"}
               </p>
             </div>
          </div>
        </section>

        {/* 3. Suitable Families */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="flex items-center mb-6">
            <div className="w-1.5 h-6 bg-orange-yushi rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-800">适合哪些家庭</h3>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-green-100 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 text-green-500 opacity-5 transform translate-x-4 -translate-y-4">
                 <i className="fa-solid fa-check-double text-9xl"></i>
               </div>
               <h4 className="text-md font-bold text-green-700 mb-4 flex items-center">
                 <i className="fa-solid fa-circle-check mr-2"></i> 适合的家庭
               </h4>
               <ul className="space-y-4 text-[14px] text-gray-700">
                 {content.suitableFamilies.suitable.map((s, i) => (
                   <li key={i} className="flex items-start">
                     <span className="text-green-500 mr-2 mt-0.5">•</span> {s}
                   </li>
                 ))}
                 <li className="flex flex-col gap-2">
                   <div className="flex items-start">
                     <span className="text-green-500 mr-2 mt-0.5">•</span> <span>家长正在纠结：</span>
                   </div>
                   <div className="flex flex-wrap gap-2 pl-4">
                      {content.suitableFamilies.worries.map((w, i) => (
                        <span key={i} className="bg-green-50 px-3 py-1 rounded-full text-xs text-green-700 font-medium">◦ {w}</span>
                      ))}
                   </div>
                 </li>
                 <li className="flex flex-col gap-2">
                   <div className="flex items-start">
                     <span className="text-green-500 mr-2 mt-0.5">•</span> <span>希望在关键节点：</span>
                   </div>
                   <div className="flex flex-wrap gap-2 pl-4">
                      {content.suitableFamilies.expectations.map((e, i) => (
                        <span key={i} className="bg-green-50 px-3 py-1 rounded-full text-xs text-green-700 font-medium">◦ {e}</span>
                      ))}
                   </div>
                 </li>
               </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-red-50 shadow-sm relative overflow-hidden">
               <h4 className="text-md font-bold text-red-600 mb-4 flex items-center">
                 <i className="fa-solid fa-circle-xmark mr-2"></i> 不适合的家庭
               </h4>
               <ul className="space-y-4 text-[14px] text-gray-700">
                 {content.suitableFamilies.unsuitable.map((u, i) => (
                   <li key={i} className="flex items-start">
                     <span className="text-red-400 mr-2 mt-0.5">•</span> {u}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </section>

        {/* 4. Process */}
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
          <div className="flex items-center mb-6">
            <div className="w-1.5 h-6 bg-orange-yushi rounded-full mr-3"></div>
            <h3 className="text-xl font-bold text-gray-800">服务流程</h3>
          </div>
          <div className="relative pl-10 space-y-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-orange-100">
             {content.process.map((step, i) => (
               <div key={i} className="relative">
                 <div className="absolute -left-[30px] top-1.5 w-[11px] h-[11px] rounded-full bg-orange-yushi shadow-[0_0_0_4px_rgba(241,137,45,0.1)] z-10"></div>
                 <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100 flex items-center justify-between">
                    <span className="text-gray-800 text-sm font-semibold">{step}</span>
                    <span className="text-[10px] font-black text-orange-yushi/20">0{i+1}</span>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* 5. Pricing Footer */}
        <section className="bg-orange-yushi p-10 rounded-[40px] text-white shadow-2xl flex flex-col items-center text-center space-y-5 animate-in fade-in zoom-in duration-500 delay-400">
           <h3 className="text-2xl font-bold">服务价格</h3>
           <div className="text-6xl font-black tabular-nums tracking-tighter">{content.price}</div>
           <p className="text-[14px] opacity-90 max-w-[200px] leading-relaxed">一次深度诊断，为孩子的医学梦想搭建确定性路径</p>
        </section>
      </div>

      {/* Final Refined Footer Card - Matching design precisely */}
      <footer className="mt-4 mx-auto mb-12 w-[90%] bg-[#fdf1d9] rounded-[36px] p-6 text-center border border-[#f9d8a7]/50 shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          <h2 className="text-[20px] font-black text-[#e67e22] mb-1 tracking-tight">YUSHI (博睿医智)</h2>
          <div className="text-[11px] text-[#e67e22] font-bold leading-tight mb-5 opacity-90">
            以医学与心理学为核心<br />
            提供覆盖学术成长与职业发展的全程支持
          </div>
          
          <div className="w-full h-[0.5px] bg-[#e67e22]/15 mb-6"></div>
          
          <div className="flex justify-center items-center gap-6 px-1">
             <div className="text-left space-y-1.5">
                <p className="text-[10px] text-[#e67e22] font-black uppercase tracking-wider mb-1.5">联系我们</p>
                <p className="text-[12px] font-black text-[#8a5d3b] tabular-nums whitespace-nowrap">+86 13162611127 (中国)</p>
                <p className="text-[12px] font-black text-[#8a5d3b] tabular-nums whitespace-nowrap">+44 07419735373 (英国)</p>
             </div>
             
             <div className="w-[1.5px] h-12 bg-[#e67e22]/10"></div>
             
             <div className="flex flex-col items-center shrink-0">
                <p className="text-[10px] text-[#e67e22] font-black uppercase tracking-wider mb-1.5">官方微信</p>
                <div className="w-14 h-14 bg-white p-1 rounded-2xl shadow-inner border border-[#e67e22]/5">
                   <img 
                     src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChatReservation" 
                     alt="WeChat QR" 
                     className="w-full h-full object-contain"
                   />
                </div>
             </div>
          </div>
          
          <div className="mt-8 text-[9px] text-[#e67e22]/60 font-black tracking-[0.1em] uppercase">
             © 2026 YUSHI MEDICAL EDUCATION
          </div>
      </footer>
    </div>
  );
};

export default BrochurePage;