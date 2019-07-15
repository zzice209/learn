const HOBBY = {
  'id': 1,
  'name': 'Sở thích & Mối quan tâm',
  'pid': null,
  'children': [
    {
      'id': 2,
      'name': 'Lĩnh vực nghề nghiệp',
      'pid': 1,
      'children': [
        {
          'id': 3,
          'name': 'Nông-lâm-ngư nghiệp',
          'pid': 2
        },
        {
          'id': 25,
          'name': 'Tài chính',
          'pid': 2,
          'children': [
            {
              'id': 6,
              'name': 'Ngân hàng',
              'pid': 25
            },
            {
              'id': 876,
              'name': 'Fintech',
              'pid': 25
            },
            {
              'id': 924,
              'name': 'Vàng bạc - trang sức',
              'pid': 25
            },
            {
              'id': 925,
              'name': 'Tư vấn bảo hiểm',
              'pid': 25
            },
            {
              'id': 926,
              'name': 'Môi giới chứng khoán',
              'pid': 25
            },
            {
              'id': 927,
              'name': 'Quản lý Quỹ',
              'pid': 25
            }
          ]
        },
        {
          'id': 9,
          'name': 'Thiết kế',
          'pid': 2,
          'children': [
            {
              'id': 374,
              'name': 'Thiết kế thời trang',
              'pid': 9
            },
            {
              'id': 375,
              'name': 'Thiết kế web',
              'pid': 9
            },
            {
              'id': 376,
              'name': 'Thiết kế mỹ thuật',
              'pid': 9
            }
          ]
        },
        {
          'id': 20,
          'name': 'Truyền thông - Marketing',
          'pid': 2,
          'children': [
            {
              'id': 432,
              'name': 'Online Marketing',
              'pid': 20
            },
            {
              'id': 433,
              'name': 'Tiếp thị',
              'pid': 20
            },
            {
              'id': 1031,
              'name': 'Truyền thông',
              'pid': 20,
              'children': [
                {
                  'id': 1032,
                  'name': 'PR',
                  'pid': 1031
                },
                {
                  'id': 1033,
                  'name': 'PG-PB',
                  'pid': 1031
                },
                {
                  'id': 1034,
                  'name': 'KOL',
                  'pid': 1031
                }
              ]
            }
          ]
        },
        {
          'id': 22,
          'name': 'IT-Phần mềm',
          'pid': 2,
          'children': [
            {
              'id': 902,
              'name': 'Developer',
              'pid': 22,
              'children': [
                {
                  'id': 1668,
                  'name': 'Front-end dev',
                  'pid': 902
                },
                {
                  'id': 1669,
                  'name': 'Back-end dev',
                  'pid': 902,
                  'children': [
                    {
                      'id': 1670,
                      'name': '.NET',
                      'pid': 1669
                    },
                    {
                      'id': 1671,
                      'name': 'Java',
                      'pid': 1669
                    },
                    {
                      'id': 1672,
                      'name': 'Python',
                      'pid': 1669
                    },
                    {
                      'id': 1673,
                      'name': 'PHP',
                      'pid': 1669
                    },
                    {
                      'id': 1674,
                      'name': 'C++',
                      'pid': 1669
                    },
                    {
                      'id': 1675,
                      'name': 'Ruby On Rails',
                      'pid': 1669
                    },
                    {
                      'id': 1676,
                      'name': 'Perl',
                      'pid': 1669
                    },
                    {
                      'id': 1677,
                      'name': 'Objective-C',
                      'pid': 1669
                    }
                  ]
                },
                {
                  'id': 1678,
                  'name': 'Mobile dev',
                  'pid': 902
                },
                {
                  'id': 1679,
                  'name': 'Game dev',
                  'pid': 902
                },
                {
                  'id': 1913,
                  'name': 'Fullstack Dev',
                  'pid': 902
                }
              ]
            },
            {
              'id': 903,
              'name': 'Tester',
              'pid': 22
            },
            {
              'id': 904,
              'name': 'BA',
              'pid': 22
            },
            {
              'id': 905,
              'name': 'IT leader/manager',
              'pid': 22
            },
            {
              'id': 906,
              'name': 'Product Manager',
              'pid': 22
            },
            {
              'id': 907,
              'name': 'Data scientist',
              'pid': 22
            },
            {
              'id': 908,
              'name': 'SA',
              'pid': 22
            },
            {
              'id': 911,
              'name': 'UI/UX Designer',
              'pid': 22
            },
            {
              'id': 1229,
              'name': 'Data Engineer',
              'pid': 22
            },
            {
              'id': 1681,
              'name': 'Giám đốc IT',
              'pid': 22
            }
          ]
        },
        {
          'id': 23,
          'name': 'IT-Phần Cứng',
          'pid': 2,
          'children': [
            {
              'id': 909,
              'name': 'IT Support',
              'pid': 23
            },
            {
              'id': 910,
              'name': 'IOT developer',
              'pid': 23
            }
          ]
        },
        {
          'id': 36,
          'name': 'Khoa học',
          'pid': 2,
          'children': [
            {
              'id': 859,
              'name': 'Khoa học xã hội',
              'pid': 36,
              'children': [
                {
                  'id': 861,
                  'name': 'Ngôn ngữ học',
                  'pid': 859
                },
                {
                  'id': 928,
                  'name': 'Xã hội học',
                  'pid': 859
                },
                {
                  'id': 929,
                  'name': 'Triết học',
                  'pid': 859
                },
                {
                  'id': 930,
                  'name': 'dịch thuật học, phiên dịch',
                  'pid': 859
                },
                {
                  'id': 931,
                  'name': 'Tâm lý học',
                  'pid': 859
                },
                {
                  'id': 932,
                  'name': 'Công tác xã hội',
                  'pid': 859
                },
                {
                  'id': 933,
                  'name': 'Khảo cổ học',
                  'pid': 859
                }
              ]
            },
            {
              'id': 860,
              'name': 'Khoa học tự nhiên',
              'pid': 36,
              'children': [
                {
                  'id': 862,
                  'name': 'Thiên văn học',
                  'pid': 860
                },
                {
                  'id': 863,
                  'name': 'công nghệ sinh học',
                  'pid': 860
                },
                {
                  'id': 865,
                  'name': 'Địa lý học',
                  'pid': 860
                },
                {
                  'id': 866,
                  'name': 'Địa chất',
                  'pid': 860
                },
                {
                  'id': 867,
                  'name': 'Khoa học môi trường',
                  'pid': 860
                },
                {
                  'id': 868,
                  'name': 'Nghiên cứu vật liệu mới',
                  'pid': 860
                },
                {
                  'id': 869,
                  'name': 'Công nghệ hóa học',
                  'pid': 860
                },
                {
                  'id': 870,
                  'name': 'Công nghệ thực phẩm',
                  'pid': 860
                },
                {
                  'id': 871,
                  'name': 'Hải dương học',
                  'pid': 860
                },
                {
                  'id': 872,
                  'name': 'Vật lý học',
                  'pid': 860
                },
                {
                  'id': 873,
                  'name': 'Sinh vật học',
                  'pid': 860
                },
                {
                  'id': 912,
                  'name': 'Khí tượng học',
                  'pid': 860
                }
              ]
            },
            {
              'id': 913,
              'name': 'Khoa học kỹ thuật',
              'pid': 36,
              'children': [
                {
                  'id': 914,
                  'name': 'Hóa chất',
                  'pid': 913
                },
                {
                  'id': 915,
                  'name': 'Mỏ và luyện kim',
                  'pid': 913
                },
                {
                  'id': 916,
                  'name': 'Kiến trúc quy hoạch',
                  'pid': 913
                },
                {
                  'id': 917,
                  'name': 'Cơ khí',
                  'pid': 913
                },
                {
                  'id': 918,
                  'name': 'Trắc địa',
                  'pid': 913
                },
                {
                  'id': 919,
                  'name': 'Xây dựng',
                  'pid': 913,
                  'children': [
                    {
                      'id': 920,
                      'name': 'Kỹ sư xây dựng',
                      'pid': 919
                    },
                    {
                      'id': 921,
                      'name': 'Kiến trúc nội thất',
                      'pid': 919
                    },
                    {
                      'id': 922,
                      'name': 'Kiến trúc dân dụng',
                      'pid': 919
                    }
                  ]
                },
                {
                  'id': 923,
                  'name': 'Cơ điện',
                  'pid': 913
                }
              ]
            }
          ]
        },
        {
          'id': 37,
          'name': 'Buôn bán nhỏ lẻ',
          'pid': 2
        },
        {
          'id': 361,
          'name': 'Xuất nhập khẩu',
          'pid': 2
        },
        {
          'id': 874,
          'name': 'Y tế',
          'pid': 2,
          'children': [
            {
              'id': 886,
              'name': 'Bác sĩ',
              'pid': 874
            },
            {
              'id': 887,
              'name': 'Y Tá, Hộ Lý',
              'pid': 874
            },
            {
              'id': 888,
              'name': 'Bác sĩ thú y',
              'pid': 874
            },
            {
              'id': 889,
              'name': 'Dược sĩ',
              'pid': 874
            },
            {
              'id': 890,
              'name': 'Y tế dự phòng',
              'pid': 874
            },
            {
              'id': 891,
              'name': 'Vật lý trị liệu',
              'pid': 874
            },
            {
              'id': 892,
              'name': 'Y học cổ truyền',
              'pid': 874
            }
          ]
        },
        {
          'id': 885,
          'name': 'Viễn thông',
          'pid': 2
        },
        {
          'id': 893,
          'name': 'Giáo dục',
          'pid': 2,
          'children': [
            {
              'id': 894,
              'name': 'Giáo dục mầm non',
              'pid': 893
            },
            {
              'id': 895,
              'name': 'Giáo dục đặc biệt',
              'pid': 893
            },
            {
              'id': 896,
              'name': 'Giáo dục tiểu học',
              'pid': 893
            },
            {
              'id': 897,
              'name': 'Giáo dục cấp 2',
              'pid': 893
            },
            {
              'id': 898,
              'name': 'Giáo dục cấp 3',
              'pid': 893
            },
            {
              'id': 899,
              'name': 'Đào tạo dạy nghề',
              'pid': 893
            },
            {
              'id': 900,
              'name': 'Giáo dục CĐ, ĐH',
              'pid': 893
            },
            {
              'id': 901,
              'name': 'Thanh gia giáo dục',
              'pid': 893
            }
          ]
        },
        {
          'id': 934,
          'name': 'Luật pháp',
          'pid': 2,
          'children': [
            {
              'id': 935,
              'name': 'Luật sư',
              'pid': 934
            },
            {
              'id': 936,
              'name': 'Thẩm phán',
              'pid': 934
            },
            {
              'id': 937,
              'name': 'Pháp chế',
              'pid': 934
            }
          ]
        },
        {
          'id': 938,
          'name': 'Phục vụ quản lý',
          'pid': 2,
          'children': [
            {
              'id': 939,
              'name': 'Kế toán/Tài vụ',
              'pid': 938
            },
            {
              'id': 940,
              'name': 'Kiểm toán',
              'pid': 938
            },
            {
              'id': 941,
              'name': 'Thống kê',
              'pid': 938
            },
            {
              'id': 942,
              'name': 'Thư ký',
              'pid': 938
            },
            {
              'id': 943,
              'name': 'Nhân viên hành chính',
              'pid': 938
            },
            {
              'id': 944,
              'name': 'Văn thư lưu trữ',
              'pid': 938
            },
            {
              'id': 945,
              'name': 'Nhân viên thu mua',
              'pid': 938
            }
          ]
        },
        {
          'id': 946,
          'name': 'Viết văn, báo chí, truyền hình',
          'pid': 2,
          'children': [
            {
              'id': 947,
              'name': 'Nhà văn',
              'pid': 946
            },
            {
              'id': 948,
              'name': 'Nhà báo',
              'pid': 946
            },
            {
              'id': 949,
              'name': 'Nhân viên đài truyền hình',
              'pid': 946
            }
          ]
        },
        {
          'id': 950,
          'name': 'Vận tải',
          'pid': 2,
          'children': [
            {
              'id': 951,
              'name': 'Đường thủy',
              'pid': 950,
              'children': [
                {
                  'id': 954,
                  'name': 'Lái tàu thủy',
                  'pid': 951
                },
                {
                  'id': 955,
                  'name': 'Thuyền viên',
                  'pid': 951
                }
              ]
            },
            {
              'id': 952,
              'name': 'Đường bộ',
              'pid': 950,
              'children': [
                {
                  'id': 956,
                  'name': 'Lái xe taxi',
                  'pid': 952
                },
                {
                  'id': 957,
                  'name': 'Lái xe Grab/Uber',
                  'pid': 952
                },
                {
                  'id': 958,
                  'name': 'Lái xe tải',
                  'pid': 952
                },
                {
                  'id': 959,
                  'name': 'Xe ôm',
                  'pid': 952
                },
                {
                  'id': 960,
                  'name': 'Lái xe Container',
                  'pid': 952
                },
                {
                  'id': 961,
                  'name': 'Lái xe',
                  'pid': 952
                },
                {
                  'id': 962,
                  'name': 'Phụ lái xe',
                  'pid': 952
                },
                {
                  'id': 963,
                  'name': 'Lái xe khách',
                  'pid': 952
                },
                {
                  'id': 964,
                  'name': 'Lái xe cẩu',
                  'pid': 952
                }
              ]
            },
            {
              'id': 953,
              'name': 'Đường hàng không',
              'pid': 950,
              'children': [
                {
                  'id': 967,
                  'name': 'Phi công',
                  'pid': 953
                },
                {
                  'id': 968,
                  'name': 'Tiếp viên hàng không',
                  'pid': 953
                },
                {
                  'id': 969,
                  'name': 'Kiểm soát viên không lưu',
                  'pid': 953
                },
                {
                  'id': 970,
                  'name': 'Cảng hàng không',
                  'pid': 953
                }
              ]
            },
            {
              'id': 965,
              'name': 'Đường sắt',
              'pid': 950,
              'children': [
                {
                  'id': 966,
                  'name': 'Nhân viên đường sắt',
                  'pid': 965
                }
              ]
            }
          ]
        },
        {
          'id': 971,
          'name': 'Hải quan, thuế vụ',
          'pid': 2,
          'children': [
            {
              'id': 972,
              'name': 'Hải quan',
              'pid': 971
            },
            {
              'id': 973,
              'name': 'Thanh tra biên giới',
              'pid': 971
            },
            {
              'id': 974,
              'name': 'Thuế vụ',
              'pid': 971
            }
          ]
        },
        {
          'id': 975,
          'name': 'Nghệ thuật biểu diễn, giải trí, thể thao',
          'pid': 2,
          'children': [
            {
              'id': 976,
              'name': 'Điêu khắc',
              'pid': 975
            },
            {
              'id': 977,
              'name': 'Họa sĩ',
              'pid': 975
            },
            {
              'id': 978,
              'name': 'Nhạc sĩ',
              'pid': 975
            },
            {
              'id': 979,
              'name': 'Nhạc công',
              'pid': 975
            },
            {
              'id': 980,
              'name': 'Ca sĩ',
              'pid': 975
            },
            {
              'id': 981,
              'name': 'Biên đạo múa',
              'pid': 975
            },
            {
              'id': 982,
              'name': 'Nghệ sĩ múa',
              'pid': 975
            },
            {
              'id': 983,
              'name': 'Đạo diễn',
              'pid': 975
            },
            {
              'id': 984,
              'name': 'Diễn viên',
              'pid': 975
            },
            {
              'id': 985,
              'name': 'Nghệ sĩ xiếc',
              'pid': 975
            },
            {
              'id': 986,
              'name': 'Vận động viên',
              'pid': 975
            },
            {
              'id': 987,
              'name': 'Cầu thủ bóng đá',
              'pid': 975
            },
            {
              'id': 988,
              'name': 'Người mẫu',
              'pid': 975
            }
          ]
        },
        {
          'id': 989,
          'name': 'Chăm sóc khách hàng',
          'pid': 2,
          'children': [
            {
              'id': 990,
              'name': 'Nhân viên trực tổng đài',
              'pid': 989
            },
            {
              'id': 991,
              'name': 'Nhân viên bán hàng',
              'pid': 989
            },
            {
              'id': 992,
              'name': 'Nhân viên thu tiền, thủ quỹ',
              'pid': 989
            }
          ]
        },
        {
          'id': 993,
          'name': 'Dịch vụ chăm sóc cá nhân',
          'pid': 2,
          'children': [
            {
              'id': 994,
              'name': 'Thợ làm tóc',
              'pid': 993
            },
            {
              'id': 995,
              'name': 'Nhân viên thẩm mỹ viện, spa',
              'pid': 993
            },
            {
              'id': 996,
              'name': 'Nhân viên massage',
              'pid': 993
            },
            {
              'id': 997,
              'name': 'Thợ nail',
              'pid': 993
            }
          ]
        },
        {
          'id': 998,
          'name': 'Thợ kỹ thuật',
          'pid': 2,
          'children': [
            {
              'id': 999,
              'name': 'Thợ khai thác mỏ',
              'pid': 998
            },
            {
              'id': 1000,
              'name': 'Thợ xây dựng',
              'pid': 998
            },
            {
              'id': 1001,
              'name': 'Thợ gia công kim loại',
              'pid': 998
            },
            {
              'id': 1002,
              'name': 'Thợ cơ khí',
              'pid': 998
            },
            {
              'id': 1003,
              'name': 'Thợ thủ công mỹ nghệ',
              'pid': 998
            },
            {
              'id': 1004,
              'name': 'Thợ in ấn',
              'pid': 998
            },
            {
              'id': 1005,
              'name': 'Thợ chế biến thực phẩm',
              'pid': 998
            },
            {
              'id': 1006,
              'name': 'Thợ sản xuất đồ gỗ',
              'pid': 998
            },
            {
              'id': 1007,
              'name': 'Thợ dệt may',
              'pid': 998
            },
            {
              'id': 1008,
              'name': 'Thợ thuộc da',
              'pid': 998
            },
            {
              'id': 1009,
              'name': 'Thợ vận hành máy móc',
              'pid': 998
            },
            {
              'id': 1010,
              'name': 'Thợ lắp ráp',
              'pid': 998
            }
          ]
        },
        {
          'id': 1011,
          'name': 'Lao động giản đơn',
          'pid': 2,
          'children': [
            {
              'id': 1012,
              'name': 'Giúp việc',
              'pid': 1011
            },
            {
              'id': 1013,
              'name': 'Shipper',
              'pid': 1011
            },
            {
              'id': 1014,
              'name': 'Nhân viên đưa thư',
              'pid': 1011
            },
            {
              'id': 1015,
              'name': 'Rửa xe',
              'pid': 1011
            },
            {
              'id': 1016,
              'name': 'Bốc vác',
              'pid': 1011
            }
          ]
        },
        {
          'id': 1017,
          'name': 'Lực lượng vũ trang',
          'pid': 2,
          'children': [
            {
              'id': 1018,
              'name': 'Bộ đội',
              'pid': 1017
            },
            {
              'id': 1019,
              'name': 'Công an',
              'pid': 1017
            },
            {
              'id': 1020,
              'name': 'Công an PCCC',
              'pid': 1017
            }
          ]
        },
        {
          'id': 1021,
          'name': 'Du lịch',
          'pid': 2,
          'children': [
            {
              'id': 1022,
              'name': 'Nhân viên khách sạn, nhà hàng',
              'pid': 1021
            },
            {
              'id': 1023,
              'name': 'Hướng dẫn viên du lịch',
              'pid': 1021
            },
            {
              'id': 1024,
              'name': 'Quản lý khách sạn',
              'pid': 1021
            }
          ]
        },
        {
          'id': 1025,
          'name': 'Dịch vụ ăn uống',
          'pid': 2,
          'children': [
            {
              'id': 1026,
              'name': 'Đầu bếp',
              'pid': 1025
            },
            {
              'id': 1027,
              'name': 'Phục vụ bàn',
              'pid': 1025
            }
          ]
        },
        {
          'id': 1028,
          'name': 'Khác',
          'pid': 2,
          'children': [
            {
              'id': 1029,
              'name': 'Nhân viên sở thú',
              'pid': 1028
            },
            {
              'id': 1030,
              'name': 'Nhân viên dịch vụ mai táng',
              'pid': 1028
            }
          ]
        },
        {
          'id': 1230,
          'name': 'Quản trị nguồn nhân lực',
          'pid': 2,
          'children': [
            {
              'id': 1231,
              'name': 'Nhân viên tuyển dụng',
              'pid': 1230
            },
            {
              'id': 1232,
              'name': 'Nhân sự',
              'pid': 1230
            },
            {
              'id': 1233,
              'name': 'HeadHunter',
              'pid': 1230
            },
            {
              'id': 1234,
              'name': 'Chuyên viên đào tạo nội bộ',
              'pid': 1230
            }
          ]
        }
      ]
    },
    {
      'id': 14,
      'name': 'Học tập/Đào tạo',
      'pid': 1,
      'children': [
        {
          'id': 15,
          'name': 'Du học',
          'pid': 14,
          'children': [
            {
              'id': 881,
              'name': 'Học bổng du học',
              'pid': 15
            },
            {
              'id': 1553,
              'name': 'Du học nghề',
              'pid': 15
            }
          ]
        },
        {
          'id': 16,
          'name': 'Học ngoại ngữ',
          'pid': 14,
          'children': [
            {
              'id': 511,
              'name': 'Tiếng Anh',
              'pid': 16,
              'children': [
                {
                  'id': 879,
                  'name': 'Thi chứng chỉ tiếng Anh',
                  'pid': 511
                }
              ]
            },
            {
              'id': 610,
              'name': 'Tiếng Nhật',
              'pid': 16,
              'children': [
                {
                  'id': 880,
                  'name': 'Thi chứng chỉ tiếng Nhật',
                  'pid': 610
                }
              ]
            },
            {
              'id': 611,
              'name': 'Tiếng Hàn',
              'pid': 16
            },
            {
              'id': 612,
              'name': 'Tiếng Trung',
              'pid': 16
            },
            {
              'id': 613,
              'name': 'Tiếng Tây Ban Nha',
              'pid': 16
            },
            {
              'id': 614,
              'name': 'Tiếng Đức',
              'pid': 16
            },
            {
              'id': 615,
              'name': 'Tiếng Pháp',
              'pid': 16
            },
            {
              'id': 616,
              'name': 'Tiếng Lào',
              'pid': 16
            },
            {
              'id': 617,
              'name': 'Tiếng Thái',
              'pid': 16
            },
            {
              'id': 618,
              'name': 'Tiếng Bồ Đào nha',
              'pid': 16
            },
            {
              'id': 619,
              'name': 'Tiếng Ba Lan',
              'pid': 16
            },
            {
              'id': 653,
              'name': 'Tiếng Campuchia',
              'pid': 16
            },
            {
              'id': 654,
              'name': 'Tiếng Nga',
              'pid': 16
            },
            {
              'id': 655,
              'name': 'Tiếng Italia',
              'pid': 16
            }
          ]
        },
        {
          'id': 17,
          'name': 'Học cao học/thạc sĩ/MBA',
          'pid': 14
        },
        {
          'id': 18,
          'name': 'Học tiến sĩ/ Nghiên cứu sinh',
          'pid': 14
        },
        {
          'id': 1297,
          'name': 'Đào tạo cho trẻ',
          'pid': 14,
          'children': [
            {
              'id': 1298,
              'name': 'Tư duy toán học',
              'pid': 1297
            },
            {
              'id': 1299,
              'name': 'kỹ năng sống cho trẻ',
              'pid': 1297
            },
            {
              'id': 1394,
              'name': 'Tiếng Anh cho trẻ',
              'pid': 1297
            },
            {
              'id': 1524,
              'name': 'Thi toán quốc tế',
              'pid': 1297
            },
            {
              'id': 1526,
              'name': 'Cho trẻ học đàn',
              'pid': 1297
            },
            {
              'id': 1527,
              'name': 'Cho trẻ học vẽ',
              'pid': 1297
            },
            {
              'id': 1528,
              'name': 'Cho trẻ học thanh nhạc',
              'pid': 1297
            },
            {
              'id': 1529,
              'name': 'Cho trẻ học lập trình',
              'pid': 1297
            },
            {
              'id': 1530,
              'name': 'Dạy trẻ tăng động',
              'pid': 1297
            },
            {
              'id': 1531,
              'name': 'Dạy trẻ tự kỷ',
              'pid': 1297
            },
            {
              'id': 1578,
              'name': 'Cho trẻ học nhảy',
              'pid': 1297
            }
          ]
        },
        {
          'id': 1514,
          'name': 'Ôn thi',
          'pid': 14,
          'children': [
            {
              'id': 1505,
              'name': 'Thi công chức nhà nước',
              'pid': 1514
            },
            {
              'id': 1506,
              'name': 'Thi chuyên viên chính',
              'pid': 1514
            },
            {
              'id': 1507,
              'name': 'Thi đại học',
              'pid': 1514,
              'children': [
                {
                  'id': 1511,
                  'name': 'Ôn thi Bách Khoa',
                  'pid': 1507
                },
                {
                  'id': 1512,
                  'name': 'Ôn thi Ngân hàng',
                  'pid': 1507
                },
                {
                  'id': 1513,
                  'name': 'Ôn thi Ngoại thương',
                  'pid': 1507
                },
                {
                  'id': 1516,
                  'name': 'Ôn thi HV An Ninh',
                  'pid': 1507
                },
                {
                  'id': 1517,
                  'name': 'Ôn thi HV Cảnh sát',
                  'pid': 1507
                },
                {
                  'id': 1518,
                  'name': 'Ôn thi Bưu chính viễn thông',
                  'pid': 1507
                },
                {
                  'id': 1519,
                  'name': 'Ôn thi ĐH Y',
                  'pid': 1507
                },
                {
                  'id': 1520,
                  'name': 'Ôn thi ĐH Xây Dựng',
                  'pid': 1507
                },
                {
                  'id': 1521,
                  'name': 'Ôn thi ĐH Kiến Trúc',
                  'pid': 1507
                },
                {
                  'id': 1525,
                  'name': 'Ôn thi ĐH KTQD',
                  'pid': 1507
                }
              ]
            },
            {
              'id': 1508,
              'name': 'Thi tốt nghiệp',
              'pid': 1514,
              'children': [
                {
                  'id': 1509,
                  'name': 'Thi tốt nghiệp PTTH',
                  'pid': 1508
                },
                {
                  'id': 1510,
                  'name': 'Thi tốt nghiệp THCS',
                  'pid': 1508
                }
              ]
            },
            {
              'id': 1515,
              'name': 'Thi THPT Quốc gia',
              'pid': 1514
            }
          ]
        },
        {
          'id': 1533,
          'name': 'Học âm nhạc',
          'pid': 14,
          'children': [
            {
              'id': 1534,
              'name': 'Học thanh nhạc',
              'pid': 1533
            },
            {
              'id': 1535,
              'name': 'Học đàn',
              'pid': 1533,
              'children': [
                {
                  'id': 1536,
                  'name': 'Học Piano',
                  'pid': 1535
                },
                {
                  'id': 1537,
                  'name': 'Học organ',
                  'pid': 1535
                },
                {
                  'id': 1538,
                  'name': 'Học guitar',
                  'pid': 1535
                },
                {
                  'id': 1539,
                  'name': 'Học Ukulele',
                  'pid': 1535
                },
                {
                  'id': 1540,
                  'name': 'Học Violin',
                  'pid': 1535
                }
              ]
            }
          ]
        },
        {
          'id': 1541,
          'name': 'Học bơi',
          'pid': 14
        },
        {
          'id': 1542,
          'name': 'Học nấu ăn',
          'pid': 14
        },
        {
          'id': 1543,
          'name': 'Học tin học',
          'pid': 14,
          'children': [
            {
              'id': 1544,
              'name': 'Học excel',
              'pid': 1543
            },
            {
              'id': 1545,
              'name': 'Tin học văn phòng',
              'pid': 1543
            },
            {
              'id': 1546,
              'name': 'Học lập trình',
              'pid': 1543
            },
            {
              'id': 1547,
              'name': 'Học thiết kế web',
              'pid': 1543
            },
            {
              'id': 1548,
              'name': 'Học autocad',
              'pid': 1543
            },
            {
              'id': 1549,
              'name': 'Học photoshop',
              'pid': 1543
            }
          ]
        },
        {
          'id': 1550,
          'name': 'học Digital marketing',
          'pid': 14
        },
        {
          'id': 1551,
          'name': 'Học nhảy',
          'pid': 14,
          'children': [
            {
              'id': 1576,
              'name': 'Học khiêu vũ',
              'pid': 1551
            },
            {
              'id': 1577,
              'name': 'Học nhảy hiện đại',
              'pid': 1551
            }
          ]
        },
        {
          'id': 1552,
          'name': 'Học kinh doanh',
          'pid': 14
        },
        {
          'id': 1554,
          'name': 'Học nghề',
          'pid': 14,
          'children': [
            {
              'id': 1555,
              'name': 'Học nghề may',
              'pid': 1554
            },
            {
              'id': 1556,
              'name': 'Học nghề mộc',
              'pid': 1554
            },
            {
              'id': 1557,
              'name': 'Học nghề spa',
              'pid': 1554
            },
            {
              'id': 1558,
              'name': 'Học nghề nail',
              'pid': 1554
            },
            {
              'id': 1559,
              'name': 'Học nghề phun xăm thẩm mỹ',
              'pid': 1554
            },
            {
              'id': 1560,
              'name': 'Học nghề sửa chữa xe máy',
              'pid': 1554
            },
            {
              'id': 1561,
              'name': 'Học nghề sữa chữa xe đạp điện',
              'pid': 1554
            },
            {
              'id': 1562,
              'name': 'Học nghề sửa chữa ô tô',
              'pid': 1554
            },
            {
              'id': 1563,
              'name': 'Học nghề sửa chữa điện thoại',
              'pid': 1554
            },
            {
              'id': 1564,
              'name': 'Học nghề sửa chữa máy tính',
              'pid': 1554
            },
            {
              'id': 1565,
              'name': 'Học nghề sửa chữa điện lạnh',
              'pid': 1554
            }
          ]
        },
        {
          'id': 1728,
          'name': 'Học lớp chuyên',
          'pid': 14,
          'children': [
            {
              'id': 1729,
              'name': 'Chuyên toán',
              'pid': 1728
            },
            {
              'id': 1730,
              'name': 'Chuyên văn',
              'pid': 1728
            },
            {
              'id': 1731,
              'name': 'Chuyên lý',
              'pid': 1728
            },
            {
              'id': 1732,
              'name': 'Chuyên hóa',
              'pid': 1728
            },
            {
              'id': 1733,
              'name': 'Chuyên văn',
              'pid': 1728
            },
            {
              'id': 1734,
              'name': 'Chuyên sử',
              'pid': 1728
            },
            {
              'id': 1735,
              'name': 'Chuyên địa',
              'pid': 1728
            },
            {
              'id': 1736,
              'name': 'Chuyên tin',
              'pid': 1728
            },
            {
              'id': 1737,
              'name': 'Chuyên anh',
              'pid': 1728
            },
            {
              'id': 1738,
              'name': 'Chuyên pháp',
              'pid': 1728
            },
            {
              'id': 1739,
              'name': 'Chuyên nga',
              'pid': 1728
            }
          ]
        }
      ]
    },
    {
      'id': 185,
      'name': 'Các hoạt động',
      'pid': 1,
      'children': [
        {
          'id': 388,
          'name': 'Hoạt động tài chính',
          'pid': 185,
          'children': [
            {
              'id': 26,
              'name': 'Đầu tư bất động sản',
              'pid': 388,
              'children': [
                {
                  'id': 27,
                  'name': 'Bất động sản nghỉ dưỡng',
                  'pid': 26,
                  'children': [
                    {
                      'id': 1682,
                      'name': 'Alma',
                      'pid': 27
                    },
                    {
                      'id': 1683,
                      'name': 'Xanh Villas',
                      'pid': 27
                    },
                    {
                      'id': 1684,
                      'name': 'Cocobay',
                      'pid': 27
                    },
                    {
                      'id': 1685,
                      'name': 'FLC Resort',
                      'pid': 27
                    },
                    {
                      'id': 1686,
                      'name': 'Condotel',
                      'pid': 27
                    },
                    {
                      'id': 1687,
                      'name': 'Flamingo Đại Lải resot',
                      'pid': 27
                    }
                  ]
                },
                {
                  'id': 28,
                  'name': 'Biệt thự/liền kề',
                  'pid': 26,
                  'children': [
                    {
                      'id': 1792,
                      'name': 'Vinhomes Riverside',
                      'pid': 28
                    },
                    {
                      'id': 1793,
                      'name': 'Làng Việt Kiều Châu Âu',
                      'pid': 28
                    }
                  ]
                },
                {
                  'id': 29,
                  'name': 'Căn hộ cao cấp',
                  'pid': 26,
                  'children': [
                    {
                      'id': 1688,
                      'name': 'Royal City',
                      'pid': 29,
                      'children': [
                        {
                          'id': 1689,
                          'name': 'R1',
                          'pid': 1688
                        },
                        {
                          'id': 1690,
                          'name': 'R2',
                          'pid': 1688
                        },
                        {
                          'id': 1691,
                          'name': 'R3',
                          'pid': 1688
                        },
                        {
                          'id': 1692,
                          'name': 'R4',
                          'pid': 1688
                        },
                        {
                          'id': 1693,
                          'name': 'R5',
                          'pid': 1688
                        },
                        {
                          'id': 1694,
                          'name': 'R6',
                          'pid': 1688
                        }
                      ]
                    },
                    {
                      'id': 1695,
                      'name': 'IPH',
                      'pid': 29
                    },
                    {
                      'id': 1697,
                      'name': 'Vinhomes',
                      'pid': 29,
                      'children': [
                        {
                          'id': 1744,
                          'name': 'Vinhomes Gardenia',
                          'pid': 1697
                        },
                        {
                          'id': 1746,
                          'name': 'Vinhomes Central Park',
                          'pid': 1697
                        },
                        {
                          'id': 1764,
                          'name': 'VINHOMES GREEN BAY',
                          'pid': 1697
                        }
                      ]
                    },
                    {
                      'id': 1698,
                      'name': 'Mulberry Lane',
                      'pid': 29,
                      'children': [
                        {
                          'id': 1699,
                          'name': 'Tòa A',
                          'pid': 1698
                        },
                        {
                          'id': 1700,
                          'name': 'Tòa B',
                          'pid': 1698
                        },
                        {
                          'id': 1701,
                          'name': 'Tòa C',
                          'pid': 1698
                        },
                        {
                          'id': 1702,
                          'name': 'Tòa D',
                          'pid': 1698
                        },
                        {
                          'id': 1703,
                          'name': 'Tòa E',
                          'pid': 1698
                        }
                      ]
                    },
                    {
                      'id': 1704,
                      'name': 'Times City/Park Hill',
                      'pid': 29,
                      'children': [
                        {
                          'id': 1705,
                          'name': 'T1',
                          'pid': 1704
                        },
                        {
                          'id': 1706,
                          'name': 'T2',
                          'pid': 1704
                        },
                        {
                          'id': 1707,
                          'name': 'T3',
                          'pid': 1704
                        },
                        {
                          'id': 1708,
                          'name': 'T4',
                          'pid': 1704
                        },
                        {
                          'id': 1709,
                          'name': 'T5',
                          'pid': 1704
                        },
                        {
                          'id': 1710,
                          'name': 'T6',
                          'pid': 1704
                        },
                        {
                          'id': 1711,
                          'name': 'T7',
                          'pid': 1704
                        },
                        {
                          'id': 1712,
                          'name': 'T8',
                          'pid': 1704
                        },
                        {
                          'id': 1713,
                          'name': 'T9',
                          'pid': 1704
                        },
                        {
                          'id': 1714,
                          'name': 'T10',
                          'pid': 1704
                        },
                        {
                          'id': 1715,
                          'name': 'T11',
                          'pid': 1704
                        },
                        {
                          'id': 1716,
                          'name': 'Park 1',
                          'pid': 1704
                        },
                        {
                          'id': 1717,
                          'name': 'Park 2',
                          'pid': 1704
                        },
                        {
                          'id': 1718,
                          'name': 'Park 3',
                          'pid': 1704
                        },
                        {
                          'id': 1719,
                          'name': 'G4',
                          'pid': 1704
                        },
                        {
                          'id': 1720,
                          'name': 'Park 5',
                          'pid': 1704
                        },
                        {
                          'id': 1721,
                          'name': 'Park 7',
                          'pid': 1704
                        },
                        {
                          'id': 1722,
                          'name': 'Park 6',
                          'pid': 1704
                        },
                        {
                          'id': 1723,
                          'name': 'Park 8',
                          'pid': 1704
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 30,
                  'name': 'Căn hộ văn phòng',
                  'pid': 26
                },
                {
                  'id': 31,
                  'name': 'Chung cư',
                  'pid': 26,
                  'children': [
                    {
                      'id': 1724,
                      'name': 'Riverside Garden',
                      'pid': 31
                    },
                    {
                      'id': 1725,
                      'name': 'Gemek Tower',
                      'pid': 31
                    },
                    {
                      'id': 1726,
                      'name': 'Ecopark',
                      'pid': 31
                    },
                    {
                      'id': 1727,
                      'name': 'CC 30 Phạm Văn Đồng',
                      'pid': 31
                    },
                    {
                      'id': 1740,
                      'name': 'CC Dương Nội',
                      'pid': 31
                    },
                    {
                      'id': 1741,
                      'name': 'Vincity',
                      'pid': 31
                    },
                    {
                      'id': 1742,
                      'name': 'Gemek Premium',
                      'pid': 31
                    },
                    {
                      'id': 1743,
                      'name': 'Goldmark city',
                      'pid': 31
                    },
                    {
                      'id': 1745,
                      'name': 'Eco Green City',
                      'pid': 31
                    },
                    {
                      'id': 1747,
                      'name': 'The Two Residence - Gamuda Gardens',
                      'pid': 31
                    },
                    {
                      'id': 1748,
                      'name': 'New Horizon City',
                      'pid': 31
                    },
                    {
                      'id': 1749,
                      'name': 'Hoà Bình Green City',
                      'pid': 31
                    },
                    {
                      'id': 1750,
                      'name': 'GoldenSilk Vinaconex 2',
                      'pid': 31
                    },
                    {
                      'id': 1751,
                      'name': 'CC Xuân Phương Quốc Hội',
                      'pid': 31
                    },
                    {
                      'id': 1752,
                      'name': 'HATECO Hoàng Mai',
                      'pid': 31
                    },
                    {
                      'id': 1753,
                      'name': 'The Van Phu Victoria',
                      'pid': 31
                    },
                    {
                      'id': 1754,
                      'name': 'AZ SKY Định Công',
                      'pid': 31
                    },
                    {
                      'id': 1755,
                      'name': 'FLC Garden City',
                      'pid': 31
                    },
                    {
                      'id': 1756,
                      'name': 'Hongkong tower',
                      'pid': 31
                    },
                    {
                      'id': 1757,
                      'name': 'Five Star Kim Giang',
                      'pid': 31
                    },
                    {
                      'id': 1758,
                      'name': 'Golden Palace Mễ Trì',
                      'pid': 31
                    },
                    {
                      'id': 1759,
                      'name': 'Hà Nội Homeland',
                      'pid': 31
                    },
                    {
                      'id': 1760,
                      'name': 'CC Đại Thanh',
                      'pid': 31
                    },
                    {
                      'id': 1761,
                      'name': 'Hapulico Nguyễn Trọng Phụng',
                      'pid': 31
                    },
                    {
                      'id': 1762,
                      'name': 'Thanh Hà Cienco 5',
                      'pid': 31
                    },
                    {
                      'id': 1763,
                      'name': 'Happy House Garden',
                      'pid': 31
                    },
                    {
                      'id': 1765,
                      'name': 'Dream Home',
                      'pid': 31
                    },
                    {
                      'id': 1766,
                      'name': 'Hateco Apollo Xuân Phương',
                      'pid': 31
                    },
                    {
                      'id': 1768,
                      'name': 'Valencia Garden',
                      'pid': 31
                    },
                    {
                      'id': 1771,
                      'name': 'The Vesta Hà Đông',
                      'pid': 31
                    },
                    {
                      'id': 1773,
                      'name': 'HD MON CITY',
                      'pid': 31
                    },
                    {
                      'id': 1774,
                      'name': 'Hoà Bình Green City',
                      'pid': 31
                    },
                    {
                      'id': 1775,
                      'name': 'IMPERIA GARDEN',
                      'pid': 31
                    },
                    {
                      'id': 1776,
                      'name': 'IRIS GARDEN',
                      'pid': 31
                    },
                    {
                      'id': 1777,
                      'name': 'Ecolife Tây Hồ',
                      'pid': 31
                    },
                    {
                      'id': 1778,
                      'name': 'HH Linh Đàm',
                      'pid': 31,
                      'children': [
                        {
                          'id': 1785,
                          'name': 'HH4 Linh Đàm',
                          'pid': 1778
                        },
                        {
                          'id': 1786,
                          'name': 'HH1 Linh Đàm',
                          'pid': 1778
                        },
                        {
                          'id': 1787,
                          'name': 'HH2 Linh Đàm',
                          'pid': 1778
                        },
                        {
                          'id': 1788,
                          'name': 'HH3 Linh Đàm',
                          'pid': 1778
                        }
                      ]
                    },
                    {
                      'id': 1779,
                      'name': 'VP6 Linh Đàm',
                      'pid': 31
                    },
                    {
                      'id': 1780,
                      'name': 'Rice City Linh Đàm',
                      'pid': 31
                    },
                    {
                      'id': 1781,
                      'name': 'Westbay - Aquabay',
                      'pid': 31
                    },
                    {
                      'id': 1782,
                      'name': 'The K-Park',
                      'pid': 31
                    },
                    {
                      'id': 1783,
                      'name': 'Gelexia Riverside',
                      'pid': 31
                    },
                    {
                      'id': 1784,
                      'name': 'Imperial Plaza',
                      'pid': 31
                    },
                    {
                      'id': 1790,
                      'name': 'The Golden An Khánh',
                      'pid': 31
                    },
                    {
                      'id': 1791,
                      'name': 'Eco Dream',
                      'pid': 31
                    },
                    {
                      'id': 1794,
                      'name': 'Euroland',
                      'pid': 31
                    },
                    {
                      'id': 1795,
                      'name': 'Resco Cổ Nhuế',
                      'pid': 31
                    },
                    {
                      'id': 1796,
                      'name': 'AnLand Complex',
                      'pid': 31
                    },
                    {
                      'id': 1797,
                      'name': 'CC Thông tấn xã VN',
                      'pid': 31
                    },
                    {
                      'id': 1798,
                      'name': 'Metropolitan',
                      'pid': 31
                    },
                    {
                      'id': 1799,
                      'name': 'Udic Riverside 1',
                      'pid': 31
                    }
                  ]
                },
                {
                  'id': 32,
                  'name': 'Đất chia lô',
                  'pid': 26
                },
                {
                  'id': 33,
                  'name': 'Khu đô thị',
                  'pid': 26
                },
                {
                  'id': 1696,
                  'name': 'Nhà ở xã hội',
                  'pid': 26,
                  'children': [
                    {
                      'id': 1767,
                      'name': 'CC 143 Trần Phú',
                      'pid': 1696
                    },
                    {
                      'id': 1769,
                      'name': 'KĐT Đặng Xá',
                      'pid': 1696
                    },
                    {
                      'id': 1770,
                      'name': 'Ecohome',
                      'pid': 1696
                    },
                    {
                      'id': 1772,
                      'name': 'The Vesta Hà Đông',
                      'pid': 1696
                    }
                  ]
                },
                {
                  'id': 1789,
                  'name': 'Đất nền',
                  'pid': 26
                }
              ]
            },
            {
              'id': 384,
              'name': 'Đòi nợ/ Tìm nợ xấu',
              'pid': 388
            },
            {
              'id': 389,
              'name': 'Gửi tiết kiệm',
              'pid': 388
            },
            {
              'id': 421,
              'name': 'Đầu tư chứng khoán',
              'pid': 388
            },
            {
              'id': 425,
              'name': 'Đầu tư bitcoin',
              'pid': 388
            },
            {
              'id': 426,
              'name': 'Đầu tư vàng/forex',
              'pid': 388
            },
            {
              'id': 427,
              'name': 'Đầu tư kinh doanh',
              'pid': 388,
              'children': [
                {
                  'id': 428,
                  'name': 'Kinh doanh nhỏ lẻ',
                  'pid': 427
                },
                {
                  'id': 429,
                  'name': 'Kinh doanh nhà hàng khách sạn',
                  'pid': 427
                },
                {
                  'id': 430,
                  'name': 'Khởi nghiệp',
                  'pid': 427
                }
              ]
            },
            {
              'id': 431,
              'name': 'Đầu tư chứng chỉ quỹ',
              'pid': 388
            },
            {
              'id': 1228,
              'name': 'Bốc họ',
              'pid': 388
            },
            {
              'id': 1346,
              'name': 'Dịch vụ ngân hàng',
              'pid': 388,
              'children': [
                {
                  'id': 1350,
                  'name': 'Ngân hàng BIDV',
                  'pid': 1346
                },
                {
                  'id': 1351,
                  'name': 'Ngân hàng VIB',
                  'pid': 1346
                },
                {
                  'id': 1352,
                  'name': 'Ngân hàng SHB',
                  'pid': 1346
                },
                {
                  'id': 1353,
                  'name': 'Ngân hàng ACB',
                  'pid': 1346
                },
                {
                  'id': 1354,
                  'name': 'Ngân Hàng Shinhan',
                  'pid': 1346
                },
                {
                  'id': 1355,
                  'name': 'Ngân hàng VPBank',
                  'pid': 1346
                },
                {
                  'id': 1356,
                  'name': 'Ngân hàng BAOVIETBank',
                  'pid': 1346
                },
                {
                  'id': 1357,
                  'name': 'Ngân hàng SeABank',
                  'pid': 1346
                },
                {
                  'id': 1358,
                  'name': 'Ngân hàng NCB',
                  'pid': 1346
                },
                {
                  'id': 1359,
                  'name': 'Ngân Hàng ViettinBank',
                  'pid': 1346
                },
                {
                  'id': 1360,
                  'name': 'Ngân hàng OCB',
                  'pid': 1346
                },
                {
                  'id': 1361,
                  'name': 'Ngân hàng Lienvietpostbank',
                  'pid': 1346
                },
                {
                  'id': 1362,
                  'name': 'Ngân hàng Nam Á',
                  'pid': 1346
                },
                {
                  'id': 1363,
                  'name': 'Standard Chartered Vietnam',
                  'pid': 1346
                },
                {
                  'id': 1364,
                  'name': 'Ngân hàng Maritime',
                  'pid': 1346
                },
                {
                  'id': 1365,
                  'name': 'Ngân hàng Techcombank',
                  'pid': 1346
                },
                {
                  'id': 1366,
                  'name': 'Ngân hàng MBBank',
                  'pid': 1346
                },
                {
                  'id': 1367,
                  'name': 'Ngân hàng Sacombank',
                  'pid': 1346
                },
                {
                  'id': 1368,
                  'name': 'Ngân hàng Eximbank',
                  'pid': 1346
                },
                {
                  'id': 1369,
                  'name': 'Ngân hàng PVcomBank',
                  'pid': 1346
                },
                {
                  'id': 1370,
                  'name': 'Ngân hàng Viet Capital Bank',
                  'pid': 1346
                },
                {
                  'id': 1371,
                  'name': 'Ngân hàng TPBank',
                  'pid': 1346
                },
                {
                  'id': 1372,
                  'name': 'Ngân hàng Vietinbank',
                  'pid': 1346
                },
                {
                  'id': 1373,
                  'name': 'Ngân hàng Ocean Bank',
                  'pid': 1346
                },
                {
                  'id': 1374,
                  'name': 'Ngân hàng DongA Bank',
                  'pid': 1346
                },
                {
                  'id': 1375,
                  'name': 'Ngân hàng Agribank',
                  'pid': 1346
                },
                {
                  'id': 1376,
                  'name': 'Ngân hàng An Bình',
                  'pid': 1346
                },
                {
                  'id': 1377,
                  'name': 'Ngân hàng Bắc Á',
                  'pid': 1346
                },
                {
                  'id': 1378,
                  'name': 'Ngân hàng Vietcombank',
                  'pid': 1346
                },
                {
                  'id': 1443,
                  'name': 'Ngân hàng HSBC',
                  'pid': 1346
                },
                {
                  'id': 1444,
                  'name': 'Ngân hàng Citibank',
                  'pid': 1346
                },
                {
                  'id': 1445,
                  'name': 'Ngân hàng ANZ',
                  'pid': 1346
                },
                {
                  'id': 1502,
                  'name': 'Ngân hàng HDbank',
                  'pid': 1346
                },
                {
                  'id': 1503,
                  'name': 'Ngân hàn VietABank',
                  'pid': 1346
                },
                {
                  'id': 1504,
                  'name': 'Ngân hàng GPbank',
                  'pid': 1346
                }
              ]
            },
            {
              'id': 1379,
              'name': 'Phương thức thanh toán',
              'pid': 388,
              'children': [
                {
                  'id': 1380,
                  'name': 'Thanh toán bằng ví điện tử',
                  'pid': 1379,
                  'children': [
                    {
                      'id': 1381,
                      'name': 'Ví điện tử nội địa',
                      'pid': 1380
                    },
                    {
                      'id': 1382,
                      'name': 'Ví điện tử quốc tế',
                      'pid': 1380
                    }
                  ]
                },
                {
                  'id': 1383,
                  'name': 'Thanh toán thẻ',
                  'pid': 1379,
                  'children': [
                    {
                      'id': 1384,
                      'name': 'Thẻ ATM',
                      'pid': 1383
                    },
                    {
                      'id': 1385,
                      'name': 'Thẻ tín dụng',
                      'pid': 1383
                    }
                  ]
                },
                {
                  'id': 1386,
                  'name': 'Thanh toán bằng thẻ cào/thẻ game',
                  'pid': 1379
                }
              ]
            },
            {
              'id': 1387,
              'name': 'Rút tiền mặt từ thẻ tín dụng',
              'pid': 388
            },
            {
              'id': 1388,
              'name': 'Vay tiền',
              'pid': 388,
              'children': [
                {
                  'id': 1389,
                  'name': 'Vay tiêu dùng',
                  'pid': 1388
                },
                {
                  'id': 1390,
                  'name': 'Vay trả góp',
                  'pid': 1388,
                  'children': [
                    {
                      'id': 1391,
                      'name': 'Mua xe trả góp',
                      'pid': 1390
                    },
                    {
                      'id': 1392,
                      'name': 'Mua nhà trả góp',
                      'pid': 1390
                    },
                    {
                      'id': 1393,
                      'name': 'mua điện thoại trả góp',
                      'pid': 1390
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 186,
          'name': 'Chơi nhạc cụ',
          'pid': 185
        },
        {
          'id': 187,
          'name': 'Nhiếp ảnh',
          'pid': 185
        },
        {
          'id': 188,
          'name': 'Tân trang nhà cửa',
          'pid': 185
        },
        {
          'id': 189,
          'name': 'Làm vườn',
          'pid': 185,
          'children': [
            {
              'id': 1656,
              'name': 'Trồng rau sạch',
              'pid': 189
            },
            {
              'id': 1657,
              'name': 'Trồng hoa',
              'pid': 189,
              'children': [
                {
                  'id': 1658,
                  'name': 'Trồng hoa hồng',
                  'pid': 1657
                },
                {
                  'id': 1659,
                  'name': 'Trồng lan',
                  'pid': 1657
                },
                {
                  'id': 1660,
                  'name': 'Trồng hoa ban công',
                  'pid': 1657
                },
                {
                  'id': 1662,
                  'name': 'Trồng hoa thủy tiên',
                  'pid': 1657
                }
              ]
            },
            {
              'id': 1661,
              'name': 'Trồng cây cảnh',
              'pid': 189
            }
          ]
        },
        {
          'id': 190,
          'name': 'Chăm sóc Vật nuôi',
          'pid': 185,
          'children': [
            {
              'id': 1495,
              'name': 'Nuôi mèo',
              'pid': 190
            },
            {
              'id': 1496,
              'name': 'Nuôi chó',
              'pid': 190
            },
            {
              'id': 1497,
              'name': 'Nuôi chim',
              'pid': 190
            },
            {
              'id': 1498,
              'name': 'Nuôi cá',
              'pid': 190
            },
            {
              'id': 1499,
              'name': 'Nuôi chuột lang',
              'pid': 190
            }
          ]
        },
        {
          'id': 191,
          'name': 'Hoạt động tâm linh',
          'pid': 185,
          'children': [
            {
              'id': 192,
              'name': 'Phong thủy',
              'pid': 191
            },
            {
              'id': 193,
              'name': 'Bói toán',
              'pid': 191,
              'children': [
                {
                  'id': 194,
                  'name': 'Tử vi',
                  'pid': 193
                },
                {
                  'id': 195,
                  'name': 'Tử bình',
                  'pid': 193
                },
                {
                  'id': 196,
                  'name': 'Tứ trụ',
                  'pid': 193
                },
                {
                  'id': 197,
                  'name': 'Tướng số',
                  'pid': 193
                },
                {
                  'id': 198,
                  'name': 'Bát Tự Hà Lạc',
                  'pid': 193
                },
                {
                  'id': 199,
                  'name': 'Quỷ cốc đoán mệnh',
                  'pid': 193
                },
                {
                  'id': 200,
                  'name': 'mai hoa dịch số',
                  'pid': 193
                },
                {
                  'id': 201,
                  'name': 'Kinh dịch',
                  'pid': 193
                },
                {
                  'id': 1523,
                  'name': 'Cung hoàng đạo',
                  'pid': 193
                }
              ]
            },
            {
              'id': 202,
              'name': 'Tâm linh - huyền bí',
              'pid': 191
            },
            {
              'id': 203,
              'name': 'Bùa ngải',
              'pid': 191
            }
          ]
        },
        {
          'id': 204,
          'name': 'Sử dụng Chất kích thích',
          'pid': 185
        },
        {
          'id': 205,
          'name': 'Sử dụng vũ khí',
          'pid': 185
        },
        {
          'id': 206,
          'name': 'Lô đề, xổ số',
          'pid': 185
        },
        {
          'id': 207,
          'name': 'Phòng the, 18+',
          'pid': 185
        },
        {
          'id': 208,
          'name': 'Cờ bạc, Cá độ',
          'pid': 185,
          'children': [
            {
              'id': 209,
              'name': 'Đá gà',
              'pid': 208
            },
            {
              'id': 210,
              'name': 'Cá độ',
              'pid': 208
            },
            {
              'id': 211,
              'name': 'Cờ bạc',
              'pid': 208
            },
            {
              'id': 1090,
              'name': 'Poker',
              'pid': 208
            }
          ]
        },
        {
          'id': 212,
          'name': 'Làm đẹp',
          'pid': 185,
          'children': [
            {
              'id': 675,
              'name': 'Spa',
              'pid': 212
            },
            {
              'id': 676,
              'name': 'nails',
              'pid': 212,
              'children': [
                {
                  'id': 1087,
                  'name': 'Sơn móng',
                  'pid': 676
                },
                {
                  'id': 1088,
                  'name': 'Làm móng',
                  'pid': 676
                },
                {
                  'id': 1089,
                  'name': 'Vẽ móng',
                  'pid': 676
                }
              ]
            },
            {
              'id': 677,
              'name': 'Salon tóc',
              'pid': 212,
              'children': [
                {
                  'id': 1077,
                  'name': 'nối tóc',
                  'pid': 677
                },
                {
                  'id': 1078,
                  'name': 'Cắt tóc',
                  'pid': 677,
                  'children': [
                    {
                      'id': 1292,
                      'name': 'Cắt tóc nam',
                      'pid': 1078
                    },
                    {
                      'id': 1293,
                      'name': 'Cắt tóc nữ',
                      'pid': 1078
                    }
                  ]
                },
                {
                  'id': 1079,
                  'name': 'Nhuộm tóc',
                  'pid': 677
                },
                {
                  'id': 1080,
                  'name': 'Uốn tóc',
                  'pid': 677
                },
                {
                  'id': 1081,
                  'name': 'Uốn tóc',
                  'pid': 677
                },
                {
                  'id': 1082,
                  'name': 'Duỗi tóc',
                  'pid': 677
                },
                {
                  'id': 1083,
                  'name': 'Hấp tóc',
                  'pid': 677
                },
                {
                  'id': 1094,
                  'name': 'Tạo mẫu tóc',
                  'pid': 677
                },
                {
                  'id': 1288,
                  'name': 'Phục hồi tóc',
                  'pid': 677
                },
                {
                  'id': 1289,
                  'name': 'Phủ bóng tóc',
                  'pid': 677
                },
                {
                  'id': 1290,
                  'name': 'Dập phồng',
                  'pid': 677
                },
                {
                  'id': 1291,
                  'name': 'Chấm chân màu',
                  'pid': 677
                },
                {
                  'id': 1294,
                  'name': 'Light tóc',
                  'pid': 677
                },
                {
                  'id': 1295,
                  'name': 'Tóc giả',
                  'pid': 677
                },
                {
                  'id': 1296,
                  'name': 'Tóc kẹp',
                  'pid': 677
                }
              ]
            },
            {
              'id': 678,
              'name': 'Nối mi',
              'pid': 212
            },
            {
              'id': 679,
              'name': 'Xăm thẩm mỹ',
              'pid': 212,
              'children': [
                {
                  'id': 1281,
                  'name': 'Xăm batek (Philippines)',
                  'pid': 679
                },
                {
                  'id': 1282,
                  'name': 'Xăm Sak Yant (Thái Lan)',
                  'pid': 679
                },
                {
                  'id': 1283,
                  'name': 'Xăm Irezumi (Nhật)',
                  'pid': 679
                },
                {
                  'id': 1284,
                  'name': 'Xăm Tatau (Samoa)',
                  'pid': 679
                },
                {
                  'id': 1285,
                  'name': 'Xăm Ta Moko (New Zealand)',
                  'pid': 679
                },
                {
                  'id': 1286,
                  'name': 'Xăm Ptasan (Đài Loan)',
                  'pid': 679
                },
                {
                  'id': 1287,
                  'name': 'Xăm Mehndi (Ấn Độ)',
                  'pid': 679
                }
              ]
            },
            {
              'id': 680,
              'name': 'Thẩm mỹ',
              'pid': 212,
              'children': [
                {
                  'id': 1060,
                  'name': 'Phun thêu thẩm mỹ',
                  'pid': 680
                },
                {
                  'id': 1061,
                  'name': 'Nâng mũi',
                  'pid': 680
                },
                {
                  'id': 1062,
                  'name': 'Nâng ngực',
                  'pid': 680
                },
                {
                  'id': 1063,
                  'name': 'cắt mí mắt',
                  'pid': 680
                },
                {
                  'id': 1064,
                  'name': 'Phẫu thuật căng da',
                  'pid': 680
                },
                {
                  'id': 1065,
                  'name': 'Filler - botox',
                  'pid': 680
                },
                {
                  'id': 1066,
                  'name': 'Độn cằm',
                  'pid': 680
                },
                {
                  'id': 1067,
                  'name': 'Phẫu thuật vòng 3',
                  'pid': 680
                },
                {
                  'id': 1068,
                  'name': 'Hút/đánh mỡ bụng',
                  'pid': 680
                },
                {
                  'id': 1069,
                  'name': 'Laser thẩm mỹ',
                  'pid': 680
                },
                {
                  'id': 1070,
                  'name': 'Nha khoa thẩm mỹ',
                  'pid': 680
                },
                {
                  'id': 1076,
                  'name': 'Tắm trắng',
                  'pid': 680
                }
              ]
            },
            {
              'id': 858,
              'name': 'Trang điểm',
              'pid': 212,
              'children': [
                {
                  'id': 1091,
                  'name': 'Học trang điểm',
                  'pid': 858
                },
                {
                  'id': 1092,
                  'name': 'Trang điểm cô dâu',
                  'pid': 858
                },
                {
                  'id': 1093,
                  'name': 'Trang điểm cá nhân',
                  'pid': 858
                },
                {
                  'id': 1095,
                  'name': 'Trang điểm dự tiệc',
                  'pid': 858
                }
              ]
            },
            {
              'id': 1058,
              'name': 'Giảm cân',
              'pid': 212,
              'children': [
                {
                  'id': 1073,
                  'name': 'detox',
                  'pid': 1058
                },
                {
                  'id': 1084,
                  'name': 'Thuốc giảm cân',
                  'pid': 1058
                },
                {
                  'id': 1085,
                  'name': 'Ăn kiêng',
                  'pid': 1058
                }
              ]
            },
            {
              'id': 1059,
              'name': 'Tăng cân',
              'pid': 212,
              'children': [
                {
                  'id': 1086,
                  'name': 'thuốc tăng cân',
                  'pid': 1059
                }
              ]
            },
            {
              'id': 1071,
              'name': 'Chăm sóc da',
              'pid': 212,
              'children': [
                {
                  'id': 1072,
                  'name': 'Chăm sóc da mụn',
                  'pid': 1071
                },
                {
                  'id': 1074,
                  'name': 'Chăm sóc da thâm, nám',
                  'pid': 1071
                },
                {
                  'id': 1075,
                  'name': 'Chăm sóc da sẹo rỗ',
                  'pid': 1071
                }
              ]
            },
            {
              'id': 1280,
              'name': 'Làm đẹp sau sinh',
              'pid': 212
            }
          ]
        },
        {
          'id': 213,
          'name': 'Bar/Vũ trường/Pub/Clb đêm',
          'pid': 185
        },
        {
          'id': 214,
          'name': 'DIY',
          'pid': 185,
          'children': [
            {
              'id': 1108,
              'name': 'Thêu thùa',
              'pid': 214
            },
            {
              'id': 1109,
              'name': 'Đan móc',
              'pid': 214
            },
            {
              'id': 1110,
              'name': 'May vá',
              'pid': 214
            },
            {
              'id': 1111,
              'name': 'Khéo tay',
              'pid': 214
            },
            {
              'id': 1448,
              'name': 'arduino',
              'pid': 214
            }
          ]
        },
        {
          'id': 215,
          'name': 'Hoạt động từ thiện',
          'pid': 185,
          'children': [
            {
              'id': 1098,
              'name': 'Thiên tai, thảm họa',
              'pid': 215
            },
            {
              'id': 1099,
              'name': 'Động vật hoang dã',
              'pid': 215
            },
            {
              'id': 1100,
              'name': 'Bệnh trẻ em',
              'pid': 215
            },
            {
              'id': 1101,
              'name': 'Bệnh hiểm nghèo',
              'pid': 215
            },
            {
              'id': 1102,
              'name': 'Vì người nghèo',
              'pid': 215
            },
            {
              'id': 1103,
              'name': 'Bệnh ung thư',
              'pid': 215
            },
            {
              'id': 1104,
              'name': 'Người yếu thế',
              'pid': 215
            },
            {
              'id': 1105,
              'name': 'Nạn nhân chiến tranh',
              'pid': 215
            },
            {
              'id': 1106,
              'name': 'Mạng lưới tình nguyện viên',
              'pid': 215
            },
            {
              'id': 1107,
              'name': 'Các hoạt động từ thiện khác',
              'pid': 215
            }
          ]
        },
        {
          'id': 216,
          'name': 'Du lịch',
          'pid': 185,
          'children': [
            {
              'id': 377,
              'name': 'Phượt',
              'pid': 216
            },
            {
              'id': 378,
              'name': 'Du lịch nghỉ dưỡng',
              'pid': 216
            },
            {
              'id': 386,
              'name': 'Đi phương tiện máy bay',
              'pid': 216
            },
            {
              'id': 387,
              'name': 'Du lịch nước ngoài',
              'pid': 216
            },
            {
              'id': 392,
              'name': 'Du lịch mạo hiểm',
              'pid': 216
            },
            {
              'id': 393,
              'name': 'Du lịch cùng công ty',
              'pid': 216
            },
            {
              'id': 394,
              'name': 'Du lịch từ thiện',
              'pid': 216
            },
            {
              'id': 398,
              'name': 'Du lịch tâm linh',
              'pid': 216
            },
            {
              'id': 1096,
              'name': 'Du lịch sinh thái',
              'pid': 216
            }
          ]
        },
        {
          'id': 439,
          'name': 'Mua sắm',
          'pid': 185,
          'children': [
            {
              'id': 278,
              'name': 'Xe cộ',
              'pid': 439,
              'children': [
                {
                  'id': 279,
                  'name': 'Xe máy',
                  'pid': 278,
                  'children': [
                    {
                      'id': 280,
                      'name': 'Loại xe',
                      'pid': 279,
                      'children': [
                        {
                          'id': 281,
                          'name': 'Xe tay ga',
                          'pid': 280
                        },
                        {
                          'id': 282,
                          'name': 'Xe số',
                          'pid': 280
                        },
                        {
                          'id': 283,
                          'name': 'Xe phân khối lớn',
                          'pid': 280
                        },
                        {
                          'id': 284,
                          'name': 'Xe côn',
                          'pid': 280
                        },
                        {
                          'id': 1500,
                          'name': 'Xe máy cổ',
                          'pid': 280
                        }
                      ]
                    },
                    {
                      'id': 285,
                      'name': 'Hãng xe',
                      'pid': 279,
                      'children': [
                        {
                          'id': 286,
                          'name': 'Honda',
                          'pid': 285
                        },
                        {
                          'id': 287,
                          'name': 'Yamaha',
                          'pid': 285
                        },
                        {
                          'id': 288,
                          'name': 'Suzuki',
                          'pid': 285
                        },
                        {
                          'id': 289,
                          'name': 'SYM',
                          'pid': 285
                        },
                        {
                          'id': 290,
                          'name': 'Vespa',
                          'pid': 285
                        },
                        {
                          'id': 291,
                          'name': 'Piagio',
                          'pid': 285
                        },
                        {
                          'id': 391,
                          'name': 'Peugeot',
                          'pid': 285
                        }
                      ]
                    },
                    {
                      'id': 292,
                      'name': 'Giá xe',
                      'pid': 279,
                      'children': [
                        {
                          'id': 293,
                          'name': '< 20.000.000 VND',
                          'pid': 292
                        },
                        {
                          'id': 294,
                          'name': '20.0000.000 - 30.000.000 VND',
                          'pid': 292
                        },
                        {
                          'id': 295,
                          'name': '30.000.0000 - 40.000.000 VND',
                          'pid': 292
                        },
                        {
                          'id': 296,
                          'name': '40.000.000 - 50.000.000 VND',
                          'pid': 292
                        },
                        {
                          'id': 297,
                          'name': '50.000.000 - 60.000.000 VND',
                          'pid': 292
                        },
                        {
                          'id': 298,
                          'name': '60.000.000 - 80.000.000 VND',
                          'pid': 292
                        },
                        {
                          'id': 299,
                          'name': '> 80.000.000 VND',
                          'pid': 292
                        }
                      ]
                    },
                    {
                      'id': 765,
                      'name': 'Phụ kiện xe máy',
                      'pid': 279
                    }
                  ]
                },
                {
                  'id': 300,
                  'name': 'Ô tô',
                  'pid': 278,
                  'children': [
                    {
                      'id': 301,
                      'name': 'Hãng xe',
                      'pid': 300,
                      'children': [
                        {
                          'id': 302,
                          'name': 'Kia',
                          'pid': 301
                        },
                        {
                          'id': 303,
                          'name': 'Chevrolet',
                          'pid': 301
                        },
                        {
                          'id': 304,
                          'name': 'Hyundai',
                          'pid': 301
                        },
                        {
                          'id': 305,
                          'name': 'Nissan',
                          'pid': 301
                        },
                        {
                          'id': 306,
                          'name': 'Mitsubishi',
                          'pid': 301
                        },
                        {
                          'id': 307,
                          'name': 'Mazda',
                          'pid': 301
                        },
                        {
                          'id': 308,
                          'name': 'Toyota',
                          'pid': 301
                        },
                        {
                          'id': 309,
                          'name': 'Suzuki',
                          'pid': 301
                        },
                        {
                          'id': 310,
                          'name': 'Honda',
                          'pid': 301
                        },
                        {
                          'id': 311,
                          'name': 'Ford',
                          'pid': 301
                        },
                        {
                          'id': 312,
                          'name': 'Renault',
                          'pid': 301
                        },
                        {
                          'id': 313,
                          'name': 'Volkswagen',
                          'pid': 301
                        },
                        {
                          'id': 314,
                          'name': 'Ssangyong',
                          'pid': 301
                        },
                        {
                          'id': 315,
                          'name': 'Peugeot',
                          'pid': 301
                        },
                        {
                          'id': 316,
                          'name': 'Isuzu',
                          'pid': 301
                        },
                        {
                          'id': 317,
                          'name': 'Infiniti',
                          'pid': 301
                        },
                        {
                          'id': 318,
                          'name': 'Mercedes',
                          'pid': 301
                        },
                        {
                          'id': 319,
                          'name': 'Subaru',
                          'pid': 301
                        },
                        {
                          'id': 320,
                          'name': 'Volvo',
                          'pid': 301
                        },
                        {
                          'id': 321,
                          'name': 'Porsche',
                          'pid': 301
                        },
                        {
                          'id': 322,
                          'name': 'Lexus',
                          'pid': 301
                        },
                        {
                          'id': 323,
                          'name': 'Maseri',
                          'pid': 301
                        },
                        {
                          'id': 1097,
                          'name': 'BMW',
                          'pid': 301
                        },
                        {
                          'id': 1801,
                          'name': 'Jeep',
                          'pid': 301
                        }
                      ]
                    },
                    {
                      'id': 324,
                      'name': 'Loại xe',
                      'pid': 300,
                      'children': [
                        {
                          'id': 325,
                          'name': 'hatchback',
                          'pid': 324
                        },
                        {
                          'id': 326,
                          'name': 'Sedan',
                          'pid': 324
                        },
                        {
                          'id': 327,
                          'name': 'Pick-up',
                          'pid': 324
                        },
                        {
                          'id': 328,
                          'name': 'MPV',
                          'pid': 324
                        },
                        {
                          'id': 329,
                          'name': 'SUV',
                          'pid': 324
                        },
                        {
                          'id': 330,
                          'name': 'Crossover',
                          'pid': 324
                        },
                        {
                          'id': 331,
                          'name': 'Coupe',
                          'pid': 324
                        },
                        {
                          'id': 332,
                          'name': 'Stion Wagon',
                          'pid': 324
                        },
                        {
                          'id': 333,
                          'name': 'Coupe 4 cửa',
                          'pid': 324
                        },
                        {
                          'id': 334,
                          'name': 'SUV-Wagon',
                          'pid': 324
                        },
                        {
                          'id': 335,
                          'name': 'SUV-Coupe',
                          'pid': 324
                        },
                        {
                          'id': 336,
                          'name': 'Convertible',
                          'pid': 324
                        },
                        {
                          'id': 337,
                          'name': 'Roadster',
                          'pid': 324
                        },
                        {
                          'id': 1501,
                          'name': 'xe hơi cổ',
                          'pid': 324
                        }
                      ]
                    },
                    {
                      'id': 338,
                      'name': 'Giá xe',
                      'pid': 300,
                      'children': [
                        {
                          'id': 339,
                          'name': '300.000.000 - 500.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 340,
                          'name': '500.000.000 - 800.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 341,
                          'name': '800.000.000 - 1.200.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 342,
                          'name': '1.200.000.000 - 1.500.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 343,
                          'name': '1.500.000.000 - 2.000.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 344,
                          'name': '2.000.000.000 - 2.500.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 345,
                          'name': '2.500.000.000 - 3.000.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 353,
                          'name': '3.000.000.000 - 4.000.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 354,
                          'name': '4.000.000.000 - 7.000.000.000 VND',
                          'pid': 338
                        },
                        {
                          'id': 355,
                          'name': '> 7.000.000.000 VND',
                          'pid': 338
                        }
                      ]
                    },
                    {
                      'id': 766,
                      'name': 'Phụ kiện xe ô tô',
                      'pid': 300
                    }
                  ]
                },
                {
                  'id': 752,
                  'name': 'Xe đạp',
                  'pid': 278,
                  'children': [
                    {
                      'id': 741,
                      'name': 'Loại xe',
                      'pid': 752,
                      'children': [
                        {
                          'id': 742,
                          'name': 'Xe đạp thông dụng',
                          'pid': 741
                        },
                        {
                          'id': 743,
                          'name': 'Xe đạp thời trang',
                          'pid': 741
                        },
                        {
                          'id': 744,
                          'name': 'Xe đạp thể thao',
                          'pid': 741,
                          'children': [
                            {
                              'id': 747,
                              'name': 'Xe đạp địa hình',
                              'pid': 744
                            },
                            {
                              'id': 748,
                              'name': 'Xe đạp đua',
                              'pid': 744
                            }
                          ]
                        },
                        {
                          'id': 745,
                          'name': 'Xe đạp trẻ em',
                          'pid': 741
                        },
                        {
                          'id': 746,
                          'name': 'Xe đạp điện',
                          'pid': 741
                        },
                        {
                          'id': 749,
                          'name': 'Xe đạp khác',
                          'pid': 741,
                          'children': [
                            {
                              'id': 750,
                              'name': 'Xe đạp đôi',
                              'pid': 749
                            },
                            {
                              'id': 751,
                              'name': 'Xe đạp gấp',
                              'pid': 749
                            },
                            {
                              'id': 753,
                              'name': 'Xe đạp BMX',
                              'pid': 749
                            },
                            {
                              'id': 754,
                              'name': 'Xe đạp Fixed Gear',
                              'pid': 749
                            },
                            {
                              'id': 755,
                              'name': 'Xe đạp thể thao mini',
                              'pid': 749
                            },
                            {
                              'id': 756,
                              'name': 'Xe đạp bánh béo - Fat bike',
                              'pid': 749
                            },
                            {
                              'id': 757,
                              'name': 'xe đạp trợ lực',
                              'pid': 749
                            },
                            {
                              'id': 758,
                              'name': 'Xe đạp thể thao lắp ráp,',
                              'pid': 749
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 759,
                      'name': 'Phụ kiện xe đạp',
                      'pid': 752
                    },
                    {
                      'id': 760,
                      'name': 'Hãng xe đạp',
                      'pid': 752,
                      'children': [
                        {
                          'id': 761,
                          'name': 'GIANT',
                          'pid': 760
                        },
                        {
                          'id': 762,
                          'name': 'Cannondale',
                          'pid': 760
                        },
                        {
                          'id': 763,
                          'name': 'Jett',
                          'pid': 760
                        },
                        {
                          'id': 764,
                          'name': 'Trinx',
                          'pid': 760
                        },
                        {
                          'id': 1449,
                          'name': 'Kona',
                          'pid': 760
                        },
                        {
                          'id': 1450,
                          'name': 'Marin',
                          'pid': 760
                        },
                        {
                          'id': 1451,
                          'name': 'Specialized',
                          'pid': 760
                        },
                        {
                          'id': 1452,
                          'name': 'Santa Cruz',
                          'pid': 760
                        },
                        {
                          'id': 1453,
                          'name': 'Merida',
                          'pid': 760
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 528,
              'name': 'Bán lẻ',
              'pid': 439,
              'children': [
                {
                  'id': 382,
                  'name': 'Thời trang',
                  'pid': 528,
                  'children': [
                    {
                      'id': 630,
                      'name': 'Thời trang nữ',
                      'pid': 382,
                      'children': [
                        {
                          'id': 631,
                          'name': 'Trang phục nữ',
                          'pid': 630
                        },
                        {
                          'id': 632,
                          'name': 'Quần áo ngủ, nội y',
                          'pid': 630
                        },
                        {
                          'id': 633,
                          'name': 'Túi xách nữ',
                          'pid': 630
                        },
                        {
                          'id': 634,
                          'name': 'Giày nữ',
                          'pid': 630
                        },
                        {
                          'id': 635,
                          'name': 'Đồ bơi, bikini',
                          'pid': 630
                        },
                        {
                          'id': 636,
                          'name': 'Thời trang thể thao nữ',
                          'pid': 630
                        },
                        {
                          'id': 768,
                          'name': 'Thời trang công sở',
                          'pid': 630
                        }
                      ]
                    },
                    {
                      'id': 637,
                      'name': 'Phụ kiện thời trang',
                      'pid': 382,
                      'children': [
                        {
                          'id': 638,
                          'name': 'Trang sức',
                          'pid': 637
                        },
                        {
                          'id': 639,
                          'name': 'Phụ kiện',
                          'pid': 637
                        },
                        {
                          'id': 640,
                          'name': 'Mắt kính',
                          'pid': 637
                        },
                        {
                          'id': 641,
                          'name': 'Đồng hồ',
                          'pid': 637
                        },
                        {
                          'id': 642,
                          'name': 'Khăn',
                          'pid': 637
                        },
                        {
                          'id': 643,
                          'name': 'Mũ',
                          'pid': 637
                        },
                        {
                          'id': 644,
                          'name': 'Găng tay',
                          'pid': 637
                        }
                      ]
                    },
                    {
                      'id': 645,
                      'name': 'Thời trang nam',
                      'pid': 382,
                      'children': [
                        {
                          'id': 646,
                          'name': 'Trang phục nam',
                          'pid': 645
                        },
                        {
                          'id': 647,
                          'name': 'Giày nam',
                          'pid': 645
                        },
                        {
                          'id': 648,
                          'name': 'Túi xách nam',
                          'pid': 645
                        },
                        {
                          'id': 649,
                          'name': 'Thời trang thể thao nam',
                          'pid': 645
                        }
                      ]
                    },
                    {
                      'id': 650,
                      'name': 'Thời trang trẻ em',
                      'pid': 382,
                      'children': [
                        {
                          'id': 651,
                          'name': 'Quần áo trẻ em',
                          'pid': 650
                        },
                        {
                          'id': 652,
                          'name': 'Phụ kiện thời trang trẻ em',
                          'pid': 650
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 529,
                  'name': 'Sản phẩm cho mẹ & bé',
                  'pid': 528,
                  'children': [
                    {
                      'id': 531,
                      'name': 'Vệ sinh cho bé',
                      'pid': 529,
                      'children': [
                        {
                          'id': 543,
                          'name': 'Bỉm & tã giấy',
                          'pid': 531
                        },
                        {
                          'id': 544,
                          'name': 'Bô vệ sinh',
                          'pid': 531
                        },
                        {
                          'id': 545,
                          'name': 'Kem hăm, dưỡng da, phấn rôm',
                          'pid': 531
                        },
                        {
                          'id': 546,
                          'name': 'Tấm lót chống thấm',
                          'pid': 531
                        },
                        {
                          'id': 547,
                          'name': 'Giấy ướt, giấy khô',
                          'pid': 531
                        },
                        {
                          'id': 548,
                          'name': 'Vệ sinh tóc, tai, tay chân miệng',
                          'pid': 531
                        },
                        {
                          'id': 565,
                          'name': 'Bé tắm gội',
                          'pid': 531
                        }
                      ]
                    },
                    {
                      'id': 532,
                      'name': 'Đồ chơi trẻ em',
                      'pid': 529,
                      'children': [
                        {
                          'id': 568,
                          'name': 'Đồ chơi trẻ sơ sinh',
                          'pid': 532
                        },
                        {
                          'id': 569,
                          'name': 'Đồ chơi bé trai',
                          'pid': 532
                        },
                        {
                          'id': 570,
                          'name': 'Đồ chơi bé gái',
                          'pid': 532
                        },
                        {
                          'id': 571,
                          'name': 'Đồ chơi thông minh',
                          'pid': 532
                        },
                        {
                          'id': 572,
                          'name': 'Đồ chơi vận động',
                          'pid': 532
                        },
                        {
                          'id': 573,
                          'name': 'Đồ chơi gỗ',
                          'pid': 532
                        },
                        {
                          'id': 577,
                          'name': 'Balo cặp túi cho bé',
                          'pid': 532
                        },
                        {
                          'id': 578,
                          'name': 'Ô & kem chống nắng cho bé',
                          'pid': 532
                        },
                        {
                          'id': 579,
                          'name': 'Ghế ngồi xe cho bé',
                          'pid': 532
                        }
                      ]
                    },
                    {
                      'id': 534,
                      'name': 'Bé ngủ ngon',
                      'pid': 529,
                      'children': [
                        {
                          'id': 580,
                          'name': 'Chăn đệm chiếu gối cho bé',
                          'pid': 534
                        },
                        {
                          'id': 581,
                          'name': 'Ghế rung cho bé',
                          'pid': 534
                        },
                        {
                          'id': 582,
                          'name': 'giường cũi cho bé',
                          'pid': 534
                        },
                        {
                          'id': 583,
                          'name': 'Nôi cho bé',
                          'pid': 534
                        },
                        {
                          'id': 584,
                          'name': 'Đèn ngủ, máy báo khóc, ru ngủ',
                          'pid': 534
                        }
                      ]
                    },
                    {
                      'id': 536,
                      'name': 'Bé ra ngoài',
                      'pid': 529,
                      'children': [
                        {
                          'id': 574,
                          'name': 'Xe đẩy cho bé',
                          'pid': 536
                        },
                        {
                          'id': 575,
                          'name': 'Đồ bơi của bé',
                          'pid': 536
                        },
                        {
                          'id': 576,
                          'name': 'Địu, đai cho bé',
                          'pid': 536
                        }
                      ]
                    },
                    {
                      'id': 537,
                      'name': 'Bé mặc',
                      'pid': 529,
                      'children': [
                        {
                          'id': 551,
                          'name': 'Đồ sơ sinh',
                          'pid': 537
                        },
                        {
                          'id': 552,
                          'name': 'Thời trang cho bé',
                          'pid': 537
                        },
                        {
                          'id': 553,
                          'name': 'Phụ kiện cho bé',
                          'pid': 537
                        }
                      ]
                    },
                    {
                      'id': 538,
                      'name': 'Dành cho mẹ',
                      'pid': 529,
                      'children': [
                        {
                          'id': 562,
                          'name': 'Sữa bà bầu',
                          'pid': 538
                        },
                        {
                          'id': 563,
                          'name': 'Quần áo bầu/sau sinh',
                          'pid': 538
                        },
                        {
                          'id': 564,
                          'name': 'Máy hút sữa',
                          'pid': 538
                        },
                        {
                          'id': 566,
                          'name': 'Trà, Vitamin, thực phẩm chức năng cho bà bầu',
                          'pid': 538
                        },
                        {
                          'id': 567,
                          'name': 'Dành cho mẹ sau sinh',
                          'pid': 538
                        }
                      ]
                    },
                    {
                      'id': 539,
                      'name': 'Bé khỏe & an toàn',
                      'pid': 529,
                      'children': [
                        {
                          'id': 555,
                          'name': 'Dụng cụ hút mũi',
                          'pid': 539
                        },
                        {
                          'id': 556,
                          'name': 'Cao dán hạ sốt, dầu bôi, uống thuốc',
                          'pid': 539
                        },
                        {
                          'id': 557,
                          'name': 'Nhiệt kế cho bé',
                          'pid': 539
                        },
                        {
                          'id': 558,
                          'name': 'Chống muỗi và côn trùng',
                          'pid': 539
                        },
                        {
                          'id': 559,
                          'name': 'Vitamin và thực phẩm chức năng',
                          'pid': 539
                        },
                        {
                          'id': 560,
                          'name': 'Bịt ổ điện, bịt góc bàn và chặn cửa',
                          'pid': 539
                        },
                        {
                          'id': 561,
                          'name': 'Cân sức khỏe cho bé',
                          'pid': 539
                        }
                      ]
                    },
                    {
                      'id': 540,
                      'name': 'Bé ăn',
                      'pid': 529,
                      'children': [
                        {
                          'id': 541,
                          'name': 'Sữa cho bé',
                          'pid': 540
                        },
                        {
                          'id': 542,
                          'name': 'Bé ăn dặm',
                          'pid': 540
                        },
                        {
                          'id': 549,
                          'name': 'Bình sữa và phụ kiện',
                          'pid': 540
                        },
                        {
                          'id': 550,
                          'name': 'Trà & thực phẩm đóng hộp',
                          'pid': 540
                        },
                        {
                          'id': 554,
                          'name': 'Đồ dùng ăn uống cho bé',
                          'pid': 540
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 585,
                  'name': 'Sách - VPP - Quà tặng',
                  'pid': 528,
                  'children': [
                    {
                      'id': 586,
                      'name': 'Mua bán sách',
                      'pid': 585
                    },
                    {
                      'id': 587,
                      'name': 'Văn phòng phẩm',
                      'pid': 585,
                      'children': [
                        {
                          'id': 588,
                          'name': 'Đồ dùng học sinh',
                          'pid': 587
                        },
                        {
                          'id': 589,
                          'name': 'Đồ dùng văn phòng',
                          'pid': 587
                        }
                      ]
                    },
                    {
                      'id': 590,
                      'name': 'Quà tặng',
                      'pid': 585
                    }
                  ]
                },
                {
                  'id': 591,
                  'name': 'Thực phẩm/Đồ uống',
                  'pid': 528,
                  'children': [
                    {
                      'id': 592,
                      'name': 'Thực phẩm sạch',
                      'pid': 591
                    },
                    {
                      'id': 593,
                      'name': 'Bánh kẹo',
                      'pid': 591
                    },
                    {
                      'id': 594,
                      'name': 'Thực phẩm khô',
                      'pid': 591
                    },
                    {
                      'id': 595,
                      'name': 'Rau củ quả',
                      'pid': 591,
                      'children': [
                        {
                          'id': 596,
                          'name': 'Trái cây nhập khẩu',
                          'pid': 595
                        },
                        {
                          'id': 597,
                          'name': 'Rau sạch',
                          'pid': 595
                        },
                        {
                          'id': 598,
                          'name': 'Trái cây Việt Nam',
                          'pid': 595
                        }
                      ]
                    },
                    {
                      'id': 599,
                      'name': 'Sữa - kem',
                      'pid': 591
                    },
                    {
                      'id': 600,
                      'name': 'Nước giải khát',
                      'pid': 591
                    },
                    {
                      'id': 601,
                      'name': 'Bia',
                      'pid': 591,
                      'children': [
                        {
                          'id': 1136,
                          'name': 'Bia Việt Nam',
                          'pid': 601
                        },
                        {
                          'id': 1137,
                          'name': 'Bia ngoại',
                          'pid': 601
                        }
                      ]
                    },
                    {
                      'id': 602,
                      'name': 'Rượu',
                      'pid': 591,
                      'children': [
                        {
                          'id': 1134,
                          'name': 'Rượu dân tộc',
                          'pid': 602
                        },
                        {
                          'id': 1135,
                          'name': 'Rượu ngoại',
                          'pid': 602,
                          'children': [
                            {
                              'id': 1138,
                              'name': 'Vodka',
                              'pid': 1135
                            },
                            {
                              'id': 1139,
                              'name': 'Rum',
                              'pid': 1135
                            },
                            {
                              'id': 1140,
                              'name': 'Whishky',
                              'pid': 1135
                            },
                            {
                              'id': 1141,
                              'name': 'Cognac',
                              'pid': 1135
                            },
                            {
                              'id': 1142,
                              'name': 'Gin',
                              'pid': 1135
                            },
                            {
                              'id': 1143,
                              'name': 'Amrgnac',
                              'pid': 1135
                            },
                            {
                              'id': 1144,
                              'name': 'Tequila',
                              'pid': 1135
                            },
                            {
                              'id': 1145,
                              'name': 'Brandy',
                              'pid': 1135
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 603,
                      'name': 'Chế phẩm từ sữa',
                      'pid': 591
                    },
                    {
                      'id': 604,
                      'name': 'Thực phẩm bảo quản đông lạnh',
                      'pid': 591
                    },
                    {
                      'id': 605,
                      'name': 'Bánh mì - bánh ngọt',
                      'pid': 591
                    },
                    {
                      'id': 606,
                      'name': 'Thực phẩm chay',
                      'pid': 591
                    },
                    {
                      'id': 607,
                      'name': 'bánh truyền thống',
                      'pid': 591
                    },
                    {
                      'id': 608,
                      'name': 'Thực phẩm chức năng',
                      'pid': 591
                    }
                  ]
                },
                {
                  'id': 620,
                  'name': 'Chăm sóc sức khỏe & sắc đẹp',
                  'pid': 528,
                  'children': [
                    {
                      'id': 621,
                      'name': 'Chăm sóc da mặt',
                      'pid': 620
                    },
                    {
                      'id': 622,
                      'name': 'Chăm sóc tóc',
                      'pid': 620
                    },
                    {
                      'id': 623,
                      'name': 'Mỹ phẩm',
                      'pid': 620
                    },
                    {
                      'id': 624,
                      'name': 'Dụng cụ chăm sóc sắc đẹp',
                      'pid': 620
                    },
                    {
                      'id': 625,
                      'name': 'Nước hoa',
                      'pid': 620
                    },
                    {
                      'id': 626,
                      'name': 'Tắm gội & chăm sóc cơ thể',
                      'pid': 620
                    },
                    {
                      'id': 627,
                      'name': 'Thực phẩm bổ sung',
                      'pid': 620
                    },
                    {
                      'id': 628,
                      'name': 'Thiết bị y tế',
                      'pid': 620
                    },
                    {
                      'id': 629,
                      'name': 'Chăm sóc cá nhân',
                      'pid': 620
                    }
                  ]
                },
                {
                  'id': 656,
                  'name': 'Hàng tiêu dùng',
                  'pid': 528,
                  'children': [
                    {
                      'id': 657,
                      'name': 'Vật dụng nhà bếp',
                      'pid': 656
                    },
                    {
                      'id': 658,
                      'name': 'Hóa phẩm - chất tẩy',
                      'pid': 656
                    },
                    {
                      'id': 659,
                      'name': 'Vật dụng vệ sinh nhà cửa',
                      'pid': 656
                    },
                    {
                      'id': 660,
                      'name': 'Máy móc - thiết bị nhà bếp',
                      'pid': 656
                    },
                    {
                      'id': 662,
                      'name': 'Đồ nhựa',
                      'pid': 656
                    },
                    {
                      'id': 663,
                      'name': 'Đồ dã ngoại - du lịch',
                      'pid': 656
                    }
                  ]
                },
                {
                  'id': 664,
                  'name': 'Nội thất',
                  'pid': 528,
                  'children': [
                    {
                      'id': 665,
                      'name': 'Nội thất bếp',
                      'pid': 664
                    },
                    {
                      'id': 666,
                      'name': 'Nội thất phòng khách',
                      'pid': 664
                    },
                    {
                      'id': 667,
                      'name': 'Nội thất văn phòng',
                      'pid': 664
                    },
                    {
                      'id': 668,
                      'name': 'Nội thất phòng tắm',
                      'pid': 664
                    },
                    {
                      'id': 669,
                      'name': 'Nội thất hành lang',
                      'pid': 664
                    },
                    {
                      'id': 670,
                      'name': 'Nội thất phòng ngủ',
                      'pid': 664
                    },
                    {
                      'id': 671,
                      'name': 'Đồ thờ cúng',
                      'pid': 664
                    },
                    {
                      'id': 672,
                      'name': 'Điện dân dụng',
                      'pid': 664
                    },
                    {
                      'id': 673,
                      'name': 'Nguyên vật liệu xây dựng',
                      'pid': 664
                    },
                    {
                      'id': 674,
                      'name': 'Vật tư thiết bị nước',
                      'pid': 664
                    }
                  ]
                },
                {
                  'id': 681,
                  'name': 'Mobile - Tablet',
                  'pid': 528,
                  'children': [
                    {
                      'id': 682,
                      'name': 'Điện thoại di động',
                      'pid': 681,
                      'children': [
                        {
                          'id': 709,
                          'name': 'Loại điện thoại',
                          'pid': 682,
                          'children': [
                            {
                              'id': 686,
                              'name': 'Điện thoại thông minh',
                              'pid': 709
                            },
                            {
                              'id': 687,
                              'name': 'Điện thoại bình dân',
                              'pid': 709
                            },
                            {
                              'id': 1184,
                              'name': 'Điện thoại cổ',
                              'pid': 709
                            }
                          ]
                        },
                        {
                          'id': 710,
                          'name': 'Hãng điện thoại',
                          'pid': 682,
                          'children': [
                            {
                              'id': 711,
                              'name': 'Itel',
                              'pid': 710
                            },
                            {
                              'id': 712,
                              'name': 'Masstel',
                              'pid': 710
                            },
                            {
                              'id': 713,
                              'name': 'MOBELL',
                              'pid': 710
                            },
                            {
                              'id': 714,
                              'name': 'Mobiistar',
                              'pid': 710
                            },
                            {
                              'id': 715,
                              'name': 'Philips',
                              'pid': 710
                            },
                            {
                              'id': 716,
                              'name': 'Samsung',
                              'pid': 710
                            },
                            {
                              'id': 717,
                              'name': 'Nokia',
                              'pid': 710
                            },
                            {
                              'id': 718,
                              'name': 'Blackberry',
                              'pid': 710
                            },
                            {
                              'id': 719,
                              'name': 'Motorola',
                              'pid': 710
                            },
                            {
                              'id': 720,
                              'name': 'Huawei',
                              'pid': 710
                            },
                            {
                              'id': 721,
                              'name': 'Asus',
                              'pid': 710
                            },
                            {
                              'id': 722,
                              'name': 'Honor',
                              'pid': 710
                            },
                            {
                              'id': 723,
                              'name': 'OPPO',
                              'pid': 710
                            },
                            {
                              'id': 724,
                              'name': 'Vivo',
                              'pid': 710
                            },
                            {
                              'id': 725,
                              'name': 'Sony',
                              'pid': 710
                            },
                            {
                              'id': 726,
                              'name': 'Xiaomi',
                              'pid': 710
                            },
                            {
                              'id': 727,
                              'name': 'HTC',
                              'pid': 710
                            },
                            {
                              'id': 728,
                              'name': 'iphone',
                              'pid': 710
                            },
                            {
                              'id': 729,
                              'name': 'Bphone',
                              'pid': 710
                            }
                          ]
                        },
                        {
                          'id': 730,
                          'name': 'Hệ điều hành',
                          'pid': 682,
                          'children': [
                            {
                              'id': 731,
                              'name': 'Symbian',
                              'pid': 730
                            },
                            {
                              'id': 732,
                              'name': 'iOS',
                              'pid': 730
                            },
                            {
                              'id': 733,
                              'name': 'Android',
                              'pid': 730
                            },
                            {
                              'id': 1037,
                              'name': 'Blackberry OS',
                              'pid': 730
                            }
                          ]
                        },
                        {
                          'id': 734,
                          'name': 'Giá điện thoại',
                          'pid': 682,
                          'children': [
                            {
                              'id': 735,
                              'name': 'Dưới 1 triệu',
                              'pid': 734
                            },
                            {
                              'id': 736,
                              'name': 'Từ 1 - 3 triệu',
                              'pid': 734
                            },
                            {
                              'id': 737,
                              'name': 'Từ 3-6 triệu',
                              'pid': 734
                            },
                            {
                              'id': 738,
                              'name': 'Từ 6-10 triệu',
                              'pid': 734
                            },
                            {
                              'id': 739,
                              'name': 'Từ 10-15 triệu',
                              'pid': 734
                            },
                            {
                              'id': 740,
                              'name': 'Trên 15 triệu',
                              'pid': 734
                            },
                            {
                              'id': 1183,
                              'name': 'Trên 20 triệu',
                              'pid': 734
                            }
                          ]
                        }
                      ]
                    },
                    {
                      'id': 683,
                      'name': 'Máy tính bảng',
                      'pid': 681,
                      'children': [
                        {
                          'id': 769,
                          'name': 'Máy tính bảng Android',
                          'pid': 683
                        },
                        {
                          'id': 770,
                          'name': 'Máy tính bảng windows',
                          'pid': 683
                        },
                        {
                          'id': 771,
                          'name': 'Amazon Kindle',
                          'pid': 683
                        },
                        {
                          'id': 772,
                          'name': 'Máy tính bảng Apple',
                          'pid': 683
                        }
                      ]
                    },
                    {
                      'id': 684,
                      'name': 'Phụ kiện điện thoại',
                      'pid': 681
                    },
                    {
                      'id': 705,
                      'name': 'Đồng hồ thông minh',
                      'pid': 681
                    }
                  ]
                },
                {
                  'id': 685,
                  'name': 'Thiết bị điện tử',
                  'pid': 528,
                  'children': [
                    {
                      'id': 688,
                      'name': 'Máy vi tính',
                      'pid': 685,
                      'children': [
                        {
                          'id': 692,
                          'name': 'Macbook',
                          'pid': 688,
                          'children': [
                            {
                              'id': 1179,
                              'name': 'macbook air',
                              'pid': 692
                            },
                            {
                              'id': 1180,
                              'name': 'Macbook Pro',
                              'pid': 692
                            }
                          ]
                        },
                        {
                          'id': 693,
                          'name': 'Windows laptop',
                          'pid': 688,
                          'children': [
                            {
                              'id': 773,
                              'name': 'Hãng',
                              'pid': 693,
                              'children': [
                                {
                                  'id': 774,
                                  'name': 'HP',
                                  'pid': 773
                                },
                                {
                                  'id': 775,
                                  'name': 'Dell',
                                  'pid': 773
                                },
                                {
                                  'id': 776,
                                  'name': 'Asus',
                                  'pid': 773
                                },
                                {
                                  'id': 777,
                                  'name': 'Lenovo',
                                  'pid': 773
                                },
                                {
                                  'id': 778,
                                  'name': 'MSI',
                                  'pid': 773
                                },
                                {
                                  'id': 779,
                                  'name': 'Masstel',
                                  'pid': 773
                                },
                                {
                                  'id': 780,
                                  'name': 'Acer',
                                  'pid': 773
                                },
                                {
                                  'id': 1176,
                                  'name': 'Sony Vaio',
                                  'pid': 773
                                },
                                {
                                  'id': 1177,
                                  'name': 'IBM Thinkpad',
                                  'pid': 773
                                },
                                {
                                  'id': 1181,
                                  'name': 'Razer',
                                  'pid': 773
                                },
                                {
                                  'id': 1182,
                                  'name': 'Samsung',
                                  'pid': 773
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'id': 694,
                          'name': 'Desktop/PC',
                          'pid': 688
                        },
                        {
                          'id': 1178,
                          'name': 'iMac',
                          'pid': 688
                        }
                      ]
                    },
                    {
                      'id': 689,
                      'name': 'Phụ kiện máy tính',
                      'pid': 685
                    },
                    {
                      'id': 690,
                      'name': 'Điện tử gia đình',
                      'pid': 685,
                      'children': [
                        {
                          'id': 695,
                          'name': 'Tivi',
                          'pid': 690
                        },
                        {
                          'id': 696,
                          'name': 'Thiết bị âm thanh',
                          'pid': 690,
                          'children': [
                            {
                              'id': 1125,
                              'name': 'Âm thanh Hi-end',
                              'pid': 696
                            },
                            {
                              'id': 1126,
                              'name': 'Vintage audio',
                              'pid': 696
                            },
                            {
                              'id': 1127,
                              'name': 'Audiophile',
                              'pid': 696
                            },
                            {
                              'id': 1128,
                              'name': 'Cattsette',
                              'pid': 696
                            },
                            {
                              'id': 1129,
                              'name': 'Audio hifi',
                              'pid': 696
                            }
                          ]
                        },
                        {
                          'id': 697,
                          'name': 'Đồ chơi công nghệ',
                          'pid': 690
                        }
                      ]
                    },
                    {
                      'id': 691,
                      'name': 'Thiết bị kỹ thuật số',
                      'pid': 685,
                      'children': [
                        {
                          'id': 698,
                          'name': 'Máy ảnh',
                          'pid': 691
                        },
                        {
                          'id': 699,
                          'name': 'Máy quay phim',
                          'pid': 691
                        },
                        {
                          'id': 700,
                          'name': 'Thiết bị an ninh',
                          'pid': 691
                        }
                      ]
                    }
                  ]
                },
                {
                  'id': 701,
                  'name': 'Điện gia dụng',
                  'pid': 528,
                  'children': [
                    {
                      'id': 702,
                      'name': 'Điện gia dụng nhà bếp',
                      'pid': 701
                    },
                    {
                      'id': 703,
                      'name': 'Điện gia dụng gia đình',
                      'pid': 701
                    },
                    {
                      'id': 704,
                      'name': 'Điện lạnh & Điện cỡ lớn',
                      'pid': 701
                    }
                  ]
                }
              ]
            },
            {
              'id': 1467,
              'name': 'Hành vi mua',
              'pid': 439,
              'children': [
                {
                  'id': 1468,
                  'name': 'Mua hàng giảm giá',
                  'pid': 1467
                },
                {
                  'id': 1469,
                  'name': 'Săn voucher',
                  'pid': 1467
                },
                {
                  'id': 1470,
                  'name': 'Mua hàng thanh lý',
                  'pid': 1467
                },
                {
                  'id': 1471,
                  'name': 'Mua chung',
                  'pid': 1467
                },
                {
                  'id': 1472,
                  'name': 'Mua hàng giá rẻ',
                  'pid': 1467
                },
                {
                  'id': 1473,
                  'name': 'Mua hàng xuất khẩu',
                  'pid': 1467
                },
                {
                  'id': 1474,
                  'name': 'Mua hàng có thương hiệu nước ngoài (chính hãng/xách tay)',
                  'pid': 1467
                },
                {
                  'id': 1475,
                  'name': 'Mua hàng online',
                  'pid': 1467
                },
                {
                  'id': 1476,
                  'name': 'Mua hàng fake',
                  'pid': 1467
                },
                {
                  'id': 1477,
                  'name': 'Mua hàng hiệu',
                  'pid': 1467
                },
                {
                  'id': 1478,
                  'name': 'Mua hàng nhập khẩu',
                  'pid': 1467,
                  'children': [
                    {
                      'id': 1479,
                      'name': 'Hàng Trung quốc',
                      'pid': 1478
                    },
                    {
                      'id': 1480,
                      'name': 'Hàng Hàn Quốc',
                      'pid': 1478
                    },
                    {
                      'id': 1481,
                      'name': 'Hàng Nhật Bản',
                      'pid': 1478
                    },
                    {
                      'id': 1482,
                      'name': 'Hàng Mỹ',
                      'pid': 1478
                    },
                    {
                      'id': 1483,
                      'name': 'hàng Tây ban nha',
                      'pid': 1478
                    },
                    {
                      'id': 1484,
                      'name': 'Hàng Đức',
                      'pid': 1478
                    },
                    {
                      'id': 1485,
                      'name': 'Hàng tiệp',
                      'pid': 1478
                    },
                    {
                      'id': 1486,
                      'name': 'Hàng Hongkong',
                      'pid': 1478
                    },
                    {
                      'id': 1487,
                      'name': 'Hàng Thái',
                      'pid': 1478
                    },
                    {
                      'id': 1488,
                      'name': 'Hàng UK',
                      'pid': 1478
                    },
                    {
                      'id': 1489,
                      'name': 'Hàng Canada',
                      'pid': 1478
                    },
                    {
                      'id': 1490,
                      'name': 'Hàng Australia',
                      'pid': 1478
                    },
                    {
                      'id': 1491,
                      'name': 'Hàng Đài Loan',
                      'pid': 1478
                    },
                    {
                      'id': 1664,
                      'name': 'Hàng châu Âu',
                      'pid': 1478
                    },
                    {
                      'id': 1680,
                      'name': 'Hàng Pháp',
                      'pid': 1478
                    }
                  ]
                },
                {
                  'id': 1492,
                  'name': 'Mua bán ký gửi',
                  'pid': 1467
                },
                {
                  'id': 1493,
                  'name': 'Mua bán đồ cổ',
                  'pid': 1467
                },
                {
                  'id': 1494,
                  'name': 'Mua đồ cũ',
                  'pid': 1467
                }
              ]
            }
          ]
        },
        {
          'id': 1112,
          'name': 'Hoạt động xã hội',
          'pid': 185,
          'children': [
            {
              'id': 1113,
              'name': 'Giáo dục và phát triển con người',
              'pid': 1112
            },
            {
              'id': 1114,
              'name': 'Hoạt động Y tế - sức khỏe',
              'pid': 1112
            },
            {
              'id': 1115,
              'name': 'Văn hóa nghệ thuật (bảo tồn di sản)',
              'pid': 1112
            },
            {
              'id': 1116,
              'name': 'Quyền con người',
              'pid': 1112
            },
            {
              'id': 1117,
              'name': 'Phát triển kinh tế',
              'pid': 1112
            },
            {
              'id': 1118,
              'name': 'Hỗ trợ pháp lý',
              'pid': 1112
            },
            {
              'id': 1119,
              'name': 'Môi trường - động vật',
              'pid': 1112
            },
            {
              'id': 1120,
              'name': 'Hoạt động tri ân',
              'pid': 1112
            },
            {
              'id': 1121,
              'name': 'Hoạt động an sinh xã hội',
              'pid': 1112
            },
            {
              'id': 1122,
              'name': 'Giải cứu nông sản',
              'pid': 1112
            },
            {
              'id': 1123,
              'name': 'Thanh niên tình nguyện',
              'pid': 1112
            },
            {
              'id': 1124,
              'name': 'Hiệp sĩ tp HCM',
              'pid': 1112
            }
          ]
        },
        {
          'id': 1395,
          'name': 'Hoạt động đoàn thể',
          'pid': 185,
          'children': [
            {
              'id': 1396,
              'name': 'Công đoàn công ty',
              'pid': 1395
            },
            {
              'id': 1397,
              'name': 'Công đoàn trường',
              'pid': 1395
            },
            {
              'id': 1398,
              'name': 'Công đoàn công giáo',
              'pid': 1395
            },
            {
              'id': 1399,
              'name': 'Đoàn thanh niên thôn/xã',
              'pid': 1395
            },
            {
              'id': 1566,
              'name': 'Đội văn nghệ',
              'pid': 1395
            }
          ]
        },
        {
          'id': 1454,
          'name': 'Tâm sự',
          'pid': 185,
          'children': [
            {
              'id': 1455,
              'name': 'Tâm sự chị em',
              'pid': 1454
            },
            {
              'id': 1456,
              'name': 'Tâm sự anh em',
              'pid': 1454
            },
            {
              'id': 1457,
              'name': 'Tâm sự chuyện thầm kín',
              'pid': 1454
            },
            {
              'id': 1458,
              'name': 'Tâm sự tình yêu',
              'pid': 1454
            },
            {
              'id': 1459,
              'name': 'Tâm sự cuộc sống',
              'pid': 1454
            },
            {
              'id': 1460,
              'name': 'Tâm sự gia đình',
              'pid': 1454
            },
            {
              'id': 1461,
              'name': 'Tâm sự hôn nhân',
              'pid': 1454
            },
            {
              'id': 1462,
              'name': 'Tâm sự tuổi teen',
              'pid': 1454
            },
            {
              'id': 1463,
              'name': 'Tâm sự tuổi 2x',
              'pid': 1454
            },
            {
              'id': 1464,
              'name': 'Tâm sự tuổi 3x',
              'pid': 1454
            },
            {
              'id': 1465,
              'name': 'Tâm sự tuổi trung niên',
              'pid': 1454
            },
            {
              'id': 1466,
              'name': 'Tâm sự tuổi già',
              'pid': 1454
            }
          ]
        },
        {
          'id': 1598,
          'name': 'Thuê/cho thuê',
          'pid': 185,
          'children': [
            {
              'id': 1599,
              'name': 'Thuê/cho thuê xe',
              'pid': 1598,
              'children': [
                {
                  'id': 1600,
                  'name': 'Thuê xe máy',
                  'pid': 1599
                },
                {
                  'id': 1601,
                  'name': 'Thuê ô tô',
                  'pid': 1599,
                  'children': [
                    {
                      'id': 1631,
                      'name': 'Thuê xe cưới',
                      'pid': 1601
                    },
                    {
                      'id': 1632,
                      'name': 'Thuê xe tự lái',
                      'pid': 1601
                    },
                    {
                      'id': 1638,
                      'name': 'Thuê xe tải',
                      'pid': 1601
                    },
                    {
                      'id': 1667,
                      'name': 'Thuê xe du lịch',
                      'pid': 1601
                    }
                  ]
                },
                {
                  'id': 1602,
                  'name': 'Thuê xe đạp',
                  'pid': 1599
                }
              ]
            },
            {
              'id': 1603,
              'name': 'Thuê/cho thuê BĐS',
              'pid': 1598,
              'children': [
                {
                  'id': 1604,
                  'name': 'Thuê nhà',
                  'pid': 1603
                },
                {
                  'id': 1605,
                  'name': 'Thuê căn hộ',
                  'pid': 1603
                },
                {
                  'id': 1606,
                  'name': 'Thuê biệt thự',
                  'pid': 1603
                },
                {
                  'id': 1607,
                  'name': 'Thuê condotel',
                  'pid': 1603
                },
                {
                  'id': 1623,
                  'name': 'Thuê văn phòng',
                  'pid': 1603
                },
                {
                  'id': 1624,
                  'name': 'Thuê kho bãi/kho xưởng',
                  'pid': 1603
                },
                {
                  'id': 1625,
                  'name': 'Thuê trang trại',
                  'pid': 1603
                },
                {
                  'id': 1626,
                  'name': 'Thuê đất',
                  'pid': 1603
                },
                {
                  'id': 1640,
                  'name': 'Thuê kiot, cửa hàng',
                  'pid': 1603
                },
                {
                  'id': 1665,
                  'name': 'Thuê phòng trọ',
                  'pid': 1603
                },
                {
                  'id': 1666,
                  'name': 'Thuê mặt bằng',
                  'pid': 1603
                }
              ]
            },
            {
              'id': 1608,
              'name': 'Thuê/cho thuê vật dụng',
              'pid': 1598,
              'children': [
                {
                  'id': 1609,
                  'name': 'Thuê bàn ghế',
                  'pid': 1608
                },
                {
                  'id': 1610,
                  'name': 'Thuê phông bạt',
                  'pid': 1608
                },
                {
                  'id': 1611,
                  'name': 'Thuê bát đũa',
                  'pid': 1608
                },
                {
                  'id': 1612,
                  'name': 'Thuê rạp/nhà bạt',
                  'pid': 1608
                },
                {
                  'id': 1613,
                  'name': 'Thuê cổng chào',
                  'pid': 1608
                },
                {
                  'id': 1614,
                  'name': 'Thuê quạt công nghiệp',
                  'pid': 1608
                },
                {
                  'id': 1615,
                  'name': 'Thuê máy ảnh',
                  'pid': 1608
                },
                {
                  'id': 1616,
                  'name': 'Thuê điện thoại',
                  'pid': 1608
                },
                {
                  'id': 1617,
                  'name': 'Thuê laptop/máy tính',
                  'pid': 1608
                },
                {
                  'id': 1618,
                  'name': 'Thuê loa đài',
                  'pid': 1608
                },
                {
                  'id': 1627,
                  'name': 'Thuê đồ chơi',
                  'pid': 1608
                },
                {
                  'id': 1628,
                  'name': 'Thuê lều trại',
                  'pid': 1608
                },
                {
                  'id': 1630,
                  'name': 'Thuê máy hút sữa',
                  'pid': 1608
                },
                {
                  'id': 1646,
                  'name': 'Thuê truyện',
                  'pid': 1608
                },
                {
                  'id': 1647,
                  'name': 'Thuê băng đĩa',
                  'pid': 1608
                },
                {
                  'id': 1648,
                  'name': 'Thuê TV',
                  'pid': 1608
                },
                {
                  'id': 1649,
                  'name': 'Thuê máy chiếu',
                  'pid': 1608
                }
              ]
            },
            {
              'id': 1619,
              'name': 'Thuê/cho thuê quần áo',
              'pid': 1598,
              'children': [
                {
                  'id': 1620,
                  'name': 'Thuê áo cưới',
                  'pid': 1619
                },
                {
                  'id': 1621,
                  'name': 'Thuê áo dài',
                  'pid': 1619
                },
                {
                  'id': 1622,
                  'name': 'Thuê trang phục biểu diễn',
                  'pid': 1619
                }
              ]
            },
            {
              'id': 1629,
              'name': 'Thuê studio',
              'pid': 1598
            },
            {
              'id': 1633,
              'name': 'Thuê/cho thuê DV khác',
              'pid': 1598,
              'children': [
                {
                  'id': 1634,
                  'name': 'Thuê làm đồ án/luận văn',
                  'pid': 1633
                },
                {
                  'id': 1635,
                  'name': 'Cày game thuê',
                  'pid': 1633
                },
                {
                  'id': 1636,
                  'name': 'Thuê PG',
                  'pid': 1633
                },
                {
                  'id': 1637,
                  'name': 'Thuê người yêu',
                  'pid': 1633
                },
                {
                  'id': 1639,
                  'name': 'Đòi nợ thuê',
                  'pid': 1633
                },
                {
                  'id': 1641,
                  'name': 'Học thuê - thi hộ',
                  'pid': 1633
                },
                {
                  'id': 1642,
                  'name': 'Đẻ thuê - mang thai hộ',
                  'pid': 1633
                },
                {
                  'id': 1643,
                  'name': 'Đánh máy thuê',
                  'pid': 1633
                },
                {
                  'id': 1644,
                  'name': 'Nấu cỗ thuê',
                  'pid': 1633
                },
                {
                  'id': 1645,
                  'name': 'Thuê ca sĩ/nhạc công',
                  'pid': 1633
                },
                {
                  'id': 1650,
                  'name': 'Thuê trang điểm',
                  'pid': 1633
                },
                {
                  'id': 1651,
                  'name': 'Thuê chụp ảnh',
                  'pid': 1633
                }
              ]
            }
          ]
        },
        {
          'id': 1814,
          'name': 'Tuyển dụng/Tìm việc làm',
          'pid': 185
        }
      ]
    },
    {
      'id': 39,
      'name': 'Nghệ thuật & Giải trí',
      'pid': 1,
      'children': [
        {
          'id': 40,
          'name': 'Games',
          'pid': 39,
          'children': [
            {
              'id': 1036,
              'name': 'Boardgame',
              'pid': 40,
              'children': [
                {
                  'id': 1301,
                  'name': 'Ma sói',
                  'pid': 1036
                },
                {
                  'id': 1302,
                  'name': 'Bài Uno',
                  'pid': 1036
                },
                {
                  'id': 1303,
                  'name': 'CASHFLOW',
                  'pid': 1036
                },
                {
                  'id': 1304,
                  'name': 'Tam Quốc Sát',
                  'pid': 1036
                },
                {
                  'id': 1305,
                  'name': 'DIXIT',
                  'pid': 1036
                },
                {
                  'id': 1306,
                  'name': 'THE SETTLERS OF CATAN',
                  'pid': 1036
                },
                {
                  'id': 1307,
                  'name': 'DOMINION',
                  'pid': 1036
                }
              ]
            },
            {
              'id': 1308,
              'name': 'Game chiến thuật',
              'pid': 40
            },
            {
              'id': 1309,
              'name': 'Game phiêu lưu',
              'pid': 40
            },
            {
              'id': 1310,
              'name': 'Game nhập vai',
              'pid': 40
            },
            {
              'id': 1311,
              'name': 'Game sinh tồn',
              'pid': 40
            },
            {
              'id': 1312,
              'name': 'Game hành động',
              'pid': 40
            },
            {
              'id': 1313,
              'name': 'Game mô phỏng (Simulation game)',
              'pid': 40
            }
          ]
        },
        {
          'id': 41,
          'name': 'Thế giới sao - showbiz',
          'pid': 39
        },
        {
          'id': 42,
          'name': 'Chương trình truyền hình',
          'pid': 39,
          'children': [
            {
              'id': 43,
              'name': 'Game shows',
              'pid': 42
            },
            {
              'id': 44,
              'name': 'kênh thiếu nhi',
              'pid': 42
            },
            {
              'id': 45,
              'name': 'Chương trình dạy nấu ăn',
              'pid': 42
            },
            {
              'id': 46,
              'name': 'Chương trình hài',
              'pid': 42
            },
            {
              'id': 47,
              'name': 'Thời sự',
              'pid': 42
            },
            {
              'id': 48,
              'name': 'Chương trình sitcoms',
              'pid': 42
            },
            {
              'id': 49,
              'name': 'kênh tài chính - kinh doanh',
              'pid': 42
            },
            {
              'id': 50,
              'name': 'Tài chính - tiêu dùng',
              'pid': 42
            },
            {
              'id': 51,
              'name': 'Tư vấn du lịch',
              'pid': 42
            },
            {
              'id': 52,
              'name': 'Phám phá thế giới',
              'pid': 42
            },
            {
              'id': 53,
              'name': 'Lao động và công đoàn',
              'pid': 42
            },
            {
              'id': 54,
              'name': 'Chương trình y tế',
              'pid': 42
            },
            {
              'id': 55,
              'name': 'Phim tài liệu - lịch sử',
              'pid': 42
            },
            {
              'id': 56,
              'name': 'Cuộc sống thường ngày',
              'pid': 42
            },
            {
              'id': 57,
              'name': 'Nông nghiệp và môi trường',
              'pid': 42
            },
            {
              'id': 58,
              'name': 'Kênh từ thiện',
              'pid': 42
            },
            {
              'id': 59,
              'name': 'Dự báo thời tiết',
              'pid': 42
            },
            {
              'id': 60,
              'name': 'Chương trình ẩm thực',
              'pid': 42
            },
            {
              'id': 61,
              'name': 'Phim khoa học',
              'pid': 42
            },
            {
              'id': 62,
              'name': 'Văn hóa dân gian',
              'pid': 42
            },
            {
              'id': 63,
              'name': 'Chương trình thể thao',
              'pid': 42
            }
          ]
        },
        {
          'id': 64,
          'name': 'Đọc',
          'pid': 39,
          'children': [
            {
              'id': 65,
              'name': 'Đọc sách',
              'pid': 64,
              'children': [
                {
                  'id': 125,
                  'name': 'Sách văn học',
                  'pid': 65,
                  'children': [
                    {
                      'id': 126,
                      'name': 'Phê bình văn học',
                      'pid': 125
                    },
                    {
                      'id': 127,
                      'name': 'Du ký',
                      'pid': 125
                    },
                    {
                      'id': 128,
                      'name': 'Phóng sự - bút ký',
                      'pid': 125
                    },
                    {
                      'id': 129,
                      'name': 'Tiểu sử - hồi ký',
                      'pid': 125
                    },
                    {
                      'id': 130,
                      'name': 'Văn học dân gian',
                      'pid': 125
                    },
                    {
                      'id': 131,
                      'name': 'Hán Nôm',
                      'pid': 125
                    },
                    {
                      'id': 132,
                      'name': 'Thơ',
                      'pid': 125
                    },
                    {
                      'id': 1314,
                      'name': 'Tiểu thuyết',
                      'pid': 125
                    },
                    {
                      'id': 1325,
                      'name': 'Văn học nước ngoài',
                      'pid': 125
                    }
                  ]
                },
                {
                  'id': 1259,
                  'name': 'sách kinh tế',
                  'pid': 65,
                  'children': [
                    {
                      'id': 1251,
                      'name': 'Sách quản trị nhân lực',
                      'pid': 1259
                    },
                    {
                      'id': 1252,
                      'name': 'Sách quản trị lãnh đạo',
                      'pid': 1259
                    },
                    {
                      'id': 1253,
                      'name': 'Sách tài chính kế toán',
                      'pid': 1259
                    },
                    {
                      'id': 1254,
                      'name': 'Sách tài chính tiền tệ',
                      'pid': 1259
                    },
                    {
                      'id': 1329,
                      'name': 'Sách kinh tế học',
                      'pid': 1259
                    },
                    {
                      'id': 1330,
                      'name': 'Sách bài học kinh doanh',
                      'pid': 1259
                    },
                    {
                      'id': 1331,
                      'name': 'Sách doanh nhân',
                      'pid': 1259
                    },
                    {
                      'id': 1332,
                      'name': 'Sách quản trị nhân lực',
                      'pid': 1259
                    },
                    {
                      'id': 1333,
                      'name': 'Sách kỹ năng làm việc',
                      'pid': 1259
                    },
                    {
                      'id': 1334,
                      'name': 'Sách marketing - bán hàng',
                      'pid': 1259
                    }
                  ]
                },
                {
                  'id': 1262,
                  'name': 'Sách kỹ năng sống',
                  'pid': 65,
                  'children': [
                    {
                      'id': 1255,
                      'name': 'Sách đạo đức kỹ năng sống',
                      'pid': 1262
                    },
                    {
                      'id': 1326,
                      'name': 'Sách nghệ thuật sống đẹp',
                      'pid': 1262
                    },
                    {
                      'id': 1327,
                      'name': 'Tư duy - kỹ năng sống',
                      'pid': 1262
                    },
                    {
                      'id': 1328,
                      'name': 'Sách hướng nghiệp',
                      'pid': 1262
                    }
                  ]
                },
                {
                  'id': 1267,
                  'name': 'Sách kiến thức tổng hợp',
                  'pid': 65,
                  'children': [
                    {
                      'id': 1256,
                      'name': 'Sách kiến thức bách khoa',
                      'pid': 1267
                    }
                  ]
                },
                {
                  'id': 1261,
                  'name': 'Sách thiếu nhi',
                  'pid': 65,
                  'children': [
                    {
                      'id': 1257,
                      'name': 'Sách mẫu giáo',
                      'pid': 1261
                    },
                    {
                      'id': 1258,
                      'name': 'Sách ngoại ngữ thiếu nhi',
                      'pid': 1261
                    },
                    {
                      'id': 1335,
                      'name': 'Sách nhi đồng',
                      'pid': 1261
                    },
                    {
                      'id': 1336,
                      'name': 'Sách thiếu niên',
                      'pid': 1261
                    }
                  ]
                },
                {
                  'id': 1263,
                  'name': 'Sách bà mẹ - em bé',
                  'pid': 65,
                  'children': [
                    {
                      'id': 1337,
                      'name': 'Sách thai giáo',
                      'pid': 1263
                    },
                    {
                      'id': 1338,
                      'name': 'Sách kiến thức - kỹ năng cho trẻ',
                      'pid': 1263
                    },
                    {
                      'id': 1339,
                      'name': 'Sách làm cha mẹ',
                      'pid': 1263
                    },
                    {
                      'id': 1340,
                      'name': 'Sách dinh dưỡng - sức khỏe cho bé',
                      'pid': 1263
                    }
                  ]
                },
                {
                  'id': 1264,
                  'name': 'Sách giáo khoa',
                  'pid': 65
                },
                {
                  'id': 1265,
                  'name': 'Sách tham khảo',
                  'pid': 65
                },
                {
                  'id': 1266,
                  'name': 'Giáo trình ĐH - CĐ',
                  'pid': 65
                },
                {
                  'id': 1268,
                  'name': 'Sách lịch sử',
                  'pid': 65,
                  'children': [
                    {
                      'id': 1341,
                      'name': 'Sách lịch sử thế giới',
                      'pid': 1268
                    },
                    {
                      'id': 1342,
                      'name': 'Sách lịch sử việt nam',
                      'pid': 1268
                    }
                  ]
                },
                {
                  'id': 1269,
                  'name': 'Sách khoa học - kỹ thuật',
                  'pid': 65
                },
                {
                  'id': 1270,
                  'name': 'Điện ảnh - nhạc - họa',
                  'pid': 65
                },
                {
                  'id': 1271,
                  'name': 'Sách tôn giáo - tâm linh',
                  'pid': 65
                },
                {
                  'id': 1272,
                  'name': 'Sách văn hóa - du lịch',
                  'pid': 65
                },
                {
                  'id': 1273,
                  'name': 'Sách chính trị - pháp lý',
                  'pid': 65
                },
                {
                  'id': 1274,
                  'name': 'Sách nông - lâm - ngư nghiệp',
                  'pid': 65
                },
                {
                  'id': 1275,
                  'name': 'Sách công nghệ thông tin',
                  'pid': 65
                },
                {
                  'id': 1276,
                  'name': 'Sách Y học',
                  'pid': 65
                },
                {
                  'id': 1277,
                  'name': 'Tạp chí - catalogue',
                  'pid': 65
                },
                {
                  'id': 1278,
                  'name': 'sách tâm lý - giới tính',
                  'pid': 65
                },
                {
                  'id': 1279,
                  'name': 'Sách thường thức - cuộc sống',
                  'pid': 65
                }
              ]
            },
            {
              'id': 66,
              'name': 'Đọc báo',
              'pid': 64,
              'children': [
                {
                  'id': 67,
                  'name': 'Báo giấy',
                  'pid': 66
                },
                {
                  'id': 68,
                  'name': 'Báo mạng',
                  'pid': 66
                }
              ]
            },
            {
              'id': 69,
              'name': 'Đọc truyện',
              'pid': 64,
              'children': [
                {
                  'id': 70,
                  'name': 'Ngôn tình',
                  'pid': 69
                },
                {
                  'id': 71,
                  'name': 'Truyện tranh',
                  'pid': 69
                },
                {
                  'id': 72,
                  'name': 'Tiểu thuyết ngắn',
                  'pid': 69
                },
                {
                  'id': 73,
                  'name': 'Truyện kinh điển',
                  'pid': 69
                },
                {
                  'id': 1319,
                  'name': 'Truyện kiếm hiệp',
                  'pid': 69
                },
                {
                  'id': 1320,
                  'name': 'Truyện kinh dị',
                  'pid': 69
                },
                {
                  'id': 1321,
                  'name': 'Truyện huyền bí giả tưởng',
                  'pid': 69
                },
                {
                  'id': 1322,
                  'name': 'Truyện cổ tích',
                  'pid': 69
                },
                {
                  'id': 1323,
                  'name': 'Truyện ngắn',
                  'pid': 69
                },
                {
                  'id': 1324,
                  'name': 'Truyện hồi ký',
                  'pid': 69
                }
              ]
            },
            {
              'id': 1567,
              'name': 'Đọc tin tức MXH',
              'pid': 64
            },
            {
              'id': 1568,
              'name': 'Đọc tin/truyện hài hước',
              'pid': 64
            },
            {
              'id': 1583,
              'name': 'Trích dẫn hay',
              'pid': 64,
              'children': [
                {
                  'id': 1584,
                  'name': 'Status buồn & tâm trạng',
                  'pid': 1583
                },
                {
                  'id': 1585,
                  'name': 'status tình yêu',
                  'pid': 1583
                },
                {
                  'id': 1586,
                  'name': 'Status vui',
                  'pid': 1583
                },
                {
                  'id': 1587,
                  'name': 'Status về cuộc sống',
                  'pid': 1583
                }
              ]
            }
          ]
        },
        {
          'id': 74,
          'name': 'Nghệ thuật',
          'pid': 39,
          'children': [
            {
              'id': 75,
              'name': 'Hội họa',
              'pid': 74
            },
            {
              'id': 76,
              'name': 'Điêu khắc',
              'pid': 74
            },
            {
              'id': 77,
              'name': 'Phim',
              'pid': 74,
              'children': [
                {
                  'id': 78,
                  'name': 'Hình thức xem phim',
                  'pid': 77,
                  'children': [
                    {
                      'id': 79,
                      'name': 'Xem phim rạp',
                      'pid': 78
                    },
                    {
                      'id': 80,
                      'name': 'Xem phim tại nhà',
                      'pid': 78
                    },
                    {
                      'id': 81,
                      'name': 'Xem phim tại quán cafe',
                      'pid': 78
                    }
                  ]
                },
                {
                  'id': 82,
                  'name': 'Thể loại phim',
                  'pid': 77,
                  'children': [
                    {
                      'id': 83,
                      'name': 'Phim hành động',
                      'pid': 82
                    },
                    {
                      'id': 84,
                      'name': 'Phim phiêu lưu',
                      'pid': 82
                    },
                    {
                      'id': 85,
                      'name': 'Phim hài',
                      'pid': 82
                    },
                    {
                      'id': 86,
                      'name': 'Phim kinh dị',
                      'pid': 82
                    },
                    {
                      'id': 87,
                      'name': 'Phim khoa học viễn tưởng',
                      'pid': 82
                    },
                    {
                      'id': 88,
                      'name': 'Phim tài liệu',
                      'pid': 82
                    },
                    {
                      'id': 89,
                      'name': 'Phim lãng mạn',
                      'pid': 82
                    },
                    {
                      'id': 90,
                      'name': 'Phim hoạt hình',
                      'pid': 82
                    },
                    {
                      'id': 91,
                      'name': 'Phim lịch sử',
                      'pid': 82
                    },
                    {
                      'id': 1185,
                      'name': 'Phim viễn tây',
                      'pid': 82
                    },
                    {
                      'id': 1186,
                      'name': 'Phim thần thoại',
                      'pid': 82
                    },
                    {
                      'id': 1187,
                      'name': 'Phim thể thao',
                      'pid': 82
                    }
                  ]
                }
              ]
            },
            {
              'id': 92,
              'name': 'Âm nhạc',
              'pid': 74,
              'children': [
                {
                  'id': 93,
                  'name': 'Ca nhạc',
                  'pid': 92,
                  'children': [
                    {
                      'id': 94,
                      'name': 'Hình thức nghe nhạc',
                      'pid': 93,
                      'children': [
                        {
                          'id': 95,
                          'name': 'Nghe nhạc tại quán cafe/bar/phòng trà',
                          'pid': 94
                        },
                        {
                          'id': 96,
                          'name': 'Nghe nhạc liveshow',
                          'pid': 94
                        },
                        {
                          'id': 97,
                          'name': 'Nghe nhạc online',
                          'pid': 94
                        },
                        {
                          'id': 98,
                          'name': 'Nghe nhạc CD',
                          'pid': 94
                        }
                      ]
                    },
                    {
                      'id': 99,
                      'name': 'Thể loại nhạc',
                      'pid': 93,
                      'children': [
                        {
                          'id': 100,
                          'name': 'Pop',
                          'pid': 99
                        },
                        {
                          'id': 101,
                          'name': 'Rock',
                          'pid': 99
                        },
                        {
                          'id': 102,
                          'name': 'Jazz',
                          'pid': 99
                        },
                        {
                          'id': 103,
                          'name': 'Blues',
                          'pid': 99
                        },
                        {
                          'id': 104,
                          'name': 'R&B/Soul',
                          'pid': 99
                        },
                        {
                          'id': 105,
                          'name': 'Hip Hop',
                          'pid': 99
                        },
                        {
                          'id': 106,
                          'name': 'Country',
                          'pid': 99
                        },
                        {
                          'id': 107,
                          'name': 'Folk đương đại',
                          'pid': 99
                        },
                        {
                          'id': 108,
                          'name': 'Electronic/Dance',
                          'pid': 99
                        },
                        {
                          'id': 109,
                          'name': 'Mỹ Latinh',
                          'pid': 99
                        },
                        {
                          'id': 110,
                          'name': 'K-Pop',
                          'pid': 99
                        },
                        {
                          'id': 111,
                          'name': 'Bolero',
                          'pid': 99
                        },
                        {
                          'id': 112,
                          'name': 'Tiền chiến',
                          'pid': 99
                        },
                        {
                          'id': 113,
                          'name': 'Nhạc thiếu nhi',
                          'pid': 99
                        },
                        {
                          'id': 114,
                          'name': 'Cổ điển',
                          'pid': 99
                        },
                        {
                          'id': 115,
                          'name': 'Dân ca, nhạc cổ truyền',
                          'pid': 99
                        },
                        {
                          'id': 116,
                          'name': 'Nhạc không lời',
                          'pid': 99
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'id': 117,
              'name': 'Nghệ thuật kiến trúc',
              'pid': 74
            },
            {
              'id': 118,
              'name': 'Sân khấu',
              'pid': 74,
              'children': [
                {
                  'id': 119,
                  'name': 'Chèo',
                  'pid': 118
                },
                {
                  'id': 120,
                  'name': 'Múa rối',
                  'pid': 118
                },
                {
                  'id': 121,
                  'name': 'Tuồng',
                  'pid': 118
                },
                {
                  'id': 122,
                  'name': 'Cải lương',
                  'pid': 118
                },
                {
                  'id': 123,
                  'name': 'Kịch hiện đại',
                  'pid': 118
                }
              ]
            },
            {
              'id': 124,
              'name': 'Văn chương',
              'pid': 74
            },
            {
              'id': 133,
              'name': 'Múa',
              'pid': 74
            }
          ]
        },
        {
          'id': 134,
          'name': 'Radio',
          'pid': 39
        }
      ]
    },
    {
      'id': 135,
      'name': 'Gia đình và các mối quan hệ',
      'pid': 1,
      'children': [
        {
          'id': 136,
          'name': 'Họ hàng/Dòng họ',
          'pid': 135,
          'children': [
            {
              'id': 784,
              'name': 'Họ Trịnh',
              'pid': 136
            },
            {
              'id': 785,
              'name': 'Họ Nguyễn',
              'pid': 136
            },
            {
              'id': 786,
              'name': 'Họ Vũ',
              'pid': 136
            },
            {
              'id': 787,
              'name': 'Họ Trần',
              'pid': 136
            },
            {
              'id': 788,
              'name': 'Họ Phạm',
              'pid': 136
            },
            {
              'id': 789,
              'name': 'Họ Hoàng',
              'pid': 136
            },
            {
              'id': 790,
              'name': 'Họ Phan',
              'pid': 136
            },
            {
              'id': 791,
              'name': 'Họ Đặng',
              'pid': 136
            },
            {
              'id': 792,
              'name': 'Họ Đỗ',
              'pid': 136
            },
            {
              'id': 793,
              'name': 'Họ Bùi',
              'pid': 136
            },
            {
              'id': 794,
              'name': 'Họ Lý',
              'pid': 136
            },
            {
              'id': 795,
              'name': 'Họ Đặng',
              'pid': 136
            },
            {
              'id': 796,
              'name': 'Họ Dương',
              'pid': 136
            },
            {
              'id': 797,
              'name': 'Họ Ngô',
              'pid': 136
            },
            {
              'id': 884,
              'name': 'họ Đoàn',
              'pid': 136
            },
            {
              'id': 1035,
              'name': 'họ Võ',
              'pid': 136
            },
            {
              'id': 1227,
              'name': 'Họ Lê',
              'pid': 136
            }
          ]
        },
        {
          'id': 137,
          'name': 'Đồng hương',
          'pid': 135,
          'children': [
            {
              'id': 798,
              'name': 'Hà Tây',
              'pid': 137
            },
            {
              'id': 799,
              'name': 'Hà Nam',
              'pid': 137
            },
            {
              'id': 800,
              'name': 'Ninh Bình',
              'pid': 137
            },
            {
              'id': 801,
              'name': 'Phú Thọ',
              'pid': 137
            },
            {
              'id': 802,
              'name': 'Vĩnh Phúc',
              'pid': 137
            },
            {
              'id': 803,
              'name': 'Thanh Hóa',
              'pid': 137
            },
            {
              'id': 804,
              'name': 'Lạng Sơn',
              'pid': 137
            },
            {
              'id': 805,
              'name': 'Tuyên Quang',
              'pid': 137
            },
            {
              'id': 806,
              'name': 'Lào Cai',
              'pid': 137
            },
            {
              'id': 807,
              'name': 'Điện Biên',
              'pid': 137
            },
            {
              'id': 808,
              'name': 'Lai Châu',
              'pid': 137
            },
            {
              'id': 809,
              'name': 'Bắc Kạn',
              'pid': 137
            },
            {
              'id': 810,
              'name': 'Cao Bằng',
              'pid': 137
            },
            {
              'id': 811,
              'name': 'Hải Phòng',
              'pid': 137
            },
            {
              'id': 812,
              'name': 'Nam Định',
              'pid': 137
            },
            {
              'id': 813,
              'name': 'Quảng Ninh',
              'pid': 137
            },
            {
              'id': 814,
              'name': 'Nghệ An',
              'pid': 137
            },
            {
              'id': 815,
              'name': 'Hà Tĩnh',
              'pid': 137
            },
            {
              'id': 816,
              'name': 'Hòa Bình',
              'pid': 137
            },
            {
              'id': 817,
              'name': 'Hưng Yên',
              'pid': 137
            },
            {
              'id': 818,
              'name': 'Hải Dương',
              'pid': 137
            },
            {
              'id': 819,
              'name': 'Hà Giang',
              'pid': 137
            },
            {
              'id': 820,
              'name': 'Thái Bình',
              'pid': 137
            },
            {
              'id': 821,
              'name': 'Thái Nguyên',
              'pid': 137
            },
            {
              'id': 822,
              'name': 'Huế',
              'pid': 137
            },
            {
              'id': 823,
              'name': 'Đà Nẵng',
              'pid': 137
            },
            {
              'id': 824,
              'name': 'Quảng Nam',
              'pid': 137
            },
            {
              'id': 825,
              'name': 'Quảng Bình',
              'pid': 137
            },
            {
              'id': 826,
              'name': 'Quảng Trị',
              'pid': 137
            },
            {
              'id': 827,
              'name': 'Quảng Ngãi',
              'pid': 137
            },
            {
              'id': 828,
              'name': 'Bình Dương',
              'pid': 137
            },
            {
              'id': 829,
              'name': 'Bình Thuận',
              'pid': 137
            },
            {
              'id': 830,
              'name': 'Bình Phước',
              'pid': 137
            },
            {
              'id': 831,
              'name': 'Bình Định',
              'pid': 137
            },
            {
              'id': 832,
              'name': 'Bến Tre',
              'pid': 137
            },
            {
              'id': 833,
              'name': 'Cần Thơ',
              'pid': 137
            },
            {
              'id': 834,
              'name': 'Đăk Lắc',
              'pid': 137
            },
            {
              'id': 835,
              'name': 'Lâm Đồng',
              'pid': 137
            },
            {
              'id': 836,
              'name': 'Đăk Nông',
              'pid': 137
            },
            {
              'id': 837,
              'name': 'Đồng Nai',
              'pid': 137
            },
            {
              'id': 838,
              'name': 'Vũng Tàu',
              'pid': 137
            },
            {
              'id': 839,
              'name': 'Nha Trang',
              'pid': 137
            },
            {
              'id': 840,
              'name': 'Long An',
              'pid': 137
            },
            {
              'id': 841,
              'name': 'Sơn La',
              'pid': 137
            },
            {
              'id': 842,
              'name': 'Sóc Trăng',
              'pid': 137
            },
            {
              'id': 843,
              'name': 'Cà Mau',
              'pid': 137
            },
            {
              'id': 844,
              'name': 'Vĩnh Long',
              'pid': 137
            },
            {
              'id': 845,
              'name': 'Yên Bái',
              'pid': 137
            },
            {
              'id': 846,
              'name': 'Kon Tum',
              'pid': 137
            },
            {
              'id': 847,
              'name': 'Gia Lai',
              'pid': 137
            },
            {
              'id': 848,
              'name': 'Hậu Giang',
              'pid': 137
            },
            {
              'id': 849,
              'name': 'Phú Yên',
              'pid': 137
            },
            {
              'id': 850,
              'name': 'Tiền Giang',
              'pid': 137
            },
            {
              'id': 851,
              'name': 'Kiên Giang',
              'pid': 137
            }
          ]
        },
        {
          'id': 141,
          'name': 'Bạn bè',
          'pid': 135,
          'children': [
            {
              'id': 138,
              'name': 'Bạn đồng môn',
              'pid': 141
            },
            {
              'id': 140,
              'name': 'Bạn đồng niên',
              'pid': 141
            },
            {
              'id': 1300,
              'name': 'Bạn thân',
              'pid': 141
            },
            {
              'id': 1400,
              'name': 'Kết bạn/làm quen',
              'pid': 141
            }
          ]
        },
        {
          'id': 139,
          'name': 'Đồng nghiệp',
          'pid': 135
        },
        {
          'id': 142,
          'name': 'Chăm sóc con cái',
          'pid': 135,
          'children': [
            {
              'id': 1146,
              'name': 'Cho trẻ ra ngoài chơi',
              'pid': 142
            },
            {
              'id': 1147,
              'name': 'Giáo dục sớm',
              'pid': 142
            },
            {
              'id': 1148,
              'name': 'Tìm trường cho con',
              'pid': 142,
              'children': [
                {
                  'id': 1149,
                  'name': 'Tìm trường mầm non',
                  'pid': 1148
                },
                {
                  'id': 1150,
                  'name': 'Tìm trường tiểu học',
                  'pid': 1148
                },
                {
                  'id': 1151,
                  'name': 'Tìm trường cấp 2',
                  'pid': 1148
                },
                {
                  'id': 1152,
                  'name': 'Tìm trường cấp 3',
                  'pid': 1148
                }
              ]
            },
            {
              'id': 1153,
              'name': 'Nuôi con bằng sữa mẹ',
              'pid': 142
            },
            {
              'id': 1411,
              'name': 'Nhận con nuôi',
              'pid': 142
            }
          ]
        },
        {
          'id': 143,
          'name': 'Hôn nhân/ Vợ chồng',
          'pid': 135,
          'children': [
            {
              'id': 1402,
              'name': 'Các vấn đề hôn nhân gia đình',
              'pid': 143,
              'children': [
                {
                  'id': 365,
                  'name': 'Ngoại tình',
                  'pid': 1402
                },
                {
                  'id': 366,
                  'name': 'Phản đối ngoại tình',
                  'pid': 1402
                },
                {
                  'id': 1403,
                  'name': 'Tư vấn hôn nhân',
                  'pid': 1402
                }
              ]
            },
            {
              'id': 1404,
              'name': 'Kết hôn',
              'pid': 143,
              'children': [
                {
                  'id': 1042,
                  'name': 'Dịch vụ kết hôn nước ngoài',
                  'pid': 1404,
                  'children': [
                    {
                      'id': 1038,
                      'name': 'Lấy chồng Hàn Quốc',
                      'pid': 1042
                    },
                    {
                      'id': 1039,
                      'name': 'Lấy chồng Đài Loan',
                      'pid': 1042
                    },
                    {
                      'id': 1040,
                      'name': 'lấy chồng Nhật Bản',
                      'pid': 1042
                    },
                    {
                      'id': 1041,
                      'name': 'lấy chồng Trung Quốc',
                      'pid': 1042
                    },
                    {
                      'id': 1043,
                      'name': 'Lấy chồng Singapore',
                      'pid': 1042
                    }
                  ]
                },
                {
                  'id': 1045,
                  'name': 'Lấy chồng nước ngoài',
                  'pid': 1404
                },
                {
                  'id': 1406,
                  'name': 'Cưới hỏi',
                  'pid': 1404
                },
                {
                  'id': 1407,
                  'name': 'Mai mối',
                  'pid': 1404
                }
              ]
            },
            {
              'id': 1046,
              'name': 'Theo ngành nghề',
              'pid': 143,
              'children': [
                {
                  'id': 1047,
                  'name': 'Lấy vợ/chồng bộ đội',
                  'pid': 1046
                },
                {
                  'id': 1048,
                  'name': 'lấy vợ/chồng công an',
                  'pid': 1046
                },
                {
                  'id': 1049,
                  'name': 'lấy vợ/chồng bác sĩ',
                  'pid': 1046
                },
                {
                  'id': 1051,
                  'name': 'lấy vợ/chồng giáo viên',
                  'pid': 1046
                },
                {
                  'id': 1052,
                  'name': 'lấy vợ/chồng ngành luật',
                  'pid': 1046
                },
                {
                  'id': 1057,
                  'name': 'Lấy vợ/chồng điện lực',
                  'pid': 1046
                }
              ]
            },
            {
              'id': 1053,
              'name': 'theo khoảng cách địa lý',
              'pid': 143,
              'children': [
                {
                  'id': 1054,
                  'name': 'Lấy chồng xa',
                  'pid': 1053
                }
              ]
            },
            {
              'id': 1055,
              'name': 'Theo tôn giáo',
              'pid': 143,
              'children': [
                {
                  'id': 1056,
                  'name': 'Lấy vợ/chồng công giáo',
                  'pid': 1055
                }
              ]
            },
            {
              'id': 1405,
              'name': 'Ly hôn',
              'pid': 143,
              'children': [
                {
                  'id': 1155,
                  'name': 'Tìm bạn đời sau ly hôn',
                  'pid': 1405
                },
                {
                  'id': 1409,
                  'name': 'phân chia tài sản sau ly hôn',
                  'pid': 1405
                },
                {
                  'id': 1410,
                  'name': 'Thủ tục ly hôn',
                  'pid': 1405
                }
              ]
            }
          ]
        },
        {
          'id': 144,
          'name': 'Cưới hỏi',
          'pid': 135
        },
        {
          'id': 1579,
          'name': 'Tình yêu',
          'pid': 135,
          'children': [
            {
              'id': 145,
              'name': 'Hẹn hò',
              'pid': 1579
            },
            {
              'id': 1580,
              'name': 'Tình yêu online',
              'pid': 1579
            },
            {
              'id': 1581,
              'name': 'Yêu xa',
              'pid': 1579
            },
            {
              'id': 1582,
              'name': 'Tìm người yêu',
              'pid': 1579
            }
          ]
        },
        {
          'id': 146,
          'name': 'Quan hệ khác',
          'pid': 135,
          'children': [
            {
              'id': 364,
              'name': 'Mẹ đơn thân',
              'pid': 146
            },
            {
              'id': 367,
              'name': 'Đồng tính',
              'pid': 146,
              'children': [
                {
                  'id': 782,
                  'name': 'Les',
                  'pid': 367
                },
                {
                  'id': 783,
                  'name': 'Gay',
                  'pid': 367
                }
              ]
            },
            {
              'id': 368,
              'name': 'Kiều nữ - đại gia',
              'pid': 146
            },
            {
              'id': 1154,
              'name': 'Vô tính (giới tính thứ 4)',
              'pid': 146
            },
            {
              'id': 1412,
              'name': 'Phi công trẻ - máy bay',
              'pid': 146
            }
          ]
        },
        {
          'id': 1401,
          'name': 'Hàng xóm',
          'pid': 135
        }
      ]
    },
    {
      'id': 147,
      'name': 'Thể thao & Rèn luyện sức khỏe',
      'pid': 1,
      'children': [
        {
          'id': 148,
          'name': 'Dinh dưỡng',
          'pid': 147
        },
        {
          'id': 149,
          'name': 'Gyms/Fitness',
          'pid': 147
        },
        {
          'id': 150,
          'name': 'Thiền',
          'pid': 147
        },
        {
          'id': 151,
          'name': 'Chạy bộ',
          'pid': 147
        },
        {
          'id': 152,
          'name': 'Đạp xe đạp',
          'pid': 147
        },
        {
          'id': 153,
          'name': 'Yoga',
          'pid': 147
        },
        {
          'id': 154,
          'name': 'Đi bộ (trekking)',
          'pid': 147
        },
        {
          'id': 155,
          'name': 'Zumba',
          'pid': 147
        },
        {
          'id': 218,
          'name': 'Thể thao',
          'pid': 147,
          'children': [
            {
              'id': 219,
              'name': 'Điền kinh/chạy bộ',
              'pid': 218
            },
            {
              'id': 220,
              'name': 'Môn thể thao có động vật',
              'pid': 218,
              'children': [
                {
                  'id': 410,
                  'name': 'Chọi gà',
                  'pid': 220
                },
                {
                  'id': 411,
                  'name': 'Đầu bò',
                  'pid': 220
                },
                {
                  'id': 412,
                  'name': 'Đua ngựa',
                  'pid': 220
                },
                {
                  'id': 413,
                  'name': 'Đua chó',
                  'pid': 220
                },
                {
                  'id': 414,
                  'name': 'Đua lạc đà',
                  'pid': 220
                },
                {
                  'id': 415,
                  'name': 'Chọi trâu',
                  'pid': 220
                }
              ]
            },
            {
              'id': 222,
              'name': 'Thể thao mạo hiểm',
              'pid': 218,
              'children': [
                {
                  'id': 416,
                  'name': 'Leo núi',
                  'pid': 222
                },
                {
                  'id': 417,
                  'name': 'Parkuor',
                  'pid': 222
                },
                {
                  'id': 418,
                  'name': 'Nhảy dù/dù lượn',
                  'pid': 222
                },
                {
                  'id': 419,
                  'name': 'Trượt ván địa hình',
                  'pid': 222
                },
                {
                  'id': 423,
                  'name': 'Lướt ván/Lướt ván buồm',
                  'pid': 222
                },
                {
                  'id': 424,
                  'name': 'Zipline',
                  'pid': 222
                }
              ]
            },
            {
              'id': 223,
              'name': 'Đua xe',
              'pid': 218
            },
            {
              'id': 224,
              'name': 'Thể thao dùng vợt',
              'pid': 218,
              'children': [
                {
                  'id': 225,
                  'name': 'Tennis',
                  'pid': 224
                },
                {
                  'id': 226,
                  'name': 'Bóng bàn',
                  'pid': 224
                },
                {
                  'id': 227,
                  'name': 'Cầu lông',
                  'pid': 224
                }
              ]
            },
            {
              'id': 228,
              'name': 'Thể thao trên băng tuyết',
              'pid': 218,
              'children': [
                {
                  'id': 408,
                  'name': 'Trượt tuyết',
                  'pid': 228
                },
                {
                  'id': 409,
                  'name': 'Trượt băng',
                  'pid': 228
                }
              ]
            },
            {
              'id': 229,
              'name': 'Thể thao nhắm vào bia, đích',
              'pid': 218,
              'children': [
                {
                  'id': 230,
                  'name': 'Golf',
                  'pid': 229
                },
                {
                  'id': 231,
                  'name': 'bắn súng',
                  'pid': 229
                },
                {
                  'id': 232,
                  'name': 'Bắn cung/nỏ',
                  'pid': 229
                }
              ]
            },
            {
              'id': 233,
              'name': 'Thể thao dưới nước',
              'pid': 218,
              'children': [
                {
                  'id': 399,
                  'name': 'Bơi lội',
                  'pid': 233
                },
                {
                  'id': 400,
                  'name': 'Bóng nước',
                  'pid': 233
                },
                {
                  'id': 403,
                  'name': 'Đua thuyền',
                  'pid': 233
                },
                {
                  'id': 405,
                  'name': 'Jet Ski',
                  'pid': 233
                },
                {
                  'id': 407,
                  'name': 'Wake boarding',
                  'pid': 233
                },
                {
                  'id': 420,
                  'name': 'Lặn biển',
                  'pid': 233
                }
              ]
            },
            {
              'id': 234,
              'name': 'Các trò chơi trí tuệ',
              'pid': 218,
              'children': [
                {
                  'id': 235,
                  'name': 'Chơi cờ',
                  'pid': 234,
                  'children': [
                    {
                      'id': 856,
                      'name': 'Cờ vua',
                      'pid': 235
                    },
                    {
                      'id': 857,
                      'name': 'Cờ tướng',
                      'pid': 235
                    }
                  ]
                },
                {
                  'id': 236,
                  'name': 'Rubik',
                  'pid': 234
                },
                {
                  'id': 422,
                  'name': 'Shogi',
                  'pid': 234
                }
              ]
            },
            {
              'id': 237,
              'name': 'Thể thao đồng đội',
              'pid': 218,
              'children': [
                {
                  'id': 238,
                  'name': 'Bóng chày',
                  'pid': 237
                },
                {
                  'id': 239,
                  'name': 'Bóng rổ',
                  'pid': 237
                },
                {
                  'id': 240,
                  'name': 'Đá cầu',
                  'pid': 237
                },
                {
                  'id': 241,
                  'name': 'Bóng bầu dục',
                  'pid': 237
                },
                {
                  'id': 242,
                  'name': 'Khúc côn cầu',
                  'pid': 237
                },
                {
                  'id': 243,
                  'name': 'Bóng chuyền',
                  'pid': 237
                },
                {
                  'id': 244,
                  'name': 'Bóng đá',
                  'pid': 237
                },
                {
                  'id': 245,
                  'name': 'Bóng ném',
                  'pid': 237
                }
              ]
            }
          ]
        },
        {
          'id': 781,
          'name': 'Khiêu vũ thể thao',
          'pid': 147
        }
      ]
    },
    {
      'id': 157,
      'name': 'Ăn uống',
      'pid': 1,
      'children': [
        {
          'id': 158,
          'name': 'Đồ uống có cồn',
          'pid': 157,
          'children': [
            {
              'id': 1130,
              'name': 'Bia',
              'pid': 158
            },
            {
              'id': 1131,
              'name': 'Rượu',
              'pid': 158
            }
          ]
        },
        {
          'id': 159,
          'name': 'Cafe/Nước giải khát',
          'pid': 157,
          'children': [
            {
              'id': 160,
              'name': 'Cafe',
              'pid': 159
            },
            {
              'id': 162,
              'name': 'Nước hoa quả, sinh tố',
              'pid': 159
            },
            {
              'id': 163,
              'name': 'Trà sữa',
              'pid': 159
            }
          ]
        },
        {
          'id': 164,
          'name': 'Nội trợ',
          'pid': 157,
          'children': [
            {
              'id': 882,
              'name': 'Làm bánh',
              'pid': 164
            },
            {
              'id': 883,
              'name': 'Nấu ăn',
              'pid': 164
            }
          ]
        },
        {
          'id': 165,
          'name': 'Ẩm thực',
          'pid': 157
        },
        {
          'id': 166,
          'name': 'Món ăn',
          'pid': 157,
          'children': [
            {
              'id': 171,
              'name': 'Bún, mì, miến, phở',
              'pid': 166
            },
            {
              'id': 174,
              'name': 'Món xôi',
              'pid': 166
            },
            {
              'id': 176,
              'name': 'Món lẩu',
              'pid': 166
            },
            {
              'id': 177,
              'name': 'Món nướng',
              'pid': 166
            },
            {
              'id': 178,
              'name': 'Món cuốn',
              'pid': 166
            },
            {
              'id': 179,
              'name': 'Đặc sản',
              'pid': 166
            },
            {
              'id': 180,
              'name': 'Hải sản',
              'pid': 166
            },
            {
              'id': 706,
              'name': 'Ăn vặt',
              'pid': 166
            },
            {
              'id': 707,
              'name': 'Bánh',
              'pid': 166,
              'children': [
                {
                  'id': 853,
                  'name': 'Bánh truyền thống',
                  'pid': 707,
                  'children': [
                    {
                      'id': 854,
                      'name': 'Bánh trung thu',
                      'pid': 853
                    }
                  ]
                },
                {
                  'id': 855,
                  'name': 'Bánh Âu',
                  'pid': 707
                }
              ]
            },
            {
              'id': 1446,
              'name': 'Bít tết',
              'pid': 166
            },
            {
              'id': 1447,
              'name': 'Pizza',
              'pid': 166
            },
            {
              'id': 1800,
              'name': 'Dimsum',
              'pid': 166
            }
          ]
        },
        {
          'id': 181,
          'name': 'Nhà hàng',
          'pid': 157,
          'children': [
            {
              'id': 182,
              'name': 'Nhà hàng sang trọng',
              'pid': 181
            },
            {
              'id': 183,
              'name': 'Quán nhậu',
              'pid': 181
            },
            {
              'id': 184,
              'name': 'Nhà hàng buffet',
              'pid': 181
            }
          ]
        }
      ]
    },
    {
      'id': 217,
      'name': 'Hoạt động ngoài trời',
      'pid': 1,
      'children': [
        {
          'id': 246,
          'name': 'Các hoạt động ngoài trời',
          'pid': 217,
          'children': [
            {
              'id': 247,
              'name': 'Du thuyền',
              'pid': 246
            },
            {
              'id': 248,
              'name': 'Tham quan sinh thái',
              'pid': 246
            },
            {
              'id': 249,
              'name': 'chèo xuống, thuyền kayak',
              'pid': 246
            },
            {
              'id': 250,
              'name': 'Tham quan bằng xe địa hình',
              'pid': 246
            },
            {
              'id': 251,
              'name': 'Picnic, dã ngoại',
              'pid': 246
            },
            {
              'id': 252,
              'name': 'Câu cá',
              'pid': 246
            },
            {
              'id': 254,
              'name': 'Trekking',
              'pid': 246
            },
            {
              'id': 255,
              'name': 'Tham quan trên không',
              'pid': 246,
              'children': [
                {
                  'id': 372,
                  'name': 'Khinh khí cầu',
                  'pid': 255
                }
              ]
            }
          ]
        },
        {
          'id': 256,
          'name': 'Võ thuật',
          'pid': 217,
          'children': [
            {
              'id': 257,
              'name': 'Võ cổ truyền Việt Nam',
              'pid': 256
            },
            {
              'id': 258,
              'name': 'Võ thuật nước ngoài',
              'pid': 256
            }
          ]
        }
      ]
    },
    {
      'id': 259,
      'name': 'Công nghệ',
      'pid': 1,
      'children': [
        {
          'id': 260,
          'name': 'Tin tức công nghệ',
          'pid': 259
        },
        {
          'id': 261,
          'name': 'Công nghệ mới',
          'pid': 259,
          'children': [
            {
              'id': 1196,
              'name': 'CNTT',
              'pid': 261,
              'children': [
                {
                  'id': 265,
                  'name': 'Blockchain/bitcoin',
                  'pid': 1196,
                  'children': [
                    {
                      'id': 266,
                      'name': 'Bit coin',
                      'pid': 265
                    },
                    {
                      'id': 267,
                      'name': 'Blockchain',
                      'pid': 265
                    }
                  ]
                },
                {
                  'id': 1197,
                  'name': 'Bộ não nhân tạo',
                  'pid': 1196
                },
                {
                  'id': 1198,
                  'name': 'Máy tính quang học',
                  'pid': 1196
                },
                {
                  'id': 1199,
                  'name': 'Máy tính lượng tử',
                  'pid': 1196
                },
                {
                  'id': 1200,
                  'name': 'Mật mã lượng tử',
                  'pid': 1196
                },
                {
                  'id': 1201,
                  'name': 'AI/Machine learning',
                  'pid': 1196
                },
                {
                  'id': 1205,
                  'name': 'IOT',
                  'pid': 1196
                }
              ]
            },
            {
              'id': 1192,
              'name': 'Viễn thông',
              'pid': 261,
              'children': [
                {
                  'id': 1193,
                  'name': 'Cloud',
                  'pid': 1192
                },
                {
                  'id': 1194,
                  'name': '4G truyền thông di động',
                  'pid': 1192
                },
                {
                  'id': 1195,
                  'name': '5G truyền thông di động',
                  'pid': 1192
                }
              ]
            },
            {
              'id': 1202,
              'name': 'Hiển thị',
              'pid': 261,
              'children': [
                {
                  'id': 1203,
                  'name': 'Màn hình 3D',
                  'pid': 1202
                },
                {
                  'id': 1204,
                  'name': 'Thực tế ảo (VR, AR)',
                  'pid': 1202
                }
              ]
            },
            {
              'id': 1206,
              'name': 'Quân sự',
              'pid': 261,
              'children': [
                {
                  'id': 1207,
                  'name': 'Áo tàng hình',
                  'pid': 1206
                },
                {
                  'id': 1208,
                  'name': 'Công nghệ tàng hình',
                  'pid': 1206
                },
                {
                  'id': 1209,
                  'name': 'Vũ khí phản vật chất',
                  'pid': 1206
                },
                {
                  'id': 1210,
                  'name': 'Vũ khí hạt nhân',
                  'pid': 1206
                }
              ]
            },
            {
              'id': 1211,
              'name': 'Năng lượng',
              'pid': 261,
              'children': [
                {
                  'id': 1212,
                  'name': 'Điện nhiệt hạch',
                  'pid': 1211
                },
                {
                  'id': 1213,
                  'name': 'Điện không dây',
                  'pid': 1211
                },
                {
                  'id': 1214,
                  'name': 'Nhiên liệu sinh học',
                  'pid': 1211
                },
                {
                  'id': 1215,
                  'name': 'Nhiên liệu hydro',
                  'pid': 1211
                },
                {
                  'id': 1216,
                  'name': 'Quang hợp nhân tạo',
                  'pid': 1211
                },
                {
                  'id': 1217,
                  'name': 'Turbine gió không khí',
                  'pid': 1211
                },
                {
                  'id': 1218,
                  'name': 'Lò phản ứng thế hệ 4',
                  'pid': 1211
                }
              ]
            },
            {
              'id': 1219,
              'name': 'Giao thông vận tải',
              'pid': 261,
              'children': [
                {
                  'id': 1220,
                  'name': 'Động cơ ion',
                  'pid': 1219
                },
                {
                  'id': 1221,
                  'name': 'Thang máy vũ trụ',
                  'pid': 1219
                },
                {
                  'id': 1222,
                  'name': 'Vận tải siêu âm',
                  'pid': 1219
                },
                {
                  'id': 1223,
                  'name': 'Xe bay',
                  'pid': 1219
                }
              ]
            },
            {
              'id': 1224,
              'name': 'Tự động hóa',
              'pid': 261,
              'children': [
                {
                  'id': 1225,
                  'name': 'Công nghệ nano phân tử',
                  'pid': 1224
                },
                {
                  'id': 1226,
                  'name': 'Xe không người lái',
                  'pid': 1224
                }
              ]
            }
          ]
        },
        {
          'id': 1191,
          'name': 'Cách mạng công nghệ 4.0',
          'pid': 259
        }
      ]
    },
    {
      'id': 275,
      'name': 'Các vấn đề chính trị & Xã hội',
      'pid': 1,
      'children': [
        {
          'id': 276,
          'name': 'Vấn đề chính trị',
          'pid': 275,
          'children': [
            {
              'id': 1597,
              'name': 'Trang tin phản động',
              'pid': 276
            }
          ]
        },
        {
          'id': 277,
          'name': 'Vấn đề xã hội',
          'pid': 275
        },
        {
          'id': 1589,
          'name': 'An ninh quốc phòng',
          'pid': 275,
          'children': [
            {
              'id': 1590,
              'name': 'Vũ khí quân sự',
              'pid': 1589
            },
            {
              'id': 1591,
              'name': 'Quân sự việt nam',
              'pid': 1589
            },
            {
              'id': 1592,
              'name': 'Khoa học quân sự',
              'pid': 1589
            },
            {
              'id': 1593,
              'name': 'Hậu cần quân sự',
              'pid': 1589
            },
            {
              'id': 1594,
              'name': 'Lịch sử quân sự',
              'pid': 1589
            },
            {
              'id': 1595,
              'name': 'Quân sự Trung Quốc',
              'pid': 1589
            },
            {
              'id': 1596,
              'name': 'Quân sự thế giới',
              'pid': 1589
            }
          ]
        }
      ]
    },
    {
      'id': 609,
      'name': 'Cộng đồng',
      'pid': 1,
      'children': [
        {
          'id': 379,
          'name': 'Cộng đồng cư trú',
          'pid': 609,
          'children': [
            {
              'id': 440,
              'name': 'Người nước ngoài sinh sống tại Việt Nam',
              'pid': 379,
              'children': [
                {
                  'id': 516,
                  'name': 'tại thành phố Hồ Chí Minh',
                  'pid': 440
                },
                {
                  'id': 517,
                  'name': 'tại Hà Nội',
                  'pid': 440
                },
                {
                  'id': 518,
                  'name': 'tại Đà Nẵng',
                  'pid': 440
                },
                {
                  'id': 519,
                  'name': 'tại Bình Dương',
                  'pid': 440
                },
                {
                  'id': 520,
                  'name': 'tại Thanh Hóa',
                  'pid': 440
                },
                {
                  'id': 521,
                  'name': 'tại Nha Trang',
                  'pid': 440
                },
                {
                  'id': 522,
                  'name': 'tại Vũng Tàu',
                  'pid': 440
                },
                {
                  'id': 523,
                  'name': 'tại Đà Lạt',
                  'pid': 440
                },
                {
                  'id': 524,
                  'name': 'tại Bắc Ninh',
                  'pid': 440
                },
                {
                  'id': 525,
                  'name': 'tại Hải Phòng',
                  'pid': 440
                },
                {
                  'id': 526,
                  'name': 'tại Quy Nhơn',
                  'pid': 440
                },
                {
                  'id': 527,
                  'name': 'tại Huế',
                  'pid': 440
                }
              ]
            },
            {
              'id': 441,
              'name': 'Người Việt Nam sinh sống tại nước ngoài',
              'pid': 379,
              'children': [
                {
                  'id': 442,
                  'name': 'Liên Xô cũ',
                  'pid': 441
                },
                {
                  'id': 443,
                  'name': 'Người Việt tại Nga',
                  'pid': 441,
                  'children': [
                    {
                      'id': 482,
                      'name': 'Người Việt tại Moskva',
                      'pid': 443
                    }
                  ]
                },
                {
                  'id': 444,
                  'name': 'Người Việt tại Đức',
                  'pid': 441,
                  'children': [
                    {
                      'id': 462,
                      'name': 'Người Việt tại Berlin',
                      'pid': 444
                    },
                    {
                      'id': 463,
                      'name': 'Người Việt tại Bremen',
                      'pid': 444
                    },
                    {
                      'id': 464,
                      'name': 'Người Việt tại Hamburg',
                      'pid': 444
                    },
                    {
                      'id': 465,
                      'name': 'Người Việt tại Brandenburg',
                      'pid': 444
                    },
                    {
                      'id': 466,
                      'name': 'Người Việt tại Thale',
                      'pid': 444
                    },
                    {
                      'id': 467,
                      'name': 'người Việt tại Leipzig',
                      'pid': 444
                    },
                    {
                      'id': 1190,
                      'name': 'Người Việt ở Trier',
                      'pid': 444
                    }
                  ]
                },
                {
                  'id': 445,
                  'name': 'Người Việt tại Nhật',
                  'pid': 441,
                  'children': [
                    {
                      'id': 446,
                      'name': 'người Việt tại Osaka',
                      'pid': 445
                    },
                    {
                      'id': 447,
                      'name': 'Người Việt tại Kuochi',
                      'pid': 445
                    },
                    {
                      'id': 448,
                      'name': 'người Việt ở Mie',
                      'pid': 445
                    },
                    {
                      'id': 449,
                      'name': 'Người Việt tại Hokkaido',
                      'pid': 445
                    },
                    {
                      'id': 450,
                      'name': 'Người Việt tại Nagoya',
                      'pid': 445
                    },
                    {
                      'id': 451,
                      'name': 'Người Việt tại Takamatsu',
                      'pid': 445
                    },
                    {
                      'id': 452,
                      'name': 'Người Việt tại Ehime',
                      'pid': 445
                    },
                    {
                      'id': 453,
                      'name': 'Người Việt tại Okayama',
                      'pid': 445
                    },
                    {
                      'id': 454,
                      'name': 'Người Việt tại Chi Ba',
                      'pid': 445
                    },
                    {
                      'id': 455,
                      'name': 'Người Việt tại Nara',
                      'pid': 445
                    },
                    {
                      'id': 456,
                      'name': 'Người Việt tại Komaki',
                      'pid': 445
                    },
                    {
                      'id': 457,
                      'name': 'Người Việt tại Saitama',
                      'pid': 445
                    },
                    {
                      'id': 458,
                      'name': 'Người Việt tại Kobe',
                      'pid': 445
                    },
                    {
                      'id': 459,
                      'name': 'Người việt tại Kagoshima',
                      'pid': 445
                    },
                    {
                      'id': 460,
                      'name': 'người Việt tại Tokyo',
                      'pid': 445
                    },
                    {
                      'id': 461,
                      'name': 'Người Việt tại Kyoto',
                      'pid': 445
                    }
                  ]
                },
                {
                  'id': 468,
                  'name': 'Người Việt tại Hàn Quốc',
                  'pid': 441
                },
                {
                  'id': 469,
                  'name': 'Người Việt tại Ba Lan',
                  'pid': 441,
                  'children': [
                    {
                      'id': 1344,
                      'name': 'Người Việt tại Warszawa',
                      'pid': 469
                    },
                    {
                      'id': 1345,
                      'name': 'Người Việt tại Krakow',
                      'pid': 469
                    }
                  ]
                },
                {
                  'id': 470,
                  'name': 'Người Việt tại Bỉ',
                  'pid': 441
                },
                {
                  'id': 471,
                  'name': 'Người Việt Nam tại Đài Loan',
                  'pid': 441,
                  'children': [
                    {
                      'id': 472,
                      'name': 'Người Việt tại Đài Bắc',
                      'pid': 471
                    },
                    {
                      'id': 473,
                      'name': 'Người Việt tại Cao Hùng',
                      'pid': 471
                    },
                    {
                      'id': 510,
                      'name': 'Việt Nam Ở Hsinchu',
                      'pid': 471
                    }
                  ]
                },
                {
                  'id': 474,
                  'name': 'Người Việt tại UK',
                  'pid': 441,
                  'children': [
                    {
                      'id': 1343,
                      'name': 'Người Việt ở London',
                      'pid': 474
                    }
                  ]
                },
                {
                  'id': 475,
                  'name': 'Người Việt tại Canada',
                  'pid': 441,
                  'children': [
                    {
                      'id': 476,
                      'name': 'Người Việt tại Toronto',
                      'pid': 475
                    },
                    {
                      'id': 477,
                      'name': 'Người Việt ở Vancouver',
                      'pid': 475
                    },
                    {
                      'id': 1250,
                      'name': 'Người Việt ở Ottawa',
                      'pid': 475
                    }
                  ]
                },
                {
                  'id': 478,
                  'name': 'Người Việt ở Thái Lan',
                  'pid': 441,
                  'children': [
                    {
                      'id': 479,
                      'name': 'Người Việt ở Phuket',
                      'pid': 478
                    }
                  ]
                },
                {
                  'id': 480,
                  'name': 'Người Việt tại Mỹ',
                  'pid': 441,
                  'children': [
                    {
                      'id': 481,
                      'name': 'Người Việt tại bang California',
                      'pid': 480
                    },
                    {
                      'id': 513,
                      'name': 'Người Việt tại Colorado',
                      'pid': 480
                    },
                    {
                      'id': 514,
                      'name': 'Người Việt tại Newyork',
                      'pid': 480
                    },
                    {
                      'id': 1663,
                      'name': 'Người Việt tại Seattle',
                      'pid': 480
                    }
                  ]
                },
                {
                  'id': 483,
                  'name': 'Người Việt tại Philippines',
                  'pid': 441
                },
                {
                  'id': 484,
                  'name': 'Người Việt tại Lào',
                  'pid': 441,
                  'children': [
                    {
                      'id': 485,
                      'name': 'người Việt tại Luongprabang',
                      'pid': 484
                    },
                    {
                      'id': 486,
                      'name': 'người Việt tại Savannakhet',
                      'pid': 484
                    },
                    {
                      'id': 487,
                      'name': 'Người Việt tại Viên Chăn',
                      'pid': 484
                    }
                  ]
                },
                {
                  'id': 488,
                  'name': 'Người Việt tại Trung Quốc',
                  'pid': 441
                },
                {
                  'id': 489,
                  'name': 'Người Việt tại châu Âu',
                  'pid': 441
                },
                {
                  'id': 490,
                  'name': 'người Việt tại Ý',
                  'pid': 441
                },
                {
                  'id': 491,
                  'name': 'Người Việt tại Pháp',
                  'pid': 441
                },
                {
                  'id': 492,
                  'name': 'Người Việt tại Myanmar',
                  'pid': 441
                },
                {
                  'id': 493,
                  'name': 'Người Việt tại Thổ Nhĩ Kỳ',
                  'pid': 441
                },
                {
                  'id': 494,
                  'name': 'Người Việt Tại Angola',
                  'pid': 441
                },
                {
                  'id': 495,
                  'name': 'Người Việt tại UAE',
                  'pid': 441,
                  'children': [
                    {
                      'id': 496,
                      'name': 'Người Việt tại Dubai',
                      'pid': 495
                    }
                  ]
                },
                {
                  'id': 497,
                  'name': 'Người Việt tại Singapore',
                  'pid': 441
                },
                {
                  'id': 498,
                  'name': 'Người Việt ở Hà Lan',
                  'pid': 441,
                  'children': [
                    {
                      'id': 1245,
                      'name': 'nguoi viet tai rotterdam',
                      'pid': 498
                    },
                    {
                      'id': 1246,
                      'name': 'Người Việt tại Den Haag',
                      'pid': 498
                    },
                    {
                      'id': 1247,
                      'name': 'Người Việt tại Utrecht',
                      'pid': 498
                    }
                  ]
                },
                {
                  'id': 499,
                  'name': 'Người Việt ở Rumani',
                  'pid': 441
                },
                {
                  'id': 500,
                  'name': 'Người Việt tại Úc',
                  'pid': 441,
                  'children': [
                    {
                      'id': 501,
                      'name': 'người việt tại melbourne',
                      'pid': 500
                    },
                    {
                      'id': 505,
                      'name': 'Người Việt Tại Queensland',
                      'pid': 500
                    }
                  ]
                },
                {
                  'id': 502,
                  'name': 'Người Việt tại Thụy Điển',
                  'pid': 441
                },
                {
                  'id': 503,
                  'name': 'Người Việt tại Macau',
                  'pid': 441
                },
                {
                  'id': 504,
                  'name': 'Người Việt tại Czech',
                  'pid': 441,
                  'children': [
                    {
                      'id': 1235,
                      'name': 'Người việt tại praha',
                      'pid': 504
                    },
                    {
                      'id': 1236,
                      'name': 'Người việt tại Ostrava',
                      'pid': 504
                    },
                    {
                      'id': 1237,
                      'name': 'Người việt tại Plzeň',
                      'pid': 504
                    },
                    {
                      'id': 1238,
                      'name': 'Người Việt tại Brno',
                      'pid': 504
                    }
                  ]
                },
                {
                  'id': 506,
                  'name': 'Người Việt tại Hongkong',
                  'pid': 441
                },
                {
                  'id': 507,
                  'name': 'Người Việt tại malaysia',
                  'pid': 441,
                  'children': [
                    {
                      'id': 508,
                      'name': 'Người Việt tại KUALA LUMPUR',
                      'pid': 507
                    },
                    {
                      'id': 1239,
                      'name': 'Người Việt tại Penang',
                      'pid': 507
                    }
                  ]
                },
                {
                  'id': 509,
                  'name': 'Người Việt tại Campuchia',
                  'pid': 441,
                  'children': [
                    {
                      'id': 1240,
                      'name': 'Người Việt tại Phnom penh',
                      'pid': 509
                    },
                    {
                      'id': 1244,
                      'name': 'Người Việt tại Siem riep',
                      'pid': 509
                    }
                  ]
                },
                {
                  'id': 512,
                  'name': 'Người Việt tại Phần Lan',
                  'pid': 441,
                  'children': [
                    {
                      'id': 1241,
                      'name': 'nguoi viet tai Helsinki',
                      'pid': 512
                    },
                    {
                      'id': 1243,
                      'name': 'Người việt tại Turku',
                      'pid': 512
                    }
                  ]
                },
                {
                  'id': 515,
                  'name': 'Tiệp Khắc (cũ)',
                  'pid': 441
                },
                {
                  'id': 1248,
                  'name': 'Người Việt lại Bungari',
                  'pid': 441
                },
                {
                  'id': 1249,
                  'name': 'Người Việt tại Hungary',
                  'pid': 441
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'id': 1156,
      'name': 'Dịch vụ',
      'pid': 1,
      'children': [
        {
          'id': 1157,
          'name': 'Dịch vụ du lịch',
          'pid': 1156
        },
        {
          'id': 1158,
          'name': 'Dịch vụ nhà hàng',
          'pid': 1156
        },
        {
          'id': 1159,
          'name': 'Dịch vụ spa, làm đẹp',
          'pid': 1156
        },
        {
          'id': 1160,
          'name': 'Dịch vụ giải trí',
          'pid': 1156
        },
        {
          'id': 1161,
          'name': 'Dịch vụ giúp việc, vệ sinh',
          'pid': 1156,
          'children': [
            {
              'id': 1652,
              'name': 'Giúp việc theo giờ',
              'pid': 1161
            },
            {
              'id': 1653,
              'name': 'Giúp việc nhà ăn ở lại',
              'pid': 1161
            },
            {
              'id': 1654,
              'name': 'Giúp việc cho người nước ngoài',
              'pid': 1161
            },
            {
              'id': 1655,
              'name': 'Giúp việc cho người già',
              'pid': 1161
            }
          ]
        },
        {
          'id': 1162,
          'name': 'Dịch vụ bảo vệ, an ninh',
          'pid': 1156
        },
        {
          'id': 1163,
          'name': 'Dịch vụ sửa chữa, lắp đặt',
          'pid': 1156
        },
        {
          'id': 1164,
          'name': 'Dịch vụ đào tạo',
          'pid': 1156
        },
        {
          'id': 1165,
          'name': 'Dịch vụ xe vận chuyển',
          'pid': 1156
        },
        {
          'id': 1166,
          'name': 'Dịch vụ chụp hình',
          'pid': 1156
        },
        {
          'id': 1167,
          'name': 'Dịch vụ phòng thu',
          'pid': 1156
        },
        {
          'id': 1168,
          'name': 'Dịch vụ tổ chức sự kiện',
          'pid': 1156
        },
        {
          'id': 1169,
          'name': 'Dịch vụ cho thú cưng',
          'pid': 1156
        },
        {
          'id': 1170,
          'name': 'Dịch vụ bảo hiểm',
          'pid': 1156
        },
        {
          'id': 1171,
          'name': 'Dịch vụ tư vấn pháp luật',
          'pid': 1156
        },
        {
          'id': 1172,
          'name': 'Dịch vụ khách sạn',
          'pid': 1156,
          'children': [
            {
              'id': 1173,
              'name': 'Homestay',
              'pid': 1172
            },
            {
              'id': 1188,
              'name': 'Khách sạn',
              'pid': 1172
            },
            {
              'id': 1189,
              'name': 'Resort',
              'pid': 1172
            }
          ]
        },
        {
          'id': 1175,
          'name': 'Dịch vụ chăm sóc sức khỏe',
          'pid': 1156
        },
        {
          'id': 1570,
          'name': 'Dịch vụ khác',
          'pid': 1156,
          'children': [
            {
              'id': 1571,
              'name': 'Làm giấy khám sức khỏe',
              'pid': 1570
            }
          ]
        }
      ]
    },
    {
      'id': 1413,
      'name': 'Sức khỏe',
      'pid': 1,
      'children': [
        {
          'id': 1414,
          'name': 'Bệnh lý',
          'pid': 1413,
          'children': [
            {
              'id': 1415,
              'name': 'Sản phụ khoa',
              'pid': 1414,
              'children': [
                {
                  'id': 1416,
                  'name': 'Sản khoa',
                  'pid': 1415,
                  'children': [
                    {
                      'id': 1418,
                      'name': 'Sinh thường',
                      'pid': 1416
                    },
                    {
                      'id': 1419,
                      'name': 'Sinh mổ',
                      'pid': 1416
                    },
                    {
                      'id': 1574,
                      'name': 'Thụ tinh nhân tạo',
                      'pid': 1416
                    },
                    {
                      'id': 1575,
                      'name': 'Siêu âm canh trứng',
                      'pid': 1416
                    }
                  ]
                },
                {
                  'id': 1417,
                  'name': 'Bệnh phụ khoa',
                  'pid': 1415
                }
              ]
            },
            {
              'id': 1420,
              'name': 'Bệnh tim mạch',
              'pid': 1414
            },
            {
              'id': 1421,
              'name': 'Bệnh gan - mật - tụy',
              'pid': 1414
            },
            {
              'id': 1422,
              'name': 'Bệnh mạch máu và bạch huyết',
              'pid': 1414
            },
            {
              'id': 1423,
              'name': 'Bệnh máu',
              'pid': 1414
            },
            {
              'id': 1424,
              'name': 'Bệnh thận',
              'pid': 1414
            },
            {
              'id': 1425,
              'name': 'Bệnh hệ niệu học',
              'pid': 1414
            },
            {
              'id': 1426,
              'name': 'Bệnh hệ thần kinh',
              'pid': 1414
            },
            {
              'id': 1427,
              'name': 'bệnh rối loạn tâm thần',
              'pid': 1414
            },
            {
              'id': 1428,
              'name': 'Bệnh nội tiết',
              'pid': 1414
            },
            {
              'id': 1429,
              'name': 'Bệnh cơ xương khớp',
              'pid': 1414
            },
            {
              'id': 1430,
              'name': 'Bệnh ung thư',
              'pid': 1414
            },
            {
              'id': 1431,
              'name': 'Bệnh da và phân phụ',
              'pid': 1414
            },
            {
              'id': 1432,
              'name': 'Bệnh mắt',
              'pid': 1414
            },
            {
              'id': 1433,
              'name': 'Bệnh tai mũi họng',
              'pid': 1414
            },
            {
              'id': 1434,
              'name': 'bệnh đường hô hấp',
              'pid': 1414
            },
            {
              'id': 1435,
              'name': 'bệnh đường tiêu hóa',
              'pid': 1414
            },
            {
              'id': 1436,
              'name': 'Bệnh tuyến vú',
              'pid': 1414
            },
            {
              'id': 1437,
              'name': 'Bệnh rối loạn dinh dưỡng',
              'pid': 1414
            },
            {
              'id': 1438,
              'name': 'Bệnh truyền nhiễm',
              'pid': 1414
            }
          ]
        },
        {
          'id': 1439,
          'name': 'Bệnh viện',
          'pid': 1413,
          'children': [
            {
              'id': 1440,
              'name': 'Bệnh viện đa khoa',
              'pid': 1439
            },
            {
              'id': 1441,
              'name': 'Bệnh viện thẩm mỹ',
              'pid': 1439
            },
            {
              'id': 1442,
              'name': 'Bệnh viên quốc tế',
              'pid': 1439
            }
          ]
        }
      ]
    }
  ]
}

export default HOBBY
