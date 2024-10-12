import Image from "next/image"
import { Verified } from "@/svgs"
import { MessageSquareMore, ThumbsDown, ThumbsUp } from "lucide-react"
import { Badge } from "./ui/badge"
import { TPost } from "@/types"

interface PostCardProps {
    post: TPost; 
}

const PostCard = ({post}: PostCardProps) => {

    return (
        <article className="rounded-xl border-2 border-gray-100 bg-white">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" className="block shrink-0">
                    <Image
                        width={1080}
                        height={720}
                        alt=""
                        src={post?.image}
                        className="size-14 rounded-lg object-cover"
                    />
                </a>

                <div>
                    <div className="flex gap-x-4 font-medium items-center">
                        <h3 className="font-medium sm:text-lg">
                            <a className="hover:underline">{post.title}</a>
                        </h3>
                        <h1 className="text-teal-600 cursor-pointer">
                            + Follow
                        </h1>
                    </div>

                    <p className="line-clamp-2 text-sm text-gray-700 mb-1">{post.content}</p>

                    <Badge variant='outline'>{post.category}</Badge>
                    <div className="mt-2 sm:flex sm:items-center sm:gap-3">
                        <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
                            <ThumbsUp size={14} />

                            <p className="text-xs">{post.upvotes}</p>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
                            <ThumbsDown size={14} />

                            <p className="text-xs">{post.downvotes}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <MessageSquareMore size={14} />

                            <p className="text-xs">{post.comments.length} comments</p>
                        </div>

                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                            Posted by
                            <a href="#" className="font-medium underline hover:text-gray-700"> John </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <strong
                    className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
                >
                    <Verified />
                    <span className="text-[10px] font-medium sm:text-xs">Premium</span>
                </strong>
            </div>
        </article>
    )
}

export default PostCard