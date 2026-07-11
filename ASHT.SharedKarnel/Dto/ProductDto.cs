using System;
using System.Collections.Generic;
using System.Text;

namespace ASHT.SharedKarnel.Dto
{
    public  class ProductDto
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public int SubCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Feature { get; set; }

        public decimal Price { get; set; }

        public byte[] ImageContent { get; set; }
    }
}
