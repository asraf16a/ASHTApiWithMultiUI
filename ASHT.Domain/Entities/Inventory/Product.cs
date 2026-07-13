using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASHT.Domain.Entities.Inventory
{
    [Table("Product", Schema = "inventory")]
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }

        public int CategoryId { get; set; }

        public int SubCategoryId { get; set; }

        public string Description { get; set; }

        public string Feature { get; set; }

        public decimal PurchasePrice { get; set; }

        public byte[] ImageContent { get; set; }
    }
}
