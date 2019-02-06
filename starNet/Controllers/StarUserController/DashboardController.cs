

using Microsoft.AspNetCore.Mvc;

namespace starNet.Areas.StarUser.Controllers
{
    [Area("StarUser")]
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View("~/Views/StarUser/Dashboard/Index.cshtml");
        }
    }
}