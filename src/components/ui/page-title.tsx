import React from 'react';
import Clock from '../clock';

interface PageTitleProps {
  title: string;
  subtext: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title, subtext}) => {
    return (
        <div className="flex items-center justify-between space-y-2 mb-8">
            <div>
            <h2 className="text-3xl mt-3 font-semibold">
                {title}
            </h2>
            <p className="text-sm text-muted-foreground">
                {subtext}
            </p>
            </div>
            <div className="flex items-center space-x-2">
                <Clock />
            </div>
        </div>

    )
}

export default PageTitle