import CMS from "netlify-cms-app"
import pt from "./pt"

import BlogPostPreview from "./preview-templates/BlogPostPreview"
import withStyledComponentsRendered from "../helpers/styleInjector"

CMS.registerPreviewStyle("./exemple.css")

CMS.registerPreviewTemplate(
  "blog",
  withStyledComponentsRendered(BlogPostPreview)
)

CMS.registerLocale("pt", pt)
