using System.ComponentModel.DataAnnotations.Schema;

namespace ASHT.Domain.Entities.Inventory
{
    public class SubCategory
    {
        public int Id { get; set; }

        public string SubCategoryName { get; set; }

        public int CategoryId { get; set; }

        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
    }
}
