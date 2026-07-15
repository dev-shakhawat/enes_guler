import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Container from "../common/container"

export function BreadcrumbSection() {
  return (
    <Container>
      <Breadcrumb className="py-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<a href="#">Home</a>} />
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator /> */}
          {/* <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button size="icon-sm" variant="ghost">
                    <BreadcrumbEllipsis />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                }
              />
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem> */}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<a href="#">Home page</a>} />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Product</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Container>
  )
}
