import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Homeopathic Remedies",
      excerpt:
        "Discover how homeopathic remedies work and the scientific principles that support this natural healing approach.",
      image: "/placeholder.svg?height=400&width=600",
      date: "May 15, 2023",
      author: "Dr. Emily Johnson",
      category: "Research",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "5 Common Digestive Issues and Their Homeopathic Solutions",
      excerpt:
        "Learn about effective homeopathic treatments for common digestive problems like IBS, acid reflux, and bloating.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 28, 2023",
      author: "Dr. Michael Chen",
      category: "Treatments",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Success Story: How Sarah Overcame Chronic Migraines",
      excerpt:
        "Read about Sarah's journey from debilitating migraines to a pain-free life through our personalized homeopathic treatment.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 10, 2023",
      author: "Sarah Williams",
      category: "Success Stories",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Homeopathy vs. Conventional Medicine: Understanding the Differences",
      excerpt:
        "A comprehensive comparison of homeopathic and conventional approaches to healing and when each might be appropriate.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 22, 2023",
      author: "Dr. Robert Miller",
      category: "Education",
      readTime: "10 min read",
    },
  ]

  // Categories for filter
  const categories = ["All", "Research", "Treatments", "Success Stories", "Education", "Wellness"]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">PayAfterCure Blog</h1>
        <p className="text-gray-600 mb-8">
          Insights, success stories, and educational content about homeopathic healing
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={
                  index === 0 ? "bg-green-600 hover:bg-green-700" : "border-green-200 text-green-700 hover:bg-green-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="w-full md:w-auto">
            <Input
              placeholder="Search articles..."
              className="border-green-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-8">
          {/* Featured post */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
            <div className="relative h-64 w-full">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-2">Featured</Badge>
              <h2 className="text-2xl font-bold text-green-800 mb-2">
                <Link href="/blog/holistic-approach-to-seasonal-allergies" className="hover:text-green-600">
                  A Holistic Approach to Seasonal Allergies: Beyond Symptom Suppression
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Discover how homeopathy addresses the root causes of seasonal allergies rather than just masking
                symptoms. This comprehensive guide explores natural remedies that can provide lasting relief.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-200 rounded-full mr-2"></div>
                  <div>
                    <p className="text-sm font-medium">Dr. James Wilson</p>
                    <p className="text-xs text-gray-500">May 20, 2023 • 12 min read</p>
                  </div>
                </div>
                <Button variant="link" className="text-green-600 p-0">
                  <Link href="/blog/holistic-approach-to-seasonal-allergies">Read More</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Blog post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-2">{post.category}</Badge>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-green-600">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">
                      {post.date} • {post.readTime}
                    </p>
                    <Button variant="link" className="text-green-600 p-0">
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Load More Articles
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-6 border border-green-100">
          <h2 className="text-xl font-bold text-green-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-4">
            Get the latest articles, success stories, and homeopathic tips delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              placeholder="Your email address"
              type="email"
              className="border-green-200 focus:border-green-500 focus:ring-green-500"
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
