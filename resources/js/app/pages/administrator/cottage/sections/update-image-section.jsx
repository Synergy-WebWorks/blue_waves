import { Image } from 'antd';
import React from 'react';

export default function UpdateImageSection({ data }) {

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {data?.uploads?.filter(image => image => image.activity_id === data?.id).length > 0 ? (
                    data?.uploads
                        .filter(image => image => image.activity_id === data?.id)
                        .map((image, index) => (
                            <div key={index} className="cursor-pointer">
                                <Image
                                    alt="Selected Image"
                                    src={image.file}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        ))) : (
                    <div className="col-span-3 text-center text-white">
                        No image available
                    </div>
                )}
            </div>
        </div>
    );
}
