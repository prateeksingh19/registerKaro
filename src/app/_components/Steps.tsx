import { FILE , } from "../utils" ; 

export const Steps = ()=>{
    return (
        <div className="w-full px-[70px] bg-[#FFA229] h-[156px] mt-20 flex items-center justify-between ">
            <div className="flex h-fit gap-x-2">
                <div className="bg-[#EB5757] rounded-full p-2">{FILE}</div>
                <div className="mt-1"> Fill up Application Form</div>
            </div>
            <div className="flex h-fit gap-x-2">
                <div className="bg-[#27AE60] rounded-full p-2">{FILE}</div>
                <div className="mt-1"> Make Online Payment</div>
            </div>
            <div className="flex h-fit gap-x-2">
                <div className="bg-[#F2994A] rounded-full p-2">{FILE}</div>
                <div className="mt-1"> Fill up Application Form</div>
            </div>
            <div className="flex h-fit gap-x-2">
                <div className="bg-[#828282] rounded-full p-2">{FILE}</div>
                <div className="mt-1"> Fill up Application Form</div>
            </div>
        </div>
    )
}