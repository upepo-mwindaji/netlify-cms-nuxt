import CMS from 'netlify-cms'
import HomepagePreview from '~/templates/home/preview-template.js'

CMS.registerPreviewStyle('/admin/app.css')
CMS.registerPreviewStyle('/admin/vendors.css')
CMS.registerPreviewStyle('/admin/admin.css')

CMS.registerPreviewTemplate('home', HomepagePreview)
CMS.registerPreviewStyle('/admin/index.css')
