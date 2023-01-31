namespace ImageServiceAPI.DTOs
{
    public class ImageDto
    {
        public int Id { get; set; }
        public bool IsMain { get; set; }
        public string? Name { get; set; }

        public ImageDto(int id, bool isMain, string? name)
        {
            Id = id;
            IsMain = isMain;
            Name = name;
        }

        public ImageDto()
        {
        }
    }
}
