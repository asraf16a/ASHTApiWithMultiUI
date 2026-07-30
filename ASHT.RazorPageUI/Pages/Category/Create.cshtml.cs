using ASHT.Persistent;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ASHT.RazorPageUI.Pages.Category
{
    public class CreateModel : PageModel
    {
        private readonly ASHTDbContext _context;

        public CreateModel(ASHTDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Entities.Category Category { get; set; }

        public void OnGet()
        {
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }


            // _context.Categorys.Add(Category);

            await _context.SaveChangesAsync();

            return RedirectToPage("Index");
        }
    }
}
