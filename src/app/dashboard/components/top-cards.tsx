"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Icon } from "@iconify/react/dist/iconify.js"

const TopCards = () => {
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-2">
                <Card className="hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Messages</CardTitle>
                        <Icon icon="tabler:mail" width="20" height="20" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">350</div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Target Reached</CardTitle>
                        <Icon icon="tabler:target-arrow" width="20" height="20" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">98</div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Networks</CardTitle>
                        <Icon icon="tabler:antenna-bars-5" width="20" height="20" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">4577</div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Personel</CardTitle>
                        <Icon icon="tabler:man" width="20" height="20" />
                    </CardHeader>
                    <CardContent>
                    <div className="text-2xl font-bold">580</div>
                  </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default TopCards