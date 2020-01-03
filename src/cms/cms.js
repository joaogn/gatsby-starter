import CMS from "netlify-cms-app"
import pt from "./pt"

import BlogPostPreview from "./preview-templates/BlogPostPreview"
import HomePreview from "./preview-templates/HomePreview"
import withStyledComponentsRendered from "../helpers/styleInjector"

CMS.registerPreviewStyle("./PreviewStyle.css")

CMS.registerPreviewTemplate(
  "blog",
  withStyledComponentsRendered(BlogPostPreview)
)

CMS.registerPreviewTemplate("index", withStyledComponentsRendered(HomePreview))

CMS.registerLocale("pt", pt)
